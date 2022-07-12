import {Component} from 'react'
import Loader from 'react-loader-spinner'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {GiLoveMystery} from 'react-icons/gi'
import {RiMenuAddFill} from 'react-icons/ri'

import Cookies from 'js-cookie'

import Header from '../Header'
import TrendingVideoItem from '../TrendingVideoItem'

import VideoContext from '../../context/VideoContext'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {
  TrendingRouteContainer,
  TrendingContainer,
  SideBarContainer,
  NavLinksContainer,
  LinkGenerate,
  LinkContainer,
  Nav,
  NavTrend,
  ContactUsContainer,
  ContactUs,
  LogosContainer,
  Logo,
  ContactUsTagLine,
  TrendingBarContainer,
  TrendingLogoAndNameContainer,
  TrendingLogoContainer,
  TrendingName,
  TrendingVideosContainer,
  LinkContainerTrend,
  SideBarContainerDark,
  NavDark,
  LinkContainerTrendDark,
  NavTrendDark,
  ContactUsDark,
  ContactUsTagLineDark,
  TrendingBarContainerDark,
  TrendingNameDark,
  TrendingLogoAndNameContainerDark,
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

class Trending extends Component {
  state = {
    trendingVideos: [],
    apiStatus: apiConstants.initial,
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({
      apiStatus: apiConstants.progress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const updatedData = data.videos.map(each => {
        const {channel} = each
        return {
          name: channel.name,
          profileImageUrl: channel.profile_image_url,
          id: each.id,
          publishedAt: each.published_at,
          thumbnailUrl: each.thumbnail_url,
          title: each.title,
          viewCount: each.view_count,
          isSaved: false,
        }
      })
      this.setState({
        trendingVideos: updatedData,
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
          <LinkContainerTrendDark>
            <HiFire color="red" size="16" />
            <NavTrendDark>Trending</NavTrendDark>
          </LinkContainerTrendDark>
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
          <LinkContainerTrend>
            <HiFire color="red" size="16" />
            <NavTrend>Trending</NavTrend>
          </LinkContainerTrend>
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

  renderTrendingBarDark = () => {
    const {trendingVideos} = this.state
    console.log(trendingVideos)
    return (
      <TrendingBarContainerDark>
        <TrendingLogoAndNameContainerDark>
          <TrendingLogoContainer>
            <HiFire color="red" size="29" />
          </TrendingLogoContainer>
          <TrendingNameDark>Trending</TrendingNameDark>
        </TrendingLogoAndNameContainerDark>
        <TrendingVideosContainer>
          {trendingVideos.map(eachVideo => (
            <TrendingVideoItem key={eachVideo.id} video={eachVideo} />
          ))}
        </TrendingVideosContainer>
      </TrendingBarContainerDark>
    )
  }

  renderTrendingBarLight = () => {
    const {trendingVideos} = this.state
    console.log(trendingVideos)
    return (
      <TrendingBarContainer>
        <TrendingLogoAndNameContainer>
          <TrendingLogoContainer>
            <HiFire color="red" size="29" />
          </TrendingLogoContainer>
          <TrendingName>Trending</TrendingName>
        </TrendingLogoAndNameContainer>
        <TrendingVideosContainer>
          {trendingVideos.map(eachVideo => (
            <TrendingVideoItem key={eachVideo.id} video={eachVideo} />
          ))}
        </TrendingVideosContainer>
      </TrendingBarContainer>
    )
  }

  trendingContainer = () => (
    <VideoContext.Consumer>
      {value => {
        const {isDark} = value
        return isDark
          ? this.renderTrendingBarDark()
          : this.renderTrendingBarLight()
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
    this.getTrendingVideos()
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

  renderTrendingOnStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.success:
        return this.trendingContainer()
      case apiConstants.progress:
        return this.renderLoader()
      case apiConstants.failure:
        return this.renderFailureApi()
      default:
        return null
    }
  }

  renderTrending = () => (
    <VideoContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <TrendingRouteContainer dark={isDark} data-testid="trending">
            <Header />
            <TrendingContainer>
              {isDark ? this.sideBarDark() : this.sideBarLight()}
              {this.renderTrendingOnStatus()}
            </TrendingContainer>
          </TrendingRouteContainer>
        )
      }}
    </VideoContext.Consumer>
  )

  render() {
    return this.renderTrending()
  }
}
export default Trending
