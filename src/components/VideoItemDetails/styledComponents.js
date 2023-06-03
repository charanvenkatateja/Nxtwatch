import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ProductLoaderCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media screen and (min-width: 768px) {
    width: 70%;
  }
`

export const HomeCont = styled.div`
  display: flex;
  flex-direction: row;
  
  width: 100vw;
`
export const NotFoundCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  background-color: #ffffff;
`
export const Image = styled.img`
  height: 300px;
  margin: 20px;
`
export const Heading = styled.h1`
  text-align: center;
  color: black;
  font-size: 30px;
`
export const Desc = styled.p`
  text-align: center;
  color: black;
  font-size: 20px;
`
export const NavLink = styled(Link)`
  margin-bottom: 30px;
  text-decoration: none;
  color: #1e293b;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Retry = styled.button`
  cursor: pointer;
  outline: none;
  padding: 10px;
  color: blue;
`

export const VideoDetailsSideCont =  styled.div` 
display: flex;
  flex-direction: column;
  padding:30px;
  align-items:center;
  width: 100%;
`
export const VideoDetailsTextCont =  styled.div` 
display: flex;
  flex-direction: column;
 justify-content:flex-start;
  align-items:flex-start;
  width: 90%;
`
export const  VideoDetailsTitle =  styled.p` 
color:#181818;
font-weigth:bold;
margin-left:10px;

`

export const VideoDetailsCont =  styled.div` 
display: flex;
flex-direction: row;
justify-content:space-between;
width: 90%;
`

export const LikesCont =  styled.div` 
display:flex;
`

export const ViewsText  =  styled.p` 
color:${props=>props.color};
margin-left:10px;
font-weight:bold;
`
export const IconCont =  styled.button` 
display: flex;
  justify-content: center;
  align-items: center;
  
  flex-direction: row;
  margin-right:15px;
  cursor:pointer;
  border:opx none;
  background-color: transparent;
  color:${props=>props.color};
`

export const HorizontalLine =  styled.hr` 
backgroung-color:#181818;
color:#181818;
margin:15px;
width:100%;

`

export const ChannelCont  = styled.div`
display: flex;
flex-direction:row;
align-items: center;
`
export const ChannelLogo = styled.img`
height:50px;
width:50px;
`

export const ChannelDetailsCont = styled.div`
display: flex;
flex-direction:column;
margin-left:20px;
`

export const LogoCont = styled.div`
display: flex;
justify-content:center;
align-items: center;
padding:10px;
widht:80px;
background-color:#cbd5e1;
border-radius:40px;
`

