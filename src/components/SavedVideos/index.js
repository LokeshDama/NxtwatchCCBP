import {Component} from 'react'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {GiLoveMystery} from 'react-icons/gi'
import {RiMenuAddLine} from 'react-icons/ri'

import VideoContext from '../../context/VideoContext'
import Header from '../Header'
import SavedVideoItem from '../SavedVideoItem'

import {
  SavedVideosRouteContainer,
  SavedContainer,
  SideBarContainer,
  NavLinksContainer,
  LinkGenerate,
  LinkContainer,
  LinkContainerSaved,
  Nav,
  NavSaved,
  ContactUsContainer,
  ContactUs,
  LogosContainer,
  Logo,
  ContactUsTagLine,
  SideBarContainerDark,
  LinkContainerSavedDark,
  NavSavedDark,
  NavDark,
  ContactUsDark,
  ContactUsTagLineDark,
  SavedBarContainer,
  SavedLogoAndNameContainer,
  SavedLogoContainer,
  SavedVidName,
  SavedBarContainerDark,
  SavedVidNameDark,
  SavedLogoAndNameContainerDark,
  SavedVideosContainer,
  NoSavedContainer,
  NoSavedImage,
  NoSavedName,
  NoSavedDescription,
} from './styledComponents'

class SavedVideos extends Component {
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
          <LinkContainerSavedDark>
            <RiMenuAddLine color="darkRed" size="20" />
            <NavSavedDark>Saved videos</NavSavedDark>
          </LinkContainerSavedDark>
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
          <LinkContainerSaved>
            <RiMenuAddLine color="red" size="16" />
            <NavSaved>Saved videos</NavSaved>
          </LinkContainerSaved>
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

  renderNoSavedVideos = () => (
    <VideoContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <NoSavedContainer dark={isDark}>
            <NoSavedImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NoSavedName dark={isDark}>No saved videos found</NoSavedName>
            <NoSavedDescription dark={isDark}>
              You can save your videos while watching them
            </NoSavedDescription>
          </NoSavedContainer>
        )
      }}
    </VideoContext.Consumer>
  )

  renderSavedBarDark = () => (
    <VideoContext.Consumer>
      {value => {
        const {listOfSavedVideos} = value
        return listOfSavedVideos.length > 0 ? (
          <SavedBarContainerDark>
            <SavedLogoAndNameContainerDark>
              <SavedLogoContainer>
                <HiFire color="red" size="29" />
              </SavedLogoContainer>
              <SavedVidNameDark>Saved Videos</SavedVidNameDark>
            </SavedLogoAndNameContainerDark>
            <SavedVideosContainer>
              {listOfSavedVideos.map(eachVideo => (
                <SavedVideoItem key={eachVideo.id} video={eachVideo} />
              ))}
            </SavedVideosContainer>
          </SavedBarContainerDark>
        ) : (
          this.renderNoSavedVideos()
        )
      }}
    </VideoContext.Consumer>
  )

  renderSavedBarLight = () => (
    <VideoContext.Consumer>
      {value => {
        const {listOfSavedVideos} = value
        return listOfSavedVideos.length > 0 ? (
          <SavedBarContainer>
            <SavedLogoAndNameContainer>
              <SavedLogoContainer>
                <HiFire color="red" size="29" />
              </SavedLogoContainer>
              <SavedVidName>Saved Videos</SavedVidName>
            </SavedLogoAndNameContainer>
            <SavedVideosContainer>
              {listOfSavedVideos.map(eachVideo => (
                <SavedVideoItem key={eachVideo.id} video={eachVideo} />
              ))}
            </SavedVideosContainer>
          </SavedBarContainer>
        ) : (
          this.renderNoSavedVideos()
        )
      }}
    </VideoContext.Consumer>
  )

  renderSavedBar = () => (
    <VideoContext.Consumer>
      {value => {
        const {isDark} = value
        return isDark ? this.renderSavedBarDark() : this.renderSavedBarLight()
      }}
    </VideoContext.Consumer>
  )

  renderSavedVideos = () => (
    <VideoContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <SavedVideosRouteContainer dark={isDark} data-testid="savedVideos">
            <Header />
            <SavedContainer>
              {isDark ? this.sideBarDark() : this.sideBarLight()}
              {this.renderSavedBar()}
            </SavedContainer>
          </SavedVideosRouteContainer>
        )
      }}
    </VideoContext.Consumer>
  )

  render() {
    return this.renderSavedVideos()
  }
}
export default SavedVideos
