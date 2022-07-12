import {Component} from 'react'
import Loader from 'react-loader-spinner'

import {AiFillHome, AiOutlineSearch} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {GiLoveMystery} from 'react-icons/gi'
import {RiMenuAddFill, RiCloseLine} from 'react-icons/ri'
import Cookies from 'js-cookie'

import VideoItem from '../VideoItem'
import Header from '../Header'

import VideoContext from '../../context/VideoContext'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {
  HomeRouteContainer,
  HomeContainer,
  SideBarContainer,
  NavLinksContainer,
  LinkGenerate,
  LinkContainer,
  Nav,
  NavHome,
  ContactUsContainer,
  ContactUs,
  LogosContainer,
  Logo,
  ContactUsTagLine,
  HomeBarContainer,
  BannerContainer,
  NxtLogo,
  LogoWithCloseBtn,
  CloseBtn,
  BannerDescription,
  GetItNow,
  SearchContainer,
  SearchInput,
  IconSearchBtn,
  HomeVideosContainer,
  LinkContainerHome,
  SideBarContainerDark,
  LinkContainerHomeDark,
  NavHomeDark,
  NavDark,
  ContactUsDark,
  ContactUsTagLineDark,
  HomeBarContainerDark,
  BannerContainerDark,
  SearchContainerDark,
  SearchInputDark,
  IconSearchBtnDark,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureName,
  FailureDescription,
  RetryBtn,
  NoResultsContainer,
  NoResultsImage,
  NoResultsName,
  NoResultsDescription,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  progress: 'PROGRESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    searchInput: '',
    homeVideos: [],
    apiStatus: apiConstants.initial,
    bannerDisplay: true,
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    this.setState({
      apiStatus: apiConstants.progress,
    })
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        homeVideos: updatedData,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiConstants.failure,
      })
      console.log('failed fetch')
    }
  }

  onChangeSearch = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  sideBarDark = () => (
    <SideBarContainerDark>
      <NavLinksContainer>
        <LinkGenerate to="/">
          <LinkContainerHomeDark>
            <AiFillHome color="red" size="16" />
            <NavHomeDark>Home</NavHomeDark>
          </LinkContainerHomeDark>
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
          <LinkContainerHome>
            <AiFillHome color="red" size="16" />
            <NavHome>Home</NavHome>
          </LinkContainerHome>
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

  clickCloseIcon = () => {
    this.setState(prevState => ({
      bannerDisplay: !prevState.bannerDisplay,
    }))
  }

  clickSearch = () => {
    this.getHomeVideos()
  }

  clickRetryBtn = () => {
    this.getHomeVideos()
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

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="blue" height="70" width="70" />
    </LoaderContainer>
  )

  renderNoSearchResultsView = () => (
    <VideoContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <NoResultsContainer>
            <NoResultsImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoResultsName dark={isDark}>No Search results found</NoResultsName>
            <NoResultsDescription dark={isDark}>
              Try different key words or remove search filter
            </NoResultsDescription>
            <RetryBtn type="button" onClick={this.clickRetryBtn}>
              Retry
            </RetryBtn>
          </NoResultsContainer>
        )
      }}
    </VideoContext.Consumer>
  )

  HomeVideosContainer = () => {
    const {homeVideos} = this.state
    return homeVideos.length > 0 ? (
      <HomeVideosContainer>
        {homeVideos.map(eachVideoItem => (
          <VideoItem video={eachVideoItem} key={eachVideoItem.id} />
        ))}
      </HomeVideosContainer>
    ) : (
      this.renderNoSearchResultsView()
    )
  }

  renderVideosOnStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.success:
        return this.HomeVideosContainer()
      case apiConstants.progress:
        return this.renderLoader()
      case apiConstants.failure:
        return this.renderFailureApi()
      default:
        return null
    }
  }

  renderHomeBarDark = () => {
    const {searchInput, bannerDisplay} = this.state
    const display = bannerDisplay ? 'flex' : 'none'
    console.log(searchInput)
    return (
      <HomeBarContainerDark>
        <BannerContainerDark data-testid="banner" display={display}>
          <LogoWithCloseBtn>
            <NxtLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
            />
            <CloseBtn
              data-testid="close"
              type="button"
              onClick={this.clickCloseIcon}
            >
              <RiCloseLine size="23" />
            </CloseBtn>
          </LogoWithCloseBtn>
          <BannerDescription>
            Buy Nxt Watch Premium prepaid plans with UPI
          </BannerDescription>
          <GetItNow type="button">GET IT NOW</GetItNow>
        </BannerContainerDark>
        <SearchContainerDark>
          <SearchInputDark
            type="search"
            value={searchInput}
            onChange={this.onChangeSearch}
            placeholder="Search"
          />
          <IconSearchBtnDark
            data-testid="searchButton"
            onClick={this.clickSearch}
          >
            <AiOutlineSearch color="#cccccc" size="20" />
          </IconSearchBtnDark>
        </SearchContainerDark>
        {this.renderVideosOnStatus()}
      </HomeBarContainerDark>
    )
  }

  renderHomeBarLight = () => {
    const {searchInput, bannerDisplay} = this.state
    const display = bannerDisplay ? 'flex' : 'none'
    console.log(searchInput)
    return (
      <HomeBarContainer>
        <BannerContainer data-testid="banner" display={display}>
          <LogoWithCloseBtn>
            <NxtLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
            />
            <CloseBtn
              data-testid="close"
              type="button"
              onClick={this.clickCloseIcon}
            >
              <RiCloseLine size="23" />
            </CloseBtn>
          </LogoWithCloseBtn>
          <BannerDescription>
            Buy Nxt Watch Premium prepaid plans with UPI
          </BannerDescription>
          <GetItNow type="button">GET IT NOW</GetItNow>
        </BannerContainer>
        <SearchContainer>
          <SearchInput
            type="search"
            value={searchInput}
            onChange={this.onChangeSearch}
            placeholder="Search"
          />
          <IconSearchBtn data-testid="searchButton" onClick={this.clickSearch}>
            <AiOutlineSearch size="20" />
          </IconSearchBtn>
        </SearchContainer>
        {this.renderVideosOnStatus()}
      </HomeBarContainer>
    )
  }

  renderHome = () => (
    <HomeRouteContainer data-testid="home">
      <Header />
      <HomeContainer>
        <VideoContext.Consumer>
          {value => {
            const {isDark} = value
            return (
              <>
                {isDark ? this.sideBarDark() : this.sideBarLight()}
                {isDark ? this.renderHomeBarDark() : this.renderHomeBarLight()}
              </>
            )
          }}
        </VideoContext.Consumer>
      </HomeContainer>
    </HomeRouteContainer>
  )

  render() {
    return this.renderHome()
  }
}
export default Home
