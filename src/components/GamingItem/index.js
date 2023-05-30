import {
  VideoItemCont,
  ThumbnailImg,
  VideoItemBottomCont,
  VideoDetailsCont,
  VideoDetailsText,
  NavLink,
} from './styledComponents'

const GamingItem = props => {
  const {gameDetails} = props
  const {id, viewCount, thumbnailUrl, title} = gameDetails
  return (
    <NavLink to={`videos/${id}`}>
      <VideoItemCont>
        <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
        <VideoItemBottomCont>
          <VideoDetailsCont>
            <VideoDetailsText>{title}</VideoDetailsText>
            <VideoDetailsText>{viewCount} views</VideoDetailsText>
          </VideoDetailsCont>
        </VideoItemBottomCont>
      </VideoItemCont>
    </NavLink>
  )
}
export default GamingItem
