import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {GiLoveMystery} from 'react-icons/gi'
import {RiMenuAddFill} from 'react-icons/ri'

import GameVideoItem from '../GameVideoItem'
import Header from '../Header'

import VideoContext from '../../context/VideoContext'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {
  GamingRouteContainer,
  GamingContainer,
  SideBarContainer,
  NavLinksContainer,
  LinkGenerate,
  LinkContainer,
  LinkContainerGame,
  Nav,
  NavGaming,
  ContactUsContainer,
  ContactUs,
  LogosContainer,
  Logo,
  ContactUsTagLine,
  GamingBarContainer,
  GamingLogoAndNameContainer,
  GamingLogoContainer,
  GamingName,
  GamingVideosContainer,
  SideBarContainerDark,
  LinkContainerGameDark,
  NavGameDark,
  NavDark,
  ContactUsDark,
  ContactUsTagLineDark,
  GamingBarContainerDark,
  GamingLogoAndNameContainerDark,
  GamingNameDark,
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

class Gaming extends Component {
  state = {
    GamingVideos: [],
    apiStatus: apiConstants.initial,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({
      apiStatus: apiConstants.progress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/gaming`
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
      const updatedData = data.videos.map(each => ({
        thumbnailUrl: each.thumbnail_url,
        id: each.id,
        viewCount: each.view_count,
        title: each.title,
        isSaved: false,
      }))
      this.setState({
        GamingVideos: updatedData,
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
          <LinkContainerGameDark>
            <GiLoveMystery color="red" size="16" />
            <NavGameDark>Gaming</NavGameDark>
          </LinkContainerGameDark>
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
          <LinkContainerGame>
            <GiLoveMystery color="red" size="16" />
            <NavGaming>Gaming</NavGaming>
          </LinkContainerGame>
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

  renderGamingBarDark = () => {
    const {GamingVideos} = this.state
    return (
      <GamingBarContainerDark>
        <GamingLogoAndNameContainerDark>
          <GamingLogoContainer>
            <GiLoveMystery color="red" size="29" />
          </GamingLogoContainer>
          <GamingNameDark>Gaming</GamingNameDark>
        </GamingLogoAndNameContainerDark>
        <GamingVideosContainer>
          {GamingVideos.map(each => (
            <GameVideoItem key={each.id} game={each} />
          ))}
        </GamingVideosContainer>
      </GamingBarContainerDark>
    )
  }

  renderGamingBarLight = () => {
    const {GamingVideos} = this.state
    return (
      <GamingBarContainer>
        <GamingLogoAndNameContainer>
          <GamingLogoContainer>
            <GiLoveMystery color="red" size="29" />
          </GamingLogoContainer>
          <GamingName>Gaming</GamingName>
        </GamingLogoAndNameContainer>
        <GamingVideosContainer>
          {GamingVideos.map(each => (
            <GameVideoItem key={each.id} game={each} />
          ))}
        </GamingVideosContainer>
      </GamingBarContainer>
    )
  }

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
    this.getGamingVideos()
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

  gamingContainer = () => (
    <VideoContext.Consumer>
      {value => {
        const {isDark} = value
        return isDark ? this.renderGamingBarDark() : this.renderGamingBarLight()
      }}
    </VideoContext.Consumer>
  )

  renderGamingOnStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.success:
        return this.gamingContainer()
      case apiConstants.progress:
        return this.renderLoader()
      case apiConstants.failure:
        return this.renderFailureApi()
      default:
        return null
    }
  }

  renderGaming = () => (
    <VideoContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <GamingRouteContainer dark={isDark} data-testid="gaming">
            <Header />
            <GamingContainer>
              {isDark ? this.sideBarDark() : this.sideBarLight()}
              {this.renderGamingOnStatus()}
            </GamingContainer>
          </GamingRouteContainer>
        )
      }}
    </VideoContext.Consumer>
  )

  render() {
    return this.renderGaming()
  }
}
export default Gaming
