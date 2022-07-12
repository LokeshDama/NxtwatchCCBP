import styled from 'styled-components/macro'

export const LoginContainer = styled.div`
  min-height: 100vh;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LoginCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 450px;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 350px;
  }
`

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 35px;
  margin-top: 20px;
`

export const LogoImage = styled.img`
  width: 150px;
  height: 50px;
`

export const FormContainer = styled.form``

export const UsernameContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    width: 300px;
  }
`
export const PasswordContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    width: 300px;
  }
`

export const Label = styled.label`
  color: #616e7c;
  font-weight: bold;
  font-family: 'Roboto';
  font-size: 13px;
  margin-bottom: 4px;
  line-height: 1.4;
`

export const Input = styled.input`
  border: 1px solid #94a3b8;
  outline: none;
  height: 35px;
  border-radius: 3px;
  color: black;
  padding-left: 13px;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  margin-left: 3px;
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2px;
  margin-bottom: 28px;
`

export const InputCheckBox = styled.input`
  border: 1px solid #94a3b8;
  outline: none;
  height: 16px;
  width: 16px;
  border-radius: 3px;
  color: black;
  margin-right: 10px;
`

export const LabelShowPassword = styled.label`
  color: #0f0f0f;
  font-weight: 600;
  font-family: 'Roboto';
  font-size: 16px;
`
export const SubmitButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  height: 38px;
  width: 380px;
  text-align: center;
  color: #ffffff;
  font-weight: 600;
  font-family: 'Roboto';
  font-size: 16px;
  background: #3b82f6;
  border-radius: 10px;
  margin-bottom: 25px;
  @media (max-width: 768px) {
    width: 300px;
  }
`

export const ErrorMsg = styled.p`
  color: red;
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 16px;
`

/** dark login page styled-components */
export const LoginContainerDark = styled.div`
  background-color: #181818;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LoginCardDark = styled.div`
  background-color: #0f0f0f;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 450px;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 350px;
  }
`

export const LogoContainerDark = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 35px;
  margin-top: 20px;
`

export const UsernameContainerDark = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    width: 300px;
  }
`
export const PasswordContainerDark = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    width: 300px;
  }
`

export const LabelDark = styled.label`
  color: #f9f9f9;
  font-weight: bold;
  font-family: 'Roboto';
  font-size: 13px;
  margin-bottom: 4px;
  line-height: 1.4;
`

export const InputDark = styled.input`
  border: 1px solid #94a3b8;
  outline: none;
  height: 40px;
  border-radius: 3px;
  color: white;
  padding-left: 13px;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  margin-left: 3px;
  background: transparent;
`

export const CheckboxContainerDark = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2px;
  margin-bottom: 28px;
`

export const InputCheckBoxDark = styled.input`
  border: 1px solid #94a3b8;
  outline: none;
  height: 16px;
  width: 16px;
  border-radius: 3px;
  color: black;
  margin-right: 10px;
`

export const LabelShowPasswordDark = styled.label`
  color: #f8fafc;
  font-weight: 600;
  font-family: 'Roboto';
  font-size: 16px;
`
