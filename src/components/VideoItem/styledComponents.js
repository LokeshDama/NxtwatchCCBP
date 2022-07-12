import styled from 'styled-components/macro'

import {Link} from 'react-router-dom'

export const LinkGenerate = styled(Link)`
  text-decoration: none;
`

export const Item = styled.li`
  width: 300px;
  margin-right: 12px;
  margin-bottom: 12px;
  border-radius: 2px;
  flex-grow: 1;

  @media (max-width: 664px) {
    width: 100%;
  }
`

export const ThumbnailImageContainer = styled.div`
  @media (max-width: 768px) {
    margin-bottom: 5px;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
  height: 190px;
  @media (max-width: 664px) and (min-width: 564px) {
    height: 330px;
  }
`
export const ItemTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  align-self: flex-start;
  margin-top: 12px;
  margin-right: 10px;
`
export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Title = styled.p`
  color: #1e293b;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 400;
  margin-bottom: 0px;
  line-height: 1.4;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`
export const ChannelDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: row;
  }
`
export const Name = styled.p`
  color: #909090;
  font-size: 15px;
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
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`
export const PublishedAt = styled.p`
  color: #909090;
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`

/** Dark Page */
export const TitleDark = styled.p`
  color: #f1f1f1;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 400;
  margin-bottom: 0px;
  line-height: 1.4;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`
export const NameDark = styled.p`
  color: #64748b;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-bottom: 0px;
  @media (max-width: 768px) {
    font-size: 12px;
    margin-right: 13px;
  }
`
export const ViewsCountDark = styled.p`
  color: #64748b;
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`
export const PublishedAtDark = styled.p`
  color: #64748b;
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`
