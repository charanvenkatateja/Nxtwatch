import {Link, withRouter} from 'react-router-dom'

import {BsMoon} from 'react-icons/bs'
import {FiSun} from 'react-icons/fi'

import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import './index.css'

import {
  NavHeader,
  ProfileImg,
  ContentCont,
  LogOutButton,
  ThemeButton,
  WebsiteLogo,
  ModalCont,
  CloseButton,
  AlignRow,
  ConfirmButton,
  ModalDesc,
  AlignColumn,
  ContentListItem,
} from './styledComponents'

import CartContext from '../../context/CartContext'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <CartContext.Consumer>
      {value => {
        const {onChangeTheme, isDarkTheme} = value

        const onClickChangeTheme = () => {
          onChangeTheme()
        }

        const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
        const textColor = isDarkTheme ? '#f9f9f9' : '#181818'
        const websiteLogo = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        return (
          <NavHeader bgColor={bgColor}>
            <Link to="/">
              <WebsiteLogo src={websiteLogo} alt="website logo" />
            </Link>
            <ContentCont>
              <ContentListItem>
                <ThemeButton
                  data-testid="theme"
                  onClick={onClickChangeTheme}
                  color={textColor}
                >
                  {isDarkTheme ? <FiSun /> : <BsMoon />}
                </ThemeButton>
              </ContentListItem>
              <ContentListItem>
                <ProfileImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </ContentListItem>
              <ContentListItem>
                <Popup
                  modal
                  trigger={
                    <LogOutButton type="button" data-testid="iconButton">
                      Logout
                    </LogOutButton>
                  }
                  className="popup-content"
                >
                  {close => (
                    <ModalCont>
                      <AlignColumn>
                        <ModalDesc>Are you sure, you want to logout</ModalDesc>
                        <AlignRow>
                          <CloseButton
                            onClick={() => close()}
                            data-testid="closeButton"
                            type="button"
                          >
                            Cancel
                          </CloseButton>
                          <ConfirmButton type="button" onClick={onClickLogout}>
                            Confirm
                          </ConfirmButton>
                        </AlignRow>
                      </AlignColumn>
                    </ModalCont>
                  )}
                </Popup>
              </ContentListItem>
            </ContentCont>
          </NavHeader>
        )
      }}
    </CartContext.Consumer>
  )
}

export default withRouter(Header)
