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
  Title,
  ChannelDescriptionContainer,
  Name,
  ViewsCountAndDate,
  ViewsCount,
  PublishedAt,
  NameDark,
  ViewsCountDark,
  PublishedAtDark,
  TitleDark,
} from './styledComponents'

const VideoItem = props => {
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
  const videoItemDark = () => (
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
              <NameDark>{name}</NameDark>
              <ViewsCountAndDate>
                <ViewsCountDark>
                  <BsDot className="hide-dot" size="18" color="#64748b" />
                  {viewCount} views
                </ViewsCountDark>
                <PublishedAtDark>
                  <BsDot size="18" color="#64748b" />
                  {formatDistanceToNow(new Date(publishedAt))}
                </PublishedAtDark>
              </ViewsCountAndDate>
            </ChannelDescriptionContainer>
          </DescriptionContainer>
        </ItemTextContainer>
      </Item>
    </LinkGenerate>
  )
  const videoItemLight = () => (
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
        return isDark ? videoItemDark() : videoItemLight()
      }}
    </VideoContext.Consumer>
  )
}
export default VideoItem
