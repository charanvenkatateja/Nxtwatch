import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoCardCont = styled.li`
  display: flex;
  flex-direction: row;

  list-style-type: none;
  width: 100%;
  cursor: pointer;
  margin: 23px;
  border-bottom: 1px solid #000000;
  padding-bottom: 10px;
`

export const ThumbnailImage = styled.img`
  height: 250px;
  width: 50%;
  object-fit: scale-down;
`

export const VideoCardBottomCont = styled.div`
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
  color: ${props => props.textColor};
  font-family: 'Roboto';
  font-size: ${props => props.size};
  font-weight: bold;
`

export const NavLink = styled(Link)`
  color: ${props => props.color};
  text-decoration: none;
  margin-bottom: 10px;
`
