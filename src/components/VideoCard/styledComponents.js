import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoCardCont = styled.li`
  display: flex;
  flex-direction: column;

  list-style-type: none;
  width: 300px;
  cursor: pointer;
  margin: 23px;
  background-color: ${props => props.bgColor};
`

export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 15px;
`

export const ThumbnailImage = styled.img`
  width: 100%;
`

export const VideoCardBottomCont = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`

export const VideoDetailsCont = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
`

export const VideoDetailsText = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: ${props => props.size};
  font-weight: bold;
  color: #475569;
`

export const NavLink = styled(Link)`
  color: #1e293b;
  text-decoration: none;
  margin-bottom: 10px;
`
