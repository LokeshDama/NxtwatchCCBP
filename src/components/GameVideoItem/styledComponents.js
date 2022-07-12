import styled from 'styled-components/macro'

import {Link} from 'react-router-dom'

export const LinkGenerate = styled(Link)`
  text-decoration: none;
`

export const GameItem = styled.li`
  width: 260px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 2px;
  flex-grow: 1;
  @media (max-width: 564px) {
    width: 100%;
  }
`

export const ThumbnailContainer = styled.div`
  @media (max-width: 768px) {
    margin-bottom: 5px;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 260px;
  @media (max-width: 564px) {
    height: 300px;
  }
  @media (max-width: 664px) and (min-width: 564px) {
    height: 330px;
  }
  @media (min-width: 768px) and (max-width: 793px) {
    height: 450px;
  }
`

export const TextContainer = styled.div``

export const Title = styled.p`
  color: #0f0f0f;
  font-size: 17px;
  font-family: 'Roboto';
  font-weight: bold;
  margin-bottom: 0px;
  margin-top: 5px;
  line-height: 1.4;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`

export const ViewsText = styled.p`
  color: #475569;
  font-size: 17px;
  font-family: 'Roboto';
  font-weight: bold;
  line-height: 1.4;
  margin-top: 8px;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`
/** Dark */

export const TitleDark = styled.p`
  color: #ffffff;
  font-size: 17px;
  font-family: 'Roboto';
  font-weight: bold;
  margin-bottom: 0px;
  margin-top: 5px;
  line-height: 1.4;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`

export const ViewsTextDark = styled.p`
  color: #64748b;
  font-size: 17px;
  font-family: 'Roboto';
  font-weight: bold;
  line-height: 1.4;
  margin-top: 8px;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`
