import styled from 'styled-components/macro'

import {Link} from 'react-router-dom'

export const LinkGenerate = styled(Link)`
  text-decoration: none;
`

export const Item = styled.li`
  margin-bottom: 35px;
  width: 100%;
  @media (min-width: 664px) {
    display: flex;
    flex-direction: row;
  }
`

export const ThumbnailImageContainer = styled.div``

export const Thumbnail = styled.img`
  width: 370px;
  height: 260px;
  @media (max-width: 564px) {
    width: 100%;
    height: 220px;
  }
  @media (min-width: 690px) and (max-width: 920px) {
    width: 200px;
    height: 190px;
  }
`

export const ItemTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (min-width: 564px) {
    align-self: flex-start;
    margin-left: 20px;
  }
`

export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  align-self: flex-start;
  margin-top: 12px;
  margin-right: 10px;
  @media (min-width: 564px) {
    display: none;
  }
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.p`
  color: #0f0f0f;
  font-size: 21px;
  font-family: 'Roboto';
  font-weight: bold;
  margin-bottom: 0px;
  line-height: 1.4;
  margin-bottom: 0px;
  @media (max-width: 920px) {
    font-size: 15px;
  }
`
export const TitleDark = styled.p`
  color: #ffffff;
  font-size: 21px;
  font-family: 'Roboto';
  font-weight: bold;
  margin-bottom: 0px;
  line-height: 1.4;
  margin-bottom: 0px;
  @media (max-width: 920px) {
    font-size: 15px;
  }
`

export const ChannelDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  @media (max-width: 768px) {
    flex-direction: row;
  }
`

export const Name = styled.p`
  color: #909090;
  font-size: 17px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-bottom: 0px;
  @media (max-width: 768px) {
    font-size: 12px;
    margin-right: 13px;
  }
`

export const ViewsCountAndDate = styled.div`
  display: flex;
  flex-direction: row;
`

export const ViewsCount = styled.p`
  color: #909090;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 920px) {
    font-size: 12px;
  }
`

export const PublishedAt = styled.p`
  color: #909090;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 920px) {
    font-size: 12px;
    margin-left: 2px;
  }
`
