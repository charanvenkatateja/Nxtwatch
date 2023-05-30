import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoItemCont = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  list-style-type: none;
  width: 250px;
  cursor: pointer;
  margin: 23px;
  border-bottom: 1px solid #000000;
  padding-bottom: 10px;
  height: 400px;
`

export const ThumbnailImg = styled.img`
  height: 250px;
  width: 100%;
  object-fit: fill;
`

export const VideoItemBottomCont = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`

export const VideoDetailsCont = styled.div`
  margin-left: 25px;
  display: flex;
  flex-direction: column;
`

export const VideoDetailsText = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: bold;
`

export const NavLink = styled.styled(Link)`
color:#1e293b;
text-decoration:none;
margin-bottom:10px;
`
