import {Component} from 'react'
import Loader from 'react-loader-spinner'

import {AiFillHome, AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {GiLoveMystery} from 'react-icons/gi'
import {RiMenuAddFill, RiMenuAddLine} from 'react-icons/ri'
import {BsDot} from 'react-icons/bs'

import {formatDistanceToNow} from 'date-fns'

import Cookies from 'js-cookie'

import ReactPlayer from 'react-player'

import Header from '../Header'

import VideoContext from '../../context/VideoContext'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

import {
  VideoItemDetailsRouteContainer,
  VideoItemDetailsContainer,
  SideBarContainer,
  NavLinksContainer,
  LinkGenerate,
  LinkContainer,
  Nav,
  ContactUsContainer,
  ContactUs,
  LogosContainer,
  Logo,
  ContactUsTagLine,
  VideoBarContainer,
  ReactPlayerContainer,
  Title,
  VideoViewsAndPublishAndLikeContainer,
  ViewsAndPublishContainer,
  ViewsCount,
  Published,
  LikeDislikeAndSaveContainer,
  LikeContainer,
  DislikeContainer,
  SaveContainer,
  SocialButton,
  TextContent,
  LikeTextContent,
  DisLikeTextContent,
  Horizontal,
  ProfileWithSubscribersContainer,
  Profile,
  NameAndSubscribers,
  Name,
  Subscribers,
  Description,
  SideBarContainerDark,
  NavDark,
  ContactUsDark,
  ContactUsTagLineDark,
  VideoBarContainerDark,
  TitleDark,
  ViewsCountDark,
  TextContentDark,
  LikeTextContentDark,
  DisLikeTextContentDark,
  HorizontalDark,
  NameDark,
  DescriptionDark,
  SubscribersDark,
  PublishedDark,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureName,
  FailureDescription,
  RetryBtn,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  progress: 'PROGRESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    apiStatus: apiConstants.initial,
    isLiked: false,
    isDisLiked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({
      apiStatus: apiConstants.progress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = ` https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = {
        id: data.video_details.id,
        thumbnailUrl: data.video_details.thumbnail_url,
        videoUrl: data.video_details.video_url,
        title: data.video_details.title,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
      }

      this.setState({
        videoDetails: updatedData,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiConstants.failure,
      })
    }
  }

  sideBarDark = () => (
    <SideBarContainerDark>
      <NavLinksContainer>
        <LinkGenerate to="/">
          <LinkContainer>
            <AiFillHome color="#64748b" size="16" />
            <NavDark>Home</NavDark>
          </LinkContainer>
        </LinkGenerate>
        <LinkGenerate to="/trending">
          <LinkContainer>
            <HiFire color="#64748b" size="16" />
            <NavDark>Trending</NavDark>
          </LinkContainer>
        </LinkGenerate>
        <LinkGenerate to="/gaming">
          <LinkContainer>
            <GiLoveMystery color="#64748b" size="16" />
            <NavDark>Gaming</NavDark>
          </LinkContainer>
        </LinkGenerate>
        <LinkGenerate to="/saved-videos">
          <LinkContainer>
            <RiMenuAddFill color="#64748b" size="16" />
            <NavDark>Saved videos</NavDark>
          </LinkContainer>
        </LinkGenerate>
      </NavLinksContainer>
      <ContactUsContainer>
        <ContactUsDark>CONTACT US</ContactUsDark>
        <LogosContainer>
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
          />
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            alt="twitter logo"
          />
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt="linked in logo"
          />
        </LogosContainer>
        <ContactUsTagLineDark>
          Enjoy! Now to see your channels and recommendations!
        </ContactUsTagLineDark>
      </ContactUsContainer>
    </SideBarContainerDark>
  )

  sideBarLight = () => (
    <SideBarContainer>
      <NavLinksContainer>
        <LinkGenerate to="/">
          <LinkContainer>
            <AiFillHome color="#64748b" size="16" />
            <Nav>Home</Nav>
          </LinkContainer>
        </LinkGenerate>
        <LinkGenerate to="/trending">
          <LinkContainer>
            <HiFire color="#64748b" size="16" />
            <Nav>Trending</Nav>
          </LinkContainer>
        </LinkGenerate>
        <LinkGenerate to="/gaming">
          <LinkContainer>
            <GiLoveMystery color="#64748b" size="16" />
            <Nav>Gaming</Nav>
          </LinkContainer>
        </LinkGenerate>
        <LinkGenerate to="/saved-videos">
          <LinkContainer>
            <RiMenuAddFill color="#64748b" size="16" />
            <Nav>Saved videos</Nav>
          </LinkContainer>
        </LinkGenerate>
      </NavLinksContainer>
      <ContactUsContainer>
        <ContactUs>CONTACT US</ContactUs>
        <LogosContainer>
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
          />
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            alt="twitter logo"
          />
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt="linked in logo"
          />
        </LogosContainer>
        <ContactUsTagLine>
          Enjoy! Now to see your channels and recommendations!
        </ContactUsTagLine>
      </ContactUsContainer>
    </SideBarContainer>
  )

  clickLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisLiked: false,
    }))
  }

  clickDisLike = () => {
    this.setState(prevState => ({
      isDisLiked: !prevState.isDisLiked,
      isLiked: false,
    }))
  }

  renderVideoBarLight = () => {
    const {videoDetails, isLiked, isDisLiked} = this.state
    const {
      videoUrl,
      title,
      viewCount,
      publishedAt,
      profileImageUrl,
      name,
      subscriberCount,
      description,
    } = videoDetails
    return (
      <VideoContext.Consumer>
        {value => {
          const {addSavedVideo, listOfSavedVideos} = value
          const index = listOfSavedVideos.findIndex(
            each => each.id === videoDetails.id,
          )
          let isSaved
          if (index === -1) {
            isSaved = false
          } else {
            isSaved = true
          }
          const clickSave = () => {
            addSavedVideo(videoDetails)
          }
          return (
            <VideoBarContainer>
              <ReactPlayerContainer>
                <ReactPlayer
                  url={videoUrl}
                  width="100%"
                  controls
                  className="playersm"
                />
                <ReactPlayer
                  url={videoUrl}
                  width="100%"
                  height="100%"
                  controls
                  className="playerlg"
                />
              </ReactPlayerContainer>
              <Title>{title}</Title>
              <VideoViewsAndPublishAndLikeContainer>
                <ViewsAndPublishContainer>
                  <ViewsCount>{viewCount} views</ViewsCount>
                  <Published>
                    <BsDot size="18" color="#1e293b" />
                    {formatDistanceToNow(new Date(publishedAt))}
                  </Published>
                </ViewsAndPublishContainer>
                <LikeDislikeAndSaveContainer>
                  <LikeContainer>
                    <SocialButton type="button" onClick={this.clickLike}>
                      <AiOutlineLike
                        color={isLiked ? '#2563eb' : '#64748b'}
                        size="21"
                      />
                      <LikeTextContent isLiked={isLiked}>Like</LikeTextContent>
                    </SocialButton>
                  </LikeContainer>
                  <DislikeContainer>
                    <SocialButton type="button" onClick={this.clickDisLike}>
                      <AiOutlineDislike
                        color={isDisLiked ? '#2563eb' : '#64748b'}
                        size="21"
                      />
                      <DisLikeTextContent isDisLiked={isDisLiked}>
                        Dislike
                      </DisLikeTextContent>
                    </SocialButton>
                  </DislikeContainer>
                  <SaveContainer>
                    <SocialButton type="button" onClick={clickSave}>
                      <RiMenuAddLine
                        color={isSaved ? '#2563eb' : '#64748b'}
                        size="21"
                      />
                      <TextContent isSaved={isSaved}>
                        {isSaved ? 'saved' : 'save'}
                      </TextContent>
                    </SocialButton>
                  </SaveContainer>
                </LikeDislikeAndSaveContainer>
              </VideoViewsAndPublishAndLikeContainer>
              <Horizontal />
              <ProfileWithSubscribersContainer>
                <Profile src={profileImageUrl} alt="channel logo" />
                <NameAndSubscribers>
                  <Name>{name}</Name>
                  <Subscribers>{subscriberCount} subscribers</Subscribers>
                </NameAndSubscribers>
              </ProfileWithSubscribersContainer>
              <Description>{description}</Description>
            </VideoBarContainer>
          )
        }}
      </VideoContext.Consumer>
    )
  }

  renderVideoBarDark = () => {
    const {videoDetails, isLiked, isDisLiked} = this.state
    const {
      videoUrl,
      title,
      viewCount,
      publishedAt,
      profileImageUrl,
      name,
      subscriberCount,
      description,
    } = videoDetails
    return (
      <VideoContext.Consumer>
        {value => {
          const {addSavedVideo, listOfSavedVideos} = value
          const index = listOfSavedVideos.findIndex(
            each => each.id === videoDetails.id,
          )
          let isSaved
          if (index === -1) {
            isSaved = false
          } else {
            isSaved = true
          }
          const clickSave = () => {
            addSavedVideo(videoDetails)
          }
          return (
            <VideoBarContainerDark>
              <ReactPlayerContainer>
                <ReactPlayer
                  url={videoUrl}
                  width="100%"
                  controls
                  className="playersm"
                />
                <ReactPlayer
                  url={videoUrl}
                  width="100%"
                  height="100%"
                  controls
                  className="playerlg"
                />
              </ReactPlayerContainer>
              <TitleDark>{title}</TitleDark>
              <VideoViewsAndPublishAndLikeContainer>
                <ViewsAndPublishContainer>
                  <ViewsCountDark>{viewCount} views</ViewsCountDark>
                  <PublishedDark>
                    <BsDot size="18" color="#7e858e" />
                    {formatDistanceToNow(new Date(publishedAt))}
                  </PublishedDark>
                </ViewsAndPublishContainer>
                <LikeDislikeAndSaveContainer>
                  <LikeContainer>
                    <SocialButton type="button" onClick={this.clickLike}>
                      <AiOutlineLike
                        color={isLiked ? '#2563eb' : '#64748b'}
                        size="21"
                      />
                      <LikeTextContentDark isLiked={isLiked}>
                        Like
                      </LikeTextContentDark>
                    </SocialButton>
                  </LikeContainer>
                  <DislikeContainer>
                    <SocialButton type="button" onClick={this.clickDisLike}>
                      <AiOutlineDislike
                        color={isDisLiked ? '#2563eb' : '#64748b'}
                        size="21"
                      />
                      <DisLikeTextContentDark isDisLiked={isDisLiked}>
                        Dislike
                      </DisLikeTextContentDark>
                    </SocialButton>
                  </DislikeContainer>
                  <SaveContainer>
                    <SocialButton type="button" onClick={clickSave}>
                      <RiMenuAddLine
                        color={isSaved ? '#2563eb' : '#64748b'}
                        size="21"
                      />
                      <TextContentDark isSaved={isSaved}>
                        {isSaved ? 'saved' : 'save'}
                      </TextContentDark>
                    </SocialButton>
                  </SaveContainer>
                </LikeDislikeAndSaveContainer>
              </VideoViewsAndPublishAndLikeContainer>
              <HorizontalDark />
              <ProfileWithSubscribersContainer>
                <Profile src={profileImageUrl} alt="channel logo" />
                <NameAndSubscribers>
                  <NameDark>{name}</NameDark>
                  <SubscribersDark>
                    {subscriberCount} subscribers
                  </SubscribersDark>
                </NameAndSubscribers>
              </ProfileWithSubscribersContainer>
              <DescriptionDark>{description}</DescriptionDark>
            </VideoBarContainerDark>
          )
        }}
      </VideoContext.Consumer>
    )
  }

  videoItemDetailsContainer = () => (
    <VideoContext.Consumer>
      {value => {
        const {isDark} = value
        return isDark ? this.renderVideoBarDark() : this.renderVideoBarLight()
      }}
    </VideoContext.Consumer>
  )

  renderLoader = () => (
    <VideoContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <LoaderContainer dark={isDark} data-testid="loader">
            <Loader type="ThreeDots" color="blue" height="70" width="70" />
          </LoaderContainer>
        )
      }}
    </VideoContext.Consumer>
  )

  clickRetryBtn = () => {
    this.getVideoDetails()
  }

  renderFailureApi = () => (
    <VideoContext.Consumer>
      {value => {
        const {isDark} = value
        const image = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureContainer dark={isDark}>
            <FailureImage src={image} alt="failure view" />
            <FailureName dark={isDark}>Oops! Something Went Wrong</FailureName>
            <FailureDescription dark={isDark}>
              We are having some trouble to complete your request. Please Try
              again.
            </FailureDescription>
            <RetryBtn type="button" onClick={this.clickRetryBtn}>
              Retry
            </RetryBtn>
          </FailureContainer>
        )
      }}
    </VideoContext.Consumer>
  )

  renderVideoDetailsOnStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.success:
        return this.videoItemDetailsContainer()
      case apiConstants.progress:
        return this.renderLoader()
      case apiConstants.failure:
        return this.renderFailureApi()
      default:
        return null
    }
  }

  renderVideoPage = () => (
    <VideoContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <VideoItemDetailsRouteContainer
            dark={isDark}
            data-testid="videoItemDetails"
          >
            <Header />
            <VideoItemDetailsContainer>
              {isDark ? this.sideBarDark() : this.sideBarLight()}
              {this.renderVideoDetailsOnStatus()}
            </VideoItemDetailsContainer>
          </VideoItemDetailsRouteContainer>
        )
      }}
    </VideoContext.Consumer>
  )

  render() {
    return this.renderVideoPage()
  }
}
export default VideoItemDetails
