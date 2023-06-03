import CartContext from '../../context/CartContext'

import {
  VideoCardCont,
  ThumbnailImage,
  VideoCardBottomCont,
  VideoDetailsCont,
  VideoDetailsText,
  NavLink,
  ProfileImage,
} from './styledComponents'

const VideoCard = props => {
  const {details} = props
  const {id, viewsCount, channel, title, publishedAt, thumbnailUrl} = details
  const {name, profileImageUrl} = channel

  return (
    <CartContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
        const textColor = isDarkTheme ? '#f9f9f9' : '#181818'

        return (
          <NavLink to={`videos/${id}`}>
            <VideoCardCont bgColor={bgColor}>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoCardBottomCont>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <VideoDetailsCont>
                  <VideoDetailsText color={textColor} size={30}>
                    {title}
                  </VideoDetailsText>
                  <VideoDetailsText color={textColor}>{name}</VideoDetailsText>
                  <VideoDetailsText color={textColor} size={20}>
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
export default VideoCard
