import styled from 'styled-components'

export const HomeCont = styled.div`
  display: flex;
  width: 100vw;
  background-color: ${props => props.bgColor};
`
export const BannerImgCont = styled.div`
  background-image: url('');
  background-size: cover;
  display: ${props => props.display};
  padding: 50px;
  width: 80%;
  height: 40vh;
  flex-direction: row;
`

export const GetItButton = styled.button`
  background-color: transparent;
  color: #181818;
  text-align: center;
  margin: 20px;
  border: 1px solid #181818;
  height: 30px;
  width: 100px;
`

export const BannerImg = styled.img`
  width: 250px;
  object-fit: fill;
`

export const HomeStickyCont = styled.div`
  position: sticky;
  position: -webkit-sticky;
`

export const HomeSideCont = styled.div` 
display: flex;
flex-direction:column;
overflow-y:scroll;
background-color:${props => props.bgColor}
width: 100%;
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 10px;
  cursor: pointer;
  outline: none;
  border-radius: 10px;
`

export const ModalCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`
