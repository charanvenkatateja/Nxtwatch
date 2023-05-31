import styled from 'styled-components'

export const LoginFormCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 90%;
  max-width: 1110px;
  margin: auto;
  @media screen and (min-width: 992px) {
    flex-direction: row;
    justify-content: space-around;
  }
`

export const FormCont = styled.form`
  display: flex;
  flex-direction: column;

  align-items: center;
  height: 100vh;
  width: 100%;
  max-width: 350px;
  padding: 20px;
  border-radius: 10px;

  @media screen and (min-width: 992px) {
    width: 350px;

    flex-shrink: 0;
    padding: 64px 48px 64px 48px;
    box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  }
`

export const LoginWebsiteLogo = styled.img`
  width: 185px;
`

export const InputCont = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 20px;
  width: 100%;
`

export const LoginButton = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  padding: 4px 12px 4px 12px;
  border: none;
  outline: none;
  border-radius: 8px;
  margin-top: 20px;
  margin-bottom: 5px;
  cursor: pointer;
  font-size: 15px;
`

export const InputLabel = styled.label`
  margin-bottom: 0px;
  line-height: 16px;
  color: #475569;
  font-size: 12px;
`

export const UserNameInputField = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #d7dfe9;
  background-color: #e2e8f0;
  color: #67748b;
  border-radius: 3px;
  margin-top: 5px;
  outline: none;
  padding: 8px 16px 8px 16px;
`

export const PasswordInputField = styled(UserNameInputField)

export const ErrorMsg = styled.p`
  align-self: flex-start;
  margin-top: 3px;
  font-size: 12px;
  margin-bottom: 0px;
  line-height: 16px;
  color: #ff0b37;
`

export const ShowHideCont = styled.div`
  display: flex;
  margin-top: 10px;
`

export const CheckboxInput = styled.input`
  margin-right: 5px;
`
