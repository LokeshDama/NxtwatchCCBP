import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import VideoContext from '../../context/VideoContext'

import {
  LoginContainer,
  LoginCard,
  LogoContainer,
  LogoImage,
  FormContainer,
  UsernameContainer,
  PasswordContainer,
  Label,
  Input,
  CheckboxContainer,
  InputCheckBox,
  LabelShowPassword,
  SubmitButton,
  ErrorMsg,
  LoginContainerDark,
  LoginCardDark,
  LogoContainerDark,
  UsernameContainerDark,
  PasswordContainerDark,
  LabelDark,
  InputDark,
  CheckboxContainerDark,
  InputCheckBoxDark,
  LabelShowPasswordDark,
} from './styledComponents'

class Login extends Component {
  state = {
    showSubmitError: false,
    username: '',
    password: '',
    errorMsg: '',
    inputType: 'password',
  }

  onChangeUserName = event => {
    this.setState({
      username: event.target.value,
      errorMsg: '',
      showSubmitError: false,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
      errorMsg: '',
      showSubmitError: false,
    })
  }

  onChangeCheckBox = event => {
    if (event.target.checked === true) {
      this.setState({
        inputType: 'text',
      })
    } else {
      this.setState({
        inputType: 'password',
      })
    }
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({
      showSubmitError: true,
      errorMsg,
    })
  }

  Onsubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  loginLightBg = () => {
    const {
      showSubmitError,
      username,
      password,
      errorMsg,
      inputType,
    } = this.state
    return (
      <LoginContainer>
        <LoginCard>
          <LogoContainer>
            <LogoImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
          </LogoContainer>
          <FormContainer onSubmit={this.Onsubmit}>
            <UsernameContainer>
              <Label htmlFor="USERNAME">USERNAME</Label>
              <Input
                id="USERNAME"
                type="text"
                placeholder="Username"
                value={username}
                onChange={this.onChangeUserName}
              />
            </UsernameContainer>
            <PasswordContainer>
              <Label htmlFor="PASSWORD">PASSWORD</Label>
              <Input
                id="PASSWORD"
                type={inputType}
                placeholder="Password"
                value={password}
                onChange={this.onChangePassword}
              />
            </PasswordContainer>
            <CheckboxContainer>
              <InputCheckBox
                type="checkbox"
                id="show-password"
                onChange={this.onChangeCheckBox}
              />
              <LabelShowPassword htmlFor="show-password">
                Show Password
              </LabelShowPassword>
            </CheckboxContainer>
            <SubmitButton type="submit">Login</SubmitButton>
          </FormContainer>
          {showSubmitError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
        </LoginCard>
      </LoginContainer>
    )
  }

  loginDarkBg = () => {
    const {
      showSubmitError,
      username,
      password,
      errorMsg,
      inputType,
    } = this.state
    return (
      <LoginContainerDark>
        <LoginCardDark>
          <LogoContainerDark>
            <LogoImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
              alt="logo"
            />
          </LogoContainerDark>
          <FormContainer onSubmit={this.Onsubmit}>
            <UsernameContainerDark>
              <LabelDark htmlFor="USERNAME">USERNAME</LabelDark>
              <InputDark
                id="USERNAME"
                value={username}
                type="text"
                placeholder="Username"
                onChange={this.onChangeUserName}
              />
            </UsernameContainerDark>
            <PasswordContainerDark>
              <LabelDark htmlFor="PASSWORD">PASSWORD</LabelDark>
              <InputDark
                id="PASSWORD"
                value={password}
                type={inputType}
                placeholder="Password"
                onChange={this.onChangePassword}
              />
            </PasswordContainerDark>
            <CheckboxContainerDark>
              <InputCheckBoxDark
                type="checkbox"
                id="show-password"
                onChange={this.onChangeCheckBox}
              />
              <LabelShowPasswordDark htmlFor="show-password">
                Show Password
              </LabelShowPasswordDark>
            </CheckboxContainerDark>
            <SubmitButton type="submit">Login</SubmitButton>
          </FormContainer>
          {showSubmitError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
        </LoginCardDark>
      </LoginContainerDark>
    )
  }

  renderLoginPage = () => (
    <VideoContext.Consumer>
      {value => {
        const {isDark} = value
        return isDark ? this.loginDarkBg() : this.loginLightBg()
      }}
    </VideoContext.Consumer>
  )

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return this.renderLoginPage()
  }
}
export default Login
