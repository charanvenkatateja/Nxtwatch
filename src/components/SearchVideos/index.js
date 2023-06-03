import {Component} from 'react'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {AiOutlineSearch} from 'react-icons/ai'

import VideoCard from '../VideoCard'
import CartContext from '../../context/CartContext'

import {
  SearchVideosCont,
  SearchInput,
  VideosCont,
  ProductsLoaderCont,
  NotFoundCont,
  Image,
  NavLink,
  Desc,
  Retry,
  Heading,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inprogress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class SearchVideos extends Component {
  state = {
    searchInput: '',
    searchValue: '',
    apiStatus: apiStatusConstants.initial,
    searchVideos: [],
  }

  componentDidMount() {
    this.getSuggestVideos()
  }

  onChangeSearchInput = e => {
    this.setState({searchInput: e.target.value})
  }

  onClickSearchButton = () => {
    const {searchInput} = this.state
    this.setState({searchValue: searchInput}, this.getSuggestVideos)
  }

  onEnterClickSearch = event => {
    if (event.key === 'Enter') {
      const {searchInput} = this.state
      this.setState({searchValue: searchInput}, this.getSuggestVideos)
    }
  }

  getSuggestVideos = async () => {
    const {searchValue} = this.state
    this.setState({apiStatus: apiStatusConstants.inprogress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchValue}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: ` Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(each => ({
        id: each.id,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        title: each.title,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        searchVideos: updatedData,
      })
    }
    if (response.ok !== true) {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoaderView = () => (
    <ProductsLoaderCont
      data-testid="loader"
      className="products-loader-container"
    >
      <Loader type="ThreeDots" color="0b69ff" height={50} width={50} />
    </ProductsLoaderCont>
  )

  renderHomeVideos = () => {
    ;<CartContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {searchInput, searchVideos} = this.state
        console.log(searchInput)
        const bgColor = isDarkTheme ? '#231f20' : '#f9f9f9'
        const isVideosAvailable = searchVideos.length === 0

        return isVideosAvailable ? (
          <div>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <Heading>No Search results found</Heading>
            <Desc>Try different key words or remove search filter</Desc>
            <Retry onClick={this.getSuggestVideos}>Retry</Retry>
          </div>
        ) : (
          <SearchVideosCont bgColor={bgColor}>
            <div>
              <SearchInput
                value={searchInput}
                onChange={this.onChangeSearchInput}
                placeholder="Serach"
                type="search"
                onKeyDown={this.onEnterClickSearch}
              />
              <button
                type="button"
                data-testid="searchButton"
                onClick={this.onClickSearchButton}
              >
                <AiOutlineSearch />
              </button>
            </div>
            <VideosCont>
              {searchVideos.map(each => (
                <VideoCard key={each.id} details={each} />
              ))}
            </VideosCont>
          </SearchVideosCont>
        )
      }}
    </CartContext.Consumer>
  }

  renderFailure = () => (
    <NotFoundCont>
      <Image
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="faiure view"
        className="jobs-fialure-img"
      />
      <Heading>Oops! Something Went Wrong</Heading>
      <Desc className="jobs-failure-description">
        We are having some trouble to complete your request.Please try again.
      </Desc>
      <NavLink>
        <Retry type="button" className="button" onClick={this.getSuggestVideos}>
          Retry
        </Retry>
      </NavLink>
    </NotFoundCont>
  )

  renderAllProcess = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderHomeVideos()
      case apiStatusConstants.inprogress:
        return this.renderLoaderView()
      case apiStatusConstants.failure:
        return this.renderFailure()
      default:
        return null
    }
  }

  render() {
    return <>{this.renderAllProcess()}</>
  }
}
export default SearchVideos
