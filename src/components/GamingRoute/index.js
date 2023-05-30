import {Component} from 'react'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import GamingItem from '../GamingItem'

import Header from '../Header'

import Sidebar from '../Sidebar'

import CartContext from '../../context/CartContext'

import {
  SearchVideoCont,
  VideosCont,
  ProductLoaderCont,
  HomeStickyCont,
  HomeSideCont,
  HomeCont,
  NotFoundCont,
  Image,
  Heading,
  Desc,
  NavLink,
  Retry,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inprogress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class GamingRoute extends Component {
  state = {apiStatus: apiStatusConstants.initial, SearchVideos: []}

  componentDidMount() {
    this.getSuggestVideos()
  }

  getSuggestVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inprogress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
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
        title: each.title,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        SearchVideos: updatedData,
      })
    }
    if (response.ok !== true) {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoaderView = () => (
    <ProductLoaderCont
      data-testid="loader"
      className="products-loader-container"
    >
      <Loader type="ThreeDots" color="0b69ff" height={50} width={50} />
    </ProductLoaderCont>
  )

  renderGamingVideos = () => (
    <CartContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {SearchVideos} = this.state
        const bgColor = isDarkTheme ? '#231f20' : '#0f0f0f'

        return (
          <SearchVideoCont data-testid="gaming" bgColor={bgColor}>
            <h1>Gaming</h1>
            <VideosCont bgColor={bgColor}>
              {SearchVideos.map(each => (
                <GamingItem gameDetails={each} key={each.id} />
              ))}
            </VideosCont>
          </SearchVideoCont>
        )
      }}
    </CartContext.Consumer>
  )

  renderFailure = () => (
    <NotFoundCont>
      <Image src="" alt="" className="jobs-fialure-img" />
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
        return this.renderGamingVideos()
      case apiStatusConstants.inprogress:
        return this.renderLoaderView()
      case apiStatusConstants.failure:
        return this.renderFailure()
      default:
        return null
    }
  }

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          return (
            <div data-testid="home">
              <Header />
              <HomeCont data-testid="home" bgColor={bgColor}>
                <HomeStickyCont>
                  <Sidebar />
                </HomeStickyCont>
                <HomeSideCont>{this.renderAllProcess()}</HomeSideCont>
              </HomeCont>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}
export default GamingRoute
