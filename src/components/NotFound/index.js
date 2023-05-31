import {NotFoundCont, Desc, Heading, Image} from './styledComponents'
import CartContext from '../../context/CartContext'

const NotFound = () => (
  <CartContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      const iSDarkHeading = isDarkTheme ? 'white' : 'black'
      const isDarkDesc = isDarkTheme ? 'white' : 'black'
      const isDarkCont = isDarkTheme ? 'black' : 'white'

      return (
        <>
          <NotFoundCont isDark={isDarkCont}>
            <Image src={imageUrl} alt="not found" />
            <Heading isDark={iSDarkHeading} isDarkTheme>
              Page Not Found
            </Heading>
            <Desc isDark={isDarkDesc}>
              we are sorry, the page you requested could not be found.
            </Desc>
          </NotFoundCont>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default NotFound
