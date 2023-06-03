import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'

import {
  AiFillLike,
  AiFillDislike,
  AiOutlineLike,
  AiOutlineDislike,
} from 'react-icons/ai'
import {RiPlayListAddFill} from 'react-icons/ri'

import CartContext from '../../context/CartContext'

import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  ProductLoaderCont,
  HomeCont,
  VideoDetailsCont,
  VideoDetailsSideCont,
  VideoDetailsTitle,
  VideoDetailsTextCont,
  LikesCont,
  ViewsText,
  IconCont,
  HorizontalLine,
  ChannelLogo,
  ChannelCont,
  ChannelDetailsCont,
  LogoCont,
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

class VideoItemDetails extends Component {
  state = {
    videoDetails: [],
    isVideoSaved: false,
    isLiked: false,
    isDisliked: false,
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({apiStatus: apiStatusConstants.inprogress})

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: ` Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = {
        id: fetchedData.video_details.id,
        publishedAt: fetchedData.video_details.published_at,
        description: fetchedData.video_details.description,
        title: fetchedData.video_details.title,
        videoUrl: fetchedData.video_details.video_url,
        viewCount: fetchedData.video_details.view_count,
        thumbnailUrl: fetchedData.video_details.thumbnail_url,
        channel: {
          name: fetchedData.video_details.channel.name,
          profileImageUrl: fetchedData.video_details.channel.profile_image_url,
          subscriberCount: fetchedData.video_details.channel.subscriber_count,
        },
      }

      console.log(updatedData)
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSpecficVideosDetails = () => (
    <CartContext.Consumer>
      {value => {
        const {videoDetails, isVideoSaved, isLiked, isDisliked} = this.state
        const {
          id,
          description,
          viewCount,
          channel,
          videoUrl,
          title,
          publishedAt,
          videoSaved,
        } = videoDetails
        const {name, profileImageUrl, subscriberCount} = channel
        const {addToSaveVideos, removeSaveVideos} = value

        const addOrRemoveItem = () => {
          if (isVideoSaved === true) {
            removeSaveVideos(id)
          } else {
            addToSaveVideos({...videoDetails, videoSaved: true})
          }
        }

        const saveVideoToList = () => {
          this.setState(
            prev => ({isVideoSaved: !prev.isVideoSaved}),
            addOrRemoveItem,
          )
        }

        const onClickLikeButton = () => {
          this.setState(prev => ({isLiked: !prev.isLiked, isDisliked: false}))
        }

        const onClickDislikeButton = () => {
          this.setState(prev => ({
            isDisliked: !prev.isDisliked,
            isLiked: false,
          }))
        }

        const likedClass = isLiked ? '#2563eb' : '#64748b'
        const dislikedClass = isDisliked ? '#2563eb' : '#64748b'

        const likedIcon = isLiked ? <AiFillLike /> : <AiOutlineLike />
        const dislikedIcon = isDisliked ? (
          <AiFillDislike />
        ) : (
          <AiOutlineDislike />
        )

        return (
          <div data-testid="videoItemDetails">
            <Header />
            <HomeCont>
              <Sidebar />
              <VideoDetailsSideCont>
                <ReactPlayer
                  url={videoUrl}
                  contols
                  height="500px"
                  width="90%"
                />
                <VideoDetailsTextCont>
                  <VideoDetailsTitle>{title}</VideoDetailsTitle>
                  <VideoDetailsCont>
                    <ViewsText>{viewCount} views</ViewsText>
                    <ViewsText>{publishedAt}</ViewsText>
                    <LikesCont>
                      <IconCont
                        type="button"
                        color={likedClass}
                        onClick={onClickLikeButton}
                      >
                        {likedIcon}
                        <ViewsText color={likedClass}>Like</ViewsText>
                      </IconCont>
                      <IconCont
                        type="button"
                        color={dislikedClass}
                        onClick={onClickDislikeButton}
                      >
                        {dislikedIcon}
                        <ViewsText color={dislikedClass}>Dislike</ViewsText>
                      </IconCont>
                      <IconCont
                        color={videoSaved ? '#4f46e5' : '#181818'}
                        onClick={saveVideoToList}
                      >
                        <RiPlayListAddFill />
                        <ViewsText color={videoSaved ? '#4f46e5' : '#181818'}>
                          {isVideoSaved ? 'Saved' : 'Save'}
                        </ViewsText>
                      </IconCont>
                    </LikesCont>
                  </VideoDetailsCont>
                  <HorizontalLine />
                  <ChannelCont>
                    <LogoCont>
                      <ChannelLogo src={profileImageUrl} alt="channel logo" />
                    </LogoCont>
                    <ChannelDetailsCont>
                      <ViewsText>{name}</ViewsText>
                      <ViewsText>{subscriberCount} Subscribers</ViewsText>
                      <ViewsText>{description}</ViewsText>
                    </ChannelDetailsCont>
                  </ChannelCont>
                </VideoDetailsTextCont>
              </VideoDetailsSideCont>
            </HomeCont>
          </div>
        )
      }}
    </CartContext.Consumer>
  )

  renderLoaderView = () => (
    <ProductLoaderCont
      data-testid="loader"
      className="products-loader-container"
    >
      <Loader type="ThreeDots" color="#0b69ff" height={50} width={50} />
    </ProductLoaderCont>
  )

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
      <NavLink>
        <Retry type="button" className="button" onClick={this.getVideoDetails}>
          Retry
        </Retry>
      </NavLink>
    </NotFoundCont>
  )

  renderAllProcess = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSpecficVideosDetails()
      case apiStatusConstants.inprogress:
        return this.renderLoaderView()
      case apiStatusConstants.failure:
        return this.renderFailure()
      default:
        return null
    }
  }

  render() {
    return <>{this.renderAllProcess()}</>
  }
}
export default VideoItemDetails
