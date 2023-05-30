import styled from 'styled-components'

export const NavHeader = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  padding-left: 30px;
  padding-right: 30px;
  position: sticky;
  scroll-behavior: smooth;
  height: 50px;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 768px) {
    flex-direction: column;
  } ;
`
export const ProfileImg = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  margin-left: 10px;
`
export const ContentCont = styled.ul`
  display: flex;

  justify-content: space-between;
  align-items: center;
  list-style-position: none;
  width: 15%;
`
export const ContentListItem = styled.li`
  display: flex;
`
export const LogOutButton = styled.button`
  font-size: 12px;
  font-weight: bold;
  padding: 8px 14px;
  color: #ffffff;
  background-color: #0967d2;
  cursor: pointer;
  outline: none;
  margin-left: 14px;
  border: none;
  border-radius: 5px;
`

export const ThemeButton = styled.button`
  color: ${props => props.color};
  border: 0px none;
  cursor: pointer;
  background-color: transparent;
`
export const WebsiteLogo = styled.img`
  width: 110px;
  @media screen and (min-width: 768px) {
    width: 170px;
  } ;
`
export const ModalCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #cbd5e1;
  width: 400px;
  border-radius: 10px;
  height: 200px;
`
export const AlignRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const AlignColumn = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #cbd5e1;

  border-radius: 10px;
  padding: 20px;
`
export const CloseButton = styled.button`
  font-size: 15px;
  font-weight: bold;
  padding: 8px 14px;
  color: grey;
  background-color: transparent;
  align-self: flex-end;
  cursor: pointer;
  outline: none;
  margin: 11px;
  border: 1px solid grey;
  border-radius: 10px;
`
export const ModalDesc = styled.p`
  font-size: 25px;
  font-family: 'Roboto';
  margin: 10px;
  color: black;
`
export const ConfirmButton = styled.button`
  font-size: 15px;
  font-weight: bold;
  padding: 14px;
  padding-left: 20px;
  padding-right: 20px;
  color: white;
  background-color: #3b82f6;
  align-self: flex-end;
  cursor: pointer;
  outline: none;
  margin: 11px;
  border: 1px solid grey;
  border-radius: 10px;
`
