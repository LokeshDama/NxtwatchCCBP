import React from 'react'

const VideoContext = React.createContext({
  isDark: true,
  activeNav: 'HOME',
  changeTheme: () => {},
  listOfSavedVideos: [],
  addSavedVideo: () => {},
  removeSavedVideo: () => {},
  changeActiveNav: () => {},
})
export default VideoContext
