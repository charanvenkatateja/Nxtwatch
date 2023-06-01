import {Component} from 'react'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {AiFillFire} from 'react-icons/ai'

import VideoCardTwo from '../VideoCardTwo'

import Header from '../Header'

import Sidebar from '../Sidebar'

import CartContext from '../../context/CartContext'

import {
  SearchVideosCont,
  VideosCont,
  TrendHeadCont,
  TrendLogo,
  TrendHeading,
  ProductLoaderCont,
  HomeStickyCont,
  HomeSideCont,
  HomeCont,
  NotFoundCont,
  Image,
  Heading,
  Desc,
  NavLinkTwo,
  Retry,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inprogress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class TrendingRoute extends Component {
  state = {apiStatus: apiStatusConstants.initial, SearchVideos: []}

  componentDidMount() {
    this.getSuggestVideos()
  }

  getSuggestVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inprogress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
      <Loader type="ThreeDots" color="#0b69ff" height={50} width={50} />
    </ProductLoaderCont>
  )

  renderTrendingVideos = () => {
    const {SearchVideos} = this.state
    return (
      <CartContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#080808'

          return (
            <SearchVideosCont data-testid="trending" bgColor={bgColor}>
              <TrendHeadCont bgColor={bgColor} color={textColor}>
                <TrendLogo>
                  <AiFillFire />
                </TrendLogo>
                <TrendHeading color={textColor}>Trending</TrendHeading>
              </TrendHeadCont>
              <VideosCont>
                {SearchVideos.map(each => (
                  <VideoCardTwo details={each} key={each.id} />
                ))}
              </VideosCont>
            </SearchVideosCont>
          )
        }}
      </CartContext.Consumer>
    )
  }

  renderFailure = () => (
    <NotFoundCont>
      <Image
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
        className="jobs-fialure-img"
      />
      <Heading>Oops! Something Went Wrong</Heading>
      <Desc className="jobs-failure-description">
        We are having some trouble to complete your request.Please try again.
      </Desc>
      <NavLinkTwo>
        <Retry type="button" className="button" onClick={this.getSuggestVideos}>
          Retry
        </Retry>
      </NavLinkTwo>
    </NotFoundCont>
  )

  renderAllProcess = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingVideos()
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
            <div>
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
export default TrendingRoute
