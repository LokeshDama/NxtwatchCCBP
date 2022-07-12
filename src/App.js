import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import SavedVideos from './components/SavedVideos'

import VideoContext from './context/VideoContext'

import './App.css'

class App extends Component {
  state = {
    isDark: false,
    listOfSavedVideos: [],
    activeNav: 'HOME',
  }

  changeActiveNav = activeTab => {
    this.setState({
      activeNav: activeTab,
    })
  }

  addVideoToList = videoDetails => {
    const {listOfSavedVideos} = this.state
    const index = listOfSavedVideos.findIndex(
      eachVideo => eachVideo.id === videoDetails.id,
    )
    if (index === -1) {
      this.setState({listOfSavedVideos: [...listOfSavedVideos, videoDetails]})
    } else {
      listOfSavedVideos.splice(index, 1)
      this.setState({listOfSavedVideos})
    }
  }

  clickChangeTheme = () => {
    this.setState(prevState => ({
      isDark: !prevState.isDark,
    }))
  }

  removeVideo = id => {
    const {listOfSavedVideos} = this.state
    const updatedSavedVideos = listOfSavedVideos.filter(
      eachVideo => eachVideo.id !== id,
    )
    this.setState({listOfSavedVideos: updatedSavedVideos})
  }

  render() {
    const {isDark, listOfSavedVideos, activeNav} = this.state
    return (
      <VideoContext.Provider
        value={{
          isDark,
          listOfSavedVideos,
          activeNav,
          changeTheme: this.clickChangeTheme,
          addSavedVideo: this.addVideoToList,
          removeSavedVideo: this.removeVideo,
          changeActiveNav: this.changeActiveNav,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </VideoContext.Provider>
    )
  }
}
export default App
