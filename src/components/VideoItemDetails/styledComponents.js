import styled from 'styled-components/macro'

import {Link} from 'react-router-dom'

export const VideoItemDetailsRouteContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9 ')};
`

export const VideoItemDetailsContainer = styled.div`
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

export const Nav = styled.p`
  color: #64748b;
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
/** VideoBarContainer */

export const VideoBarContainer = styled.div`
  min-height: 90vh;
  padding: 15px;
  width: 100vw;
  background-color: #f9f9f9;
  @media (max-width: 564px) {
    padding: 6px;
  }
  @media (min-width: 768px) {
    width: 75vw;
  }
  @media (min-width: 968px) {
    width: 100%;
  }
`
export const ReactPlayerContainer = styled.div`
  border-radius: 6px;
  @media (min-width: 768px) {
    height: 60%;
  }
`
export const Title = styled.p`
  color: #424242;
  font-size: 17px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-top: 17px;
  line-height: 1.4;
  @media (max-width: 920px) {
    font-size: 16px;
    margin-bottom: 0;
  }
`
export const VideoViewsAndPublishAndLikeContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const ViewsAndPublishContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 14px;
  @media (max-width: 768px) {
    margin-top: 3px;
  }
`

export const ViewsCount = styled.p`
  color: #475569;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  @media (max-width: 920px) {
    font-size: 13px;
    margin-left: 2px;
  }
`

export const Published = styled.p`
  color: #475569;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 920px) {
    font-size: 13px;
    margin-left: 2px;
  }
`
export const LikeDislikeAndSaveContainer = styled.div`
  display: flex;
  align-items: center;
`

export const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
  cursor: pointer;
`

export const DislikeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
  cursor: pointer;
`

export const SaveContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`
export const SocialButton = styled.button`
  border: none;
  background: transparent;
  outline: none;
  display: flex;
  align-items: center;
  cursor: pointer;
`
export const TextContent = styled.p`
  color: ${props => (props.isSaved ? '#2563eb' : '#64748b')};
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-left: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 920px) {
    font-size: 13px;
    margin-left: 8px;
  }
`
export const LikeTextContent = styled.p`
  color: ${props => (props.isLiked ? '#2563eb' : '#64748b')};
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-left: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 920px) {
    font-size: 13px;
    margin-left: 8px;
  }
`
export const DisLikeTextContent = styled.p`
  color: ${props => (props.isDisLiked ? '#2563eb' : '#64748b')};
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-left: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 920px) {
    font-size: 13px;
    margin-left: 8px;
  }
`
export const Horizontal = styled.hr`
  border: 1px solid #ebebeb;
  background: #ebebeb;
  margin-bottom: 15px;
`
export const ProfileWithSubscribersContainer = styled.div`
  display: flex;
  align-items: center;
`
export const Profile = styled.img`
  width: 50px;
  height: 40px;
  @media (max-width: 768px) {
    width: 45px;
    height: 37px;
  }
`
export const NameAndSubscribers = styled.div`
  margin-left: 15px;
`
export const Name = styled.p`
  color: #0f0f0f;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: bold;
`
export const Subscribers = styled.p`
  color: #475569;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const Description = styled.p`
  color: #909090;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    margin-left: 64px;
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

export const NavDark = styled.p`
  color: #ebebeb;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
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
/** VideoBarContainerDark */
export const VideoBarContainerDark = styled.div`
  min-height: 90vh;
  padding: 15px;
  width: 100vw;
  background-color: #0f0f0f;
  @media (max-width: 564px) {
    padding: 6px;
  }
  @media (min-width: 768px) {
    width: 75vw;
  }
  @media (min-width: 968px) {
    width: 100%;
  }
`
export const TitleDark = styled.p`
  color: #ebebeb;
  font-size: 17px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-top: 17px;
  line-height: 1.4;
  @media (max-width: 920px) {
    font-size: 16px;
    margin-bottom: 0;
  }
`
export const ViewsCountDark = styled.p`
  color: #7e858e;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  @media (max-width: 920px) {
    font-size: 13px;
    margin-left: 2px;
  }
`

export const PublishedDark = styled.p`
  color: #7e858e;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 920px) {
    font-size: 13px;
    margin-left: 2px;
  }
`

export const NameDark = styled.p`
  color: #ebebeb;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: bold;
`

export const TextContentDark = styled.p`
  color: ${props => (props.isSaved ? '#2563eb' : '#64748b')};
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-left: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 920px) {
    font-size: 13px;
    margin-left: 8px;
  }
`
export const LikeTextContentDark = styled.p`
  color: ${props => (props.isLiked ? '#2563eb' : '#64748b')};
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-left: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 920px) {
    font-size: 13px;
    margin-left: 8px;
  }
`
export const DisLikeTextContentDark = styled.p`
  color: ${props => (props.isDisLiked ? '#2563eb' : '#64748b')};
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-left: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 920px) {
    font-size: 13px;
    margin-left: 8px;
  }
`
export const HorizontalDark = styled.hr`
  border: 1px solid #7e858e;
  background: #7e858e;
  margin-bottom: 15px;
`
export const SubscribersDark = styled.p`
  color: #7e858e;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const DescriptionDark = styled.p`
  color: #ebebeb;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    margin-left: 64px;
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
  background-color: ${props => (props.dark ? '#0f0f0f' : '#ffffff')};
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
  min-height: 90vh;
  width: 100vw;
  background-color: ${props => (props.dark ? '#0f0f0f' : '#ffffff')};
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
