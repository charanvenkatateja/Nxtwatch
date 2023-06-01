
import {Component} from 'react'

import {AiFillFire, AiFillHome} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import CartContext from '../../context/CartContext'

import {
  SidebarCont,
  NavItemsCont,
  ItemText,
  TextItemCont,
  SidebarBottomCont,
  BottomText,
  IconsCont,
  IconImage,
  NavLink,
} from './styledComponents'

class Sidebar extends Component {
  renderStatusItems = () => (
    <CartContext.Consumer>
      {value => {
        const {activeTab, activeTabItem, isDarkTheme} = value

        const onClickHomeTabItem = () => {
          activeTabItem('HOME')
        }
        const onClickTrendingTabItem = () => {
          activeTabItem('TRENDING')
        }
        const onClickGamingTabItem = () => {
          activeTabItem('GAMING')
        }
        const onClickSavedVideosTabItem = () => {
          activeTabItem('SAVED VIDEOS')
        }

        const bgColor = isDarkTheme ? '#ffffff' : '#000000'
        const textColor = isDarkTheme ? '#f9f9f9' : '#181818'

        return (
          <SidebarCont>
            <NavItemsCont>
              <TextItemCont
                isActive={activeTab === 'HOME' ? '#f1f5f9' : 'transparent'}
                isActiveColor={bgColor}
                onClick={onClickHomeTabItem}
              >
                <NavLink
                  to="/"
                  color={activeTab === 'HOME' ? '#ff0000' : {bgColor}}
                >
                  <AiFillHome />
                  <ItemText
                    color={activeTab === 'HOME' ? '#ff0000' : {textColor}}
                  >
                    Home
                  </ItemText>
                </NavLink>
              </TextItemCont>

              <TextItemCont
                isActive={activeTab === 'TRENDING' ? '#f1f5f9' : 'transparent'}
                onClick={onClickTrendingTabItem}
              >
                <NavLink
                  to="/tending"
                  color={activeTab === 'TRENDING' ? '#ff0000' : {textColor}}
                >
                  <AiFillFire />
                  <ItemText
                    color={activeTab === 'TRENDING' ? '#ff0000' : {bgColor}}
                  >
                    Trending
                  </ItemText>
                </NavLink>
              </TextItemCont>

              <TextItemCont
                isActive={activeTab === 'GAMING' ? '#f1f5f9' : 'transparent'}
                onClick={onClickGamingTabItem}
              >
                <NavLink
                  to="/gaming"
                  color={activeTab === 'GAMING' ? '#ff0000' : {textColor}}
                >
                  <SiYoutubegaming />
                  <ItemText
                    color={activeTab === 'GAMING' ? '#ff0000' : {bgColor}}
                  >
                    Gaming
                  </ItemText>
                </NavLink>
              </TextItemCont>

              <TextItemCont
                isActive={
                  activeTab === 'SAVED VIDEOS' ? '#f1f5f9' : 'transparent'
                }
                onClick={onClickSavedVideosTabItem}
              >
                <NavLink
                  to="/saved-videos"
                  color={activeTab === 'SAVED VIDEOS' ? '#ff0000' : {textColor}}
                >
                  <MdPlaylistAdd />
                  <ItemText
                    color={activeTab === 'SAVED VIDEOS' ? '#ff0000' : {bgColor}}
                  >
                    Saved Videos
                  </ItemText>
                </NavLink>
              </TextItemCont>
            </NavItemsCont>
            <SidebarBottomCont>
              <BottomText color={textColor}>CONTACT US</BottomText>
              <IconsCont>
                <IconImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <IconImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <IconImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </IconsCont>
              <ItemText color={textColor}>
                Enjoy! Now to see your channels and recommendations!
              </ItemText>
            </SidebarBottomCont>
          </SidebarCont>
        )
      }}
    </CartContext.Consumer>
  )

  render() {
    return <>{this.renderStatusItems()}</>
  }
}
export default Sidebar
