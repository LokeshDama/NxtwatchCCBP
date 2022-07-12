import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'

export const LinkForLogo = styled(Link)`
  text-decoration: none;
`

export const HeaderContainer = styled.div`
  background-color: #f9f9f9;
  min-height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  border-bottom: 1px solid grey;
  @media (min-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const Image = styled.img`
  width: 100px;
  height: 32px;
`

export const NavItemsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ThemeButton = styled.button`
  height: 40px;
  width: 50px;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
`
export const ThemeImage = styled.img`
  width: 33px;
  height: 33px;
`
export const ProfileButton = styled.button`
  height: 40px;
  width: 50px;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`
export const LogoutButtonLg = styled.button`
  border: 1px solid #3b82f6;
  height: 35px;
  width: 80px;
  background: transparent;
  color: #3b82f6;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin-left: 8px;
  @media (max-width: 768px) {
    display: none;
  }
`
export const LogoutButtonsm = styled.button`
  height: 40px;
  width: 50px;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`
export const MenuButtonSm = styled.button`
  height: 40px;
  width: 50px;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`

/** HeaderContainerDark */

export const HeaderContainerDark = styled.div`
  min-height: 10vh;
  background-color: #181818;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  border-bottom: 1px solid grey;
  @media (min-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`
export const LogoutButtonLgDark = styled.button`
  border: 1px solid #f9f9f9;
  height: 35px;
  width: 80px;
  background: transparent;
  color: #f9f9f9;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin-left: 8px;
  @media (max-width: 768px) {
    display: none;
  }
`
/** ModalContainer */

export const ModalContainerDark = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  height: 100%;
  background: #181818;
  border-radius: 15px;
  @media (max-width: 768px) {
    min-width: 100%;
  }
`
export const ModalContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 15px;
  @media (max-width: 768px) {
    min-width: 100%;
  }
`
export const ModalCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  height: 100%;
  max-width: 258px;
  @media (min-width: 768px) {
    padding: 30px;
  }
`
export const LogoutTagQDark = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 30px;
  min-width: 100%;
  text-align: center;
`

export const LogoutTagQ = styled.p`
  color: #00306e;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 30px;
  min-width: 100%;
  text-align: center;
`
export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 80%;
`
export const CancelDark = styled.button`
  border: none;
  outline: none;
  width: 90px;
  height: 38px;
  margin-right: 10px;
  border: 1px solid #94a3b8;
  background: transparent;
  color: #94a3b8;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 8px;
`
export const Cancel = styled.button`
  outline: none;
  width: 90px;
  height: 38px;
  margin-right: 10px;
  border: 2px solid #94a3b8;
  background: transparent;
  color: #94a3b8;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 8px;
`
export const Confirm = styled.button`
  border: none;
  outline: none;
  width: 90px;
  height: 38px;
  margin-right: 10px;
  background: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
`
/** MenuSmModalContainer */
export const MenuSmModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 95vw;
  background: ${props => (props.isDark ? '#181818' : '#ffffff')};
`
export const CloseButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: none;
  margin-top: 32px;
  margin-right: 20px;
  outline: none;
  cursor: pointer;
`
export const NavsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
`
export const NavItems = styled.ul`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 0;
  margin-top: 80px;
`

export const NavItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 35px;
  cursor: pointer;
  min-width: 100%;
  padding-top: 10px;
  padding-left: 50px;
  margin-bottom: 5px;
  background-color: ${props => props.activeNav && '#d7dfe9'};
  @media (min-width: 400px) {
    padding-left: 160px;
  }
`
export const LinkGenerate = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 10px;
  min-width: 100%;
  cursor: pointer;
`

export const Nav = styled.p`
  color: ${props => (props.isDark ? '#00306e' : '#64748b')};
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: bold;
  margin-left: 17px;
`
