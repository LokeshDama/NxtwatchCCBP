import {BsDot} from 'react-icons/bs'

import {formatDistanceToNow} from 'date-fns'

import VideoContext from '../../context/VideoContext'

import {
  Item,
  LinkGenerate,
  ThumbnailImageContainer,
  Thumbnail,
  ItemTextContainer,
  ProfileImage,
  DescriptionContainer,
  ChannelDescriptionContainer,
  Title,
  Name,
  ViewsCountAndDate,
  ViewsCount,
  PublishedAt,
  TitleDark,
} from './styledComponents'

const TrendingVideoItem = props => {
  const {video} = props
  const {
    id,
    thumbnailUrl,
    profileImageUrl,
    title,
    name,
    viewCount,
    publishedAt,
  } = video
  const TrendingVideoItemDark = () => (
    <LinkGenerate to={`/videos/${id}`}>
      <Item>
        <ThumbnailImageContainer>
          <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
        </ThumbnailImageContainer>
        <ItemTextContainer>
          <ProfileImage src={profileImageUrl} alt="channel logo" />
          <DescriptionContainer>
            <TitleDark>{title}</TitleDark>
            <ChannelDescriptionContainer>
              <Name>{name}</Name>
              <ViewsCountAndDate>
                <ViewsCount>
                  <BsDot className="hide-dot" size="18" color="#909090" />
                  {viewCount} views
                </ViewsCount>
                <PublishedAt>
                  <BsDot size="18" color="#909090" />
                  {formatDistanceToNow(new Date(publishedAt))}
                </PublishedAt>
              </ViewsCountAndDate>
            </ChannelDescriptionContainer>
          </DescriptionContainer>
        </ItemTextContainer>
      </Item>
    </LinkGenerate>
  )
  const TrendingVideoItemLight = () => (
    <LinkGenerate to={`/videos/${id}`}>
      <Item>
        <ThumbnailImageContainer>
          <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
        </ThumbnailImageContainer>
        <ItemTextContainer>
          <ProfileImage src={profileImageUrl} alt="channel logo" />
          <DescriptionContainer>
            <Title>{title}</Title>
            <ChannelDescriptionContainer>
              <Name>{name}</Name>
              <ViewsCountAndDate>
                <ViewsCount>
                  <BsDot className="hide-dot" size="18" color="#1e293b" />
                  {viewCount} views
                </ViewsCount>
                <PublishedAt>
                  <BsDot size="18" color="#1e293b" />
                  {formatDistanceToNow(new Date(publishedAt))}
                </PublishedAt>
              </ViewsCountAndDate>
            </ChannelDescriptionContainer>
          </DescriptionContainer>
        </ItemTextContainer>
      </Item>
    </LinkGenerate>
  )
  return (
    <VideoContext.Consumer>
      {value => {
        const {isDark} = value
        return isDark ? TrendingVideoItemDark() : TrendingVideoItemLight()
      }}
    </VideoContext.Consumer>
  )
}
export default TrendingVideoItem
