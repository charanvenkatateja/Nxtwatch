import CartContext from '../../context/CartContext'

import {
  VideoCardCont,
  ThumbnailImage,
  VideoCardBottomCont,
  VideoDetailsCont,
  VideoDetailsText,
  NavLink,
} from './styledComponents'

const VideoCardTwo = props => {
  const {details} = props
  const {id, viewsCount, channel, title, publishedAt, thumbnailUrl} = details
  const {name} = channel

  return (
    <CartContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
        const textColor = isDarkTheme ? '#f9f9f9' : '#181818'

        return (
          <NavLink to={`videos/${id}`} color={bgColor}>
            <VideoCardCont>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoCardBottomCont>
                <VideoDetailsCont>
                  <VideoDetailsText textColor={textColor} size={30}>
                    {title}
                  </VideoDetailsText>
                  <VideoDetailsText>{name}</VideoDetailsText>
                  <VideoDetailsText textColor={textColor} size={20}>
                    {viewsCount} views
                  </VideoDetailsText>
                  <VideoDetailsText>{publishedAt}</VideoDetailsText>
                </VideoDetailsCont>
              </VideoCardBottomCont>
            </VideoCardCont>
          </NavLink>
        )
      }}
    </CartContext.Consumer>
  )
}
export default VideoCardTwo
