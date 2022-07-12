import styled from 'styled-components/macro'

import {Link} from 'react-router-dom'

export const GamingRouteContainer = styled.div`
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9')};
  minn-height: 100vh;
`

export const GamingContainer = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: row;
`
/** SIDEBAR DESIGN  */

export const SideBarContainer = styled.div`
  display: none;
  background-color: #f9f9f9;
  @media (min-width: 768px) {
    height: 90vh;
    width: 25vw;
    max-width: 240px;
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-right: 1px solid grey;
  }
`
export const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const LinkGenerate = styled(Link)`
  text-decoration: none;
`
export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 35px;
  padding-left: 15px;
  cursor: pointer;
`
export const LinkContainerGame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 35px;
  padding-left: 15px;
  cursor: pointer;
  background: #cbd5e1;
`

export const Nav = styled.p`
  color: #64748b;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: bold;
  margin-left: 23px;
`
export const NavGaming = styled.p`
  color: #0f0f0f;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: bold;
  margin-left: 23px;
`

export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`
export const ContactUs = styled.p`
  color: #475569;
  font-size: 17px;
  font-family: 'Roboto';
  font-weight: bold;
  line-height: 1.3;
`
export const LogosContainer = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`
export const Logo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`
export const ContactUsTagLine = styled.p`
  color: #616e7c;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: bold;
  line-height: 1.3;
`

/** Gaming bar */

export const GamingBarContainer = styled.div`
  height: 90vh;
  width: 100vw;
  background-color: #f9f9f9;
  @media (min-width: 768px) {
    width: 75vw;
  }
  @media (min-width: 968px) {
    width: 100%;
  }
`
export const GamingLogoAndNameContainer = styled.div`
  height: 90px;
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  padding-left: 39px;
  padding-right: 39px;
  @media (max-width: 768px) {
    height: 75px;
    padding-left: 11px;
    padding-right: 11px;
  }
`
export const GamingLogoContainer = styled.div`
  background-color: #cbd5e1;
  width: 70px;
  height: 70px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (max-width: 768px) {
    height: 50px;
    width: 50px;
    border-radius: 150px;
  }
`
export const GamingName = styled.h1`
  color: #0f0f0f;
  font-size: 25px;
  font-family: 'Roboto';
  font-weight: bold;
  line-height: 1.3;
  margin-left: 15px;
  @media (max-width: 768px) {
    font-size: 19px;
  }
`
export const GamingVideosContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  padding-left: 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    padding: 8px;
  }
`
/** SideBarContainerDark */
export const SideBarContainerDark = styled.div`
  display: none;
  background-color: #0f0f0f;
  @media (min-width: 768px) {
    height: 90vh;
    width: 25vw;
    max-width: 240px;
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-right: 1px solid grey;
  }
`
export const LinkContainerGameDark = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 35px;
  padding-left: 15px;
  cursor: pointer;
  background: #383838;
`
export const NavGameDark = styled.p`
  color: #ffffff;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: bold;
  margin-left: 23px;
`
export const NavDark = styled.p`
  color: #ebebeb;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 400;
  margin-left: 23px;
`

export const ContactUsDark = styled.p`
  color: #f9f9f9;
  font-size: 17px;
  font-family: 'Roboto';
  font-weight: bold;
  line-height: 1.3;
`
export const ContactUsTagLineDark = styled.p`
  color: #f9f9f9;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: bold;
  line-height: 1.3;
`
/** Trending bar dark */
export const GamingBarContainerDark = styled.div`
  min-height: 90vh;
  width: 100vw;
  background-color: #0f0f0f;
  @media (min-width: 768px) {
    width: 75vw;
  }
  @media (min-width: 968px) {
    width: 100%;
  }
`
export const GamingLogoAndNameContainerDark = styled.div`
  height: 90px;
  background-color: #212121;
  display: flex;
  align-items: center;
  padding-left: 39px;
  padding-right: 39px;
  @media (max-width: 768px) {
    height: 75px;
    padding-left: 11px;
    padding-right: 11px;
  }
`
export const GamingNameDark = styled.h1`
  color: #ffffff;
  font-size: 25px;
  font-family: 'Roboto';
  font-weight: bold;
  line-height: 1.3;
  margin-left: 15px;
  @media (max-width: 768px) {
    font-size: 19px;
  }
`
/** Loader */

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  width: 100vw;
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9')};
  @media (min-width: 768px) {
    width: 75vw;
  }
  @media (min-width: 968px) {
    width: 100%;
  }
`
/** Failure  */

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9')};
  @media (min-width: 768px) {
    width: 75vw;
  }
  @media (min-width: 968px) {
    width: 100%;
  }
`
export const FailureImage = styled.img`
  width: 350px;
  height: 400px;
  @media (max-width: 768px) {
    width: 220px;
    height: 220px;
  }
`
export const FailureName = styled.h1`
  color: ${props => (props.dark ? '#ffffff' : '#181818')};
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  margin-bottom: 0;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`
export const FailureDescription = styled.p`
  color: ${props => (props.dark ? '#606060' : '#475569')};
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  width: 450px;
  margin-bottom: 0;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
  }
`
export const RetryBtn = styled.button`
  width: 100px;
  height: 38px;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  outline: none;
  border: none;
  border-radius: 5px;
  background: #4f46e5;
  margin-top: 13px;
  cursor: pointer;
`
