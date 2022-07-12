import {Component} from 'react'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {GiLoveMystery} from 'react-icons/gi'
import {RiMenuAddFill} from 'react-icons/ri'

import Header from '../Header'

import VideoContext from '../../context/VideoContext'

import {
  NotFoundContainer,
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
  SideBarContainerDark,
  NavDark,
  ContactUsDark,
  ContactUsTagLineDark,
  NotFoundBarContainer,
  NotFoundImage,
  NotFoundName,
  NotFoundDescription,
} from './styledComponents'

class NotFound extends Component {
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
          Enjoy! Now to see you channels and recommendations!
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
          Enjoy! Now to see you channels and recommendations!
        </ContactUsTagLine>
      </ContactUsContainer>
    </SideBarContainer>
  )

  renderNotFoundBar = () => (
    <VideoContext.Consumer>
      {value => {
        const {isDark} = value
        const image = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        return (
          <NotFoundBarContainer dark={isDark}>
            <NotFoundImage src={image} alt="not found" />
            <NotFoundName dark={isDark}>Page Not Found</NotFoundName>
            <NotFoundDescription dark={isDark}>
              we are sorry, the page you requested could not be found.
            </NotFoundDescription>
          </NotFoundBarContainer>
        )
      }}
    </VideoContext.Consumer>
  )

  renderNotFound = () => (
    <>
      <Header />
      <NotFoundContainer>
        <VideoContext.Consumer>
          {value => {
            const {isDark} = value
            return (
              <>
                {isDark ? this.sideBarDark() : this.sideBarLight()}
                {this.renderNotFoundBar()}
              </>
            )
          }}
        </VideoContext.Consumer>
      </NotFoundContainer>
    </>
  )

  render() {
    return this.renderNotFound()
  }
}

export default NotFound
