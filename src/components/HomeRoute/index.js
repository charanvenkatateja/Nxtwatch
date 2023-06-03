import {Component} from 'react'

import {IoMdClose} from 'react-icons/io'

import Header from '../Header'
import SearchVideos from '../SearchVideos'
import CartContext from '../../context/CartContext'
import Sidebar from '../Sidebar'

import {
  HomeCont,
  HomeSideCont,
  BannerImg,
  HomeStickyCont,
  CloseButton,
  ModalCont,
  GetItButton,
  BannerImgCont,
} from './styledComponents'

class HomeRoute extends Component {
  state = {display: 'flex'}

  onCloseBanner = () => {
    this.setState({display: 'none'}, this.renderHomeVideos)
  }

  renderHomeVideos = () => {
    const {display} = this.state

    return (
      <>
        <BannerImgCont
          data-testid="banner"
          display={display}
          alt="Banner Background image"
        >
          <ModalCont>
            <BannerImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
            />
            <p>Buy Nxt Watch Premium</p>
            <GetItButton>GET IT NOW</GetItButton>
          </ModalCont>
          <CloseButton
            type="button"
            onClick={this.onCloseBanner}
            data-testid="close"
          >
            <IoMdClose color="#231f20" size={30} />
          </CloseButton>
        </BannerImgCont>
        <SearchVideos />
      </>
    )
  }

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'

          return (
            <div data-testid="home">
              <Header />
              <HomeCont bgColor={bgColor}>
                <HomeStickyCont>
                  <Sidebar onChangeActiveTab={this.onChangeActiveTab} />
                </HomeStickyCont>
                <HomeSideCont bgColor={bgColor}>
                  {this.renderHomeVideos()}
                </HomeSideCont>
              </HomeCont>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}
export default HomeRoute
