import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {FiLogOut} from 'react-icons/fi'
import {BiMenu} from 'react-icons/bi'
import {IoMdClose} from 'react-icons/io'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {GiLoveMystery} from 'react-icons/gi'
import {RiMenuAddFill} from 'react-icons/ri'

import Popup from 'reactjs-popup'

import VideoContext from '../../context/VideoContext'

import './index.css'

import {
  LinkForLogo,
  HeaderContainer,
  ImageContainer,
  NavItemsContainer,
  Image,
  ThemeButton,
  ThemeImage,
  ProfileButton,
  LogoutButtonLg,
  LogoutButtonsm,
  MenuButtonSm,
  HeaderContainerDark,
  LogoutButtonLgDark,
  ModalContainerDark,
  ModalContainer,
  ModalCard,
  LogoutTagQDark,
  LogoutTagQ,
  Buttons,
  CancelDark,
  Cancel,
  Confirm,
  MenuSmModalContainer,
  CloseButton,
  NavItems,
  LinkGenerate,
  NavItem,
  Nav,
} from './styledComponents'

const Header = props => {
  const clickLogOut = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
    console.log('logout')
  }

  const renderSmMenuPopup = () => (
    <VideoContext.Consumer>
      {value => {
        const {isDark, changeActiveNav, activeNav} = value
        const clickHome = () => {
          changeActiveNav('HOME')
        }
        const clickTrend = () => {
          changeActiveNav('TREND')
        }
        const clickGame = () => {
          changeActiveNav('GAME')
        }
        const clickSavedVideo = () => {
          changeActiveNav('SAVEDVIDEO')
        }
        return (
          <Popup
            modal
            className="pop-menu-content"
            trigger={
              <MenuButtonSm>
                <BiMenu color={isDark && '#f9f9f9'} size="28" />
              </MenuButtonSm>
            }
          >
            {close => (
              <MenuSmModalContainer isDark={isDark}>
                <CloseButton type="button" onClick={() => close()}>
                  <IoMdClose color="#606060" size="26" />
                </CloseButton>
                <NavItems>
                  <NavItem activeNav={activeNav === 'HOME'}>
                    <LinkGenerate to="/" onClick={clickHome}>
                      <AiFillHome
                        color={isDark ? '#00306e' : '#64748b'}
                        size="16"
                      />
                      <Nav isDark={isDark}>Home</Nav>
                    </LinkGenerate>
                  </NavItem>
                  <NavItem activeNav={activeNav === 'TREND'}>
                    <LinkGenerate to="/trending" onClick={clickTrend}>
                      <HiFire
                        color={isDark ? '#00306e' : '#64748b'}
                        size="16"
                      />
                      <Nav isDark={isDark}>Trending</Nav>
                    </LinkGenerate>
                  </NavItem>
                  <NavItem activeNav={activeNav === 'GAME'}>
                    <LinkGenerate to="/gaming" onClick={clickGame}>
                      <GiLoveMystery
                        color={isDark ? '#00306e' : '#64748b'}
                        size="16"
                      />
                      <Nav isDark={isDark}>Gaming</Nav>
                    </LinkGenerate>
                  </NavItem>
                  <NavItem activeNav={activeNav === 'SAVEDVIDEO'}>
                    <LinkGenerate to="/saved-videos" onClick={clickSavedVideo}>
                      <RiMenuAddFill
                        color={isDark ? '#00306e' : '#64748b'}
                        size="16"
                      />
                      <Nav isDark={isDark}>Saved videos</Nav>
                    </LinkGenerate>
                  </NavItem>
                </NavItems>
              </MenuSmModalContainer>
            )}
          </Popup>
        )
      }}
    </VideoContext.Consumer>
  )

  const HeaderDark = themeBtn => (
    <VideoContext.Consumer>
      {value => {
        const {changeTheme} = value
        return (
          <HeaderContainerDark>
            <ImageContainer>
              <LinkForLogo to="/">
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                  alt="website logo"
                />
              </LinkForLogo>
            </ImageContainer>
            <NavItemsContainer>
              <ThemeButton data-testid="theme" type="button">
                <ThemeImage src={themeBtn} onClick={changeTheme} />
              </ThemeButton>
              <ProfileButton type="button">
                <ThemeImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </ProfileButton>
              {renderSmMenuPopup()}
              <Popup
                className="popup-content"
                modal
                trigger={
                  <LogoutButtonLgDark type="button">Logout</LogoutButtonLgDark>
                }
              >
                {close => (
                  <ModalContainerDark>
                    <ModalCard>
                      <LogoutTagQDark>
                        Are you sure, you want to logout
                      </LogoutTagQDark>
                      <Buttons>
                        <CancelDark type="button" onClick={() => close()}>
                          Cancel
                        </CancelDark>
                        <Confirm type="button" onClick={clickLogOut}>
                          Confirm
                        </Confirm>
                      </Buttons>
                    </ModalCard>
                  </ModalContainerDark>
                )}
              </Popup>
              <Popup
                className="popup-content"
                modal
                trigger={
                  <LogoutButtonsm type="button">
                    <FiLogOut color="#f9f9f9" size="28" />
                  </LogoutButtonsm>
                }
              >
                {close => (
                  <ModalContainerDark>
                    <ModalCard>
                      <LogoutTagQDark>
                        Are you sure, you want to logout
                      </LogoutTagQDark>
                      <Buttons>
                        <CancelDark type="button" onClick={() => close()}>
                          Cancel
                        </CancelDark>
                        <Confirm type="button" onClick={clickLogOut}>
                          Confirm
                        </Confirm>
                      </Buttons>
                    </ModalCard>
                  </ModalContainerDark>
                )}
              </Popup>
            </NavItemsContainer>
          </HeaderContainerDark>
        )
      }}
    </VideoContext.Consumer>
  )

  const HeaderLight = themeBtn => (
    <VideoContext.Consumer>
      {value => {
        const {changeTheme} = value
        return (
          <HeaderContainer>
            <ImageContainer>
              <LinkForLogo to="/">
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                />
              </LinkForLogo>
            </ImageContainer>
            <NavItemsContainer>
              <ThemeButton data-testid="theme" type="button">
                <ThemeImage src={themeBtn} onClick={changeTheme} />
              </ThemeButton>
              <ProfileButton type="button">
                <ThemeImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </ProfileButton>
              {renderSmMenuPopup()}
              <Popup
                className="popup-content"
                modal
                trigger={<LogoutButtonLg type="button">Logout</LogoutButtonLg>}
              >
                {close => (
                  <ModalContainer>
                    <ModalCard>
                      <LogoutTagQ> Are you sure, you want to logout</LogoutTagQ>
                      <Buttons>
                        <Cancel type="button" onClick={() => close()}>
                          Cancel
                        </Cancel>
                        <Confirm type="button" onClick={clickLogOut}>
                          Confirm
                        </Confirm>
                      </Buttons>
                    </ModalCard>
                  </ModalContainer>
                )}
              </Popup>
              <Popup
                className="popup-content"
                modal
                trigger={
                  <LogoutButtonsm type="button">
                    <FiLogOut size="28" />
                  </LogoutButtonsm>
                }
              >
                {close => (
                  <ModalContainer>
                    <ModalCard>
                      <LogoutTagQ> Are you sure, you want to logout</LogoutTagQ>
                      <Buttons>
                        <Cancel type="button" onClick={() => close()}>
                          Cancel
                        </Cancel>
                        <Confirm type="button" onClick={clickLogOut}>
                          Confirm
                        </Confirm>
                      </Buttons>
                    </ModalCard>
                  </ModalContainer>
                )}
              </Popup>
            </NavItemsContainer>
          </HeaderContainer>
        )
      }}
    </VideoContext.Consumer>
  )

  return (
    <VideoContext.Consumer>
      {value => {
        const {isDark} = value
        const themeBtn = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
        return isDark ? HeaderDark(themeBtn) : HeaderLight(themeBtn)
      }}
    </VideoContext.Consumer>
  )
}
export default withRouter(Header)
