import VideoContext from '../../context/VideoContext'

import {
  GameItem,
  LinkGenerate,
  ThumbnailContainer,
  ThumbnailImage,
  TextContainer,
  Title,
  ViewsText,
  TitleDark,
  ViewsTextDark,
} from './styledComponents'

const GameVideoItem = props => {
  const {game} = props
  const {id, thumbnailUrl, viewCount, title} = game

  const GameItemDark = () => (
    <LinkGenerate to={`/videos/${id}`}>
      <GameItem>
        <ThumbnailContainer>
          <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
        </ThumbnailContainer>
        <TextContainer>
          <TitleDark>{title}</TitleDark>
          <ViewsTextDark>{viewCount} Watching Worldwide</ViewsTextDark>
        </TextContainer>
      </GameItem>
    </LinkGenerate>
  )

  const GameItemLight = () => (
    <LinkGenerate to={`/videos/${id}`}>
      <GameItem>
        <ThumbnailContainer>
          <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
        </ThumbnailContainer>
        <TextContainer>
          <Title>{title}</Title>
          <ViewsText>{viewCount} Watching Worldwide</ViewsText>
        </TextContainer>
      </GameItem>
    </LinkGenerate>
  )

  return (
    <VideoContext.Consumer>
      {value => {
        const {isDark} = value
        return isDark ? GameItemDark() : GameItemLight()
      }}
    </VideoContext.Consumer>
  )
}
export default GameVideoItem
