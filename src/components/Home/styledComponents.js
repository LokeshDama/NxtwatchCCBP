import styled from 'styled-components/macro'

import {Link} from 'react-router-dom'

export const HomeRouteContainer = styled.div`
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
  min-height: 100vh;
`

export const HomeContainer = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: row;
`

/** sidebar design */

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
export const LinkContainerHome = styled.div`
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

export const NavHome = styled.p`
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

/** HomeBar container */

export const HomeBarContainer = styled.div`
  min-height: 90vh;
  padding: 15px;
  width: 100vw;
  background-color: #f9f9f9;
  @media (min-width: 768px) {
    width: 75vw;
  }
  @media (min-width: 968px) {
    width: 100%;
  }
`
export const HomeBarContainerDark = styled.div`
  min-height: 90vh;
  width: 100vw;
  padding: 15px;
  background-color: #181818;
  @media (min-width: 768px) {
    width: 75vw;
  }
  @media (min-width: 968px) {
    width: 100%;
  }
`
/** Banner design */

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 30vh;
  display: ${props => props.display};
  flex-direction: column;
  justify-content: space-around;
`
export const LogoWithCloseBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const NxtLogo = styled.img`
  width: 80px;
  height: 27px;
  @media (min-width: 768px) {
    width: 100px;
    height: 40px;
  }
`
export const CloseBtn = styled.button`
  background: transparent;
  cursor: pointer;
  outline: none;
  border: none;
  align-self: flex-start;
`
export const BannerDescription = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  width: 280px;
  @media (min-width: 768px) {
    width: 370px;
  }
  @media (min-width: 1038px) {
    width: 100%;
  }
`
export const GetItNow = styled.button`
  background: transparent;
  cursor: pointer;
  outline: none;
  border: 2px solid #1e293b;
  width: 100px;
  height: 35px;
  color: #181818;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Roboto';
  @media (max-width: 768px) {
    width: 85px;
    height: 29px;
    font-size: 12px;
  }
`

/** Search container */

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 18px;
  border: 1px solid grey;
  border-radius: 2px;
  height: 30px;
  width: 100%;
  @media (min-width: 564px) {
    width: 488px;
  }
  @media (min-width: 768px) {
    width: 478px;
  }
  @media (min-width: 1000px) {
    width: 600px;
  }
`
export const SearchInput = styled.input`
  height: 100%;
  width: 85%;
  outline: none;
  border: none;
  padding-left: 13px;
`
export const IconSearchBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #d7dfe9;
  width: 15%;
  height: 100%;
  outline: none;
  border: none;
  cursor: pointer;
`
export const HomeVideosContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 0px;
`

/** SideBarContainerDark */
export const SideBarContainerDark = styled.div`
  display: none;
  background-color: #181818;
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
export const LinkContainerHomeDark = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 35px;
  padding-left: 15px;
  cursor: pointer;
  background: #383838;
`
export const NavHomeDark = styled.p`
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
/** HomeBarDark */

export const BannerContainerDark = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 30vh;
  display: ${props => props.display};
  flex-direction: column;
  justify-content: space-around;
  padding-left: 13px;
`
export const SearchContainerDark = styled.div`
  display: flex;
  align-items: center;
  margin-top: 18px;
  border: 1px solid grey;
  border-radius: 2px;
  height: 30px;
  width: 100%;
  @media (min-width: 564px) {
    width: 488px;
  }
  @media (min-width: 768px) {
    width: 478px;
  }
  @media (min-width: 1000px) {
    width: 600px;
  }
`
export const SearchInputDark = styled.input`
  height: 100%;
  width: 85%;
  outline: none;
  border: none;
  background: transparent;
  padding-left: 13px;
  color: #f9f9f9;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 400;
`
export const IconSearchBtnDark = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #383838;
  width: 15%;
  height: 100%;
  outline: none;
  border: none;
  cursor: pointer;
`
/** Loader */

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  height: 50vh;
`
/** Failure  */

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.dark ? '#0f0f0f' : '#ffffff')};
  margin-top: 10px;
  width: 100vw;
  @media (min-width: 768px) {
    width: 75vw;
  }
  @media (min-width: 968px) {
    width: 100%;
  }
`
export const FailureImage = styled.img`
  width: 240px;
  height: 240px;
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
`

/** No search Results  */

export const NoResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`
export const NoResultsImage = styled.img`
  width: 240px;
  height: 240px;
  @media (max-width: 768px) {
    width: 220px;
    height: 220px;
  }
`
export const NoResultsName = styled.h1`
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
export const NoResultsDescription = styled.p`
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
