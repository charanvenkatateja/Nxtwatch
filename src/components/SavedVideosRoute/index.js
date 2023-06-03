import {Component} from 'react'

import Loader from 'react-loader-spinner'

import {AiFillFire} from 'react-icons/ai'

import VideoCardTwo from '../VideoCardTwo'

import Sidebar from '../Sidebar'
import Header from '../Header'
import CartContext from '../../context/CartContext'

import {
  SearchVideosContainer,
  VideosCont,
  TrendingHeadCont,
  TrendLogo,
  TrendHead,
  ProductsLoaderCont,
  HomeStickyCont,
  HomeSideCont,
  HomeCont,
  Image,
  NotFoundCont,
  Heading,
  Desc,
} from './styledComponents'

class SavedVideosRoute extends Component {
  renderSavedVideos = () => (
    <CartContext.Consumer>
      {value => {
        const {savedVideos, isDarkTheme} = value
        const bgColor = isDarkTheme ? '#080808' : '#f9f9f9'
        const textColor = isDarkTheme ? '#f9f9f9' : '#080808'
        console.log(savedVideos)
        const isVideosAvailable = savedVideos.length === 0

        return isVideosAvailable ? (
          <NotFoundCont bgColor={bgColor}>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <Heading textColor={textColor}>No saved videos found</Heading>
            <Desc textColor={textColor}>
              You can save your videos while watching them.
            </Desc>
          </NotFoundCont>
        ) : (
          <SearchVideosContainer bgColor={bgColor}>
            <TrendingHeadCont bgColor={bgColor}>
              <TrendLogo>
                <AiFillFire />
              </TrendLogo>
              <TrendHead color={textColor}>Saved Videos</TrendHead>
            </TrendingHeadCont>
            <VideosCont bgColor={bgColor}>
              {savedVideos.map(each => (
                <VideoCardTwo key={each.id} details={each} />
              ))}
            </VideosCont>
          </SearchVideosContainer>
        )
      }}
    </CartContext.Consumer>
  )

  renderLoadingView = () => (
    <ProductsLoaderCont data-testid="loader">
      <Loader type="ThreeDots" size={50} color="#0b69ff" />
    </ProductsLoaderCont>
  )

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

          return (
            <div data-testid="savedVideos">
              <Header />
              <HomeCont data-testid="home" bgColor={bgColor}>
                <HomeStickyCont>
                  <Sidebar />
                </HomeStickyCont>
                <HomeSideCont bgColor={bgColor}>
                  {this.renderSavedVideos()}
                </HomeSideCont>
              </HomeCont>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}
export default SavedVideosRoute
