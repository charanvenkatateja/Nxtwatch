
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ItemText = styled.h1`
  color: ${props => props.textColor};
  font-size: 20px;
  font-weight: bold;
`
export const SidebarCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  position: sticky;
  position: -webkit-sticky;
  height: 80vh;
`
export const NavItemsCont = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-top: 30px;
`
export const TextItemCont = styled.div`
  display: flex;
  background-color: ${props => props.isActive};
  justify-content: space-around;
  align-items: center;
  width: 100%;
  cursor: pointer;
`
export const SidebarBottomCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
`
export const IconsCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
export const BottomText = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  color: ${props => props.color};
  width: 140px;
`
export const IconImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 15px;
  cursor: pointer;
`
export const NavLink = styled(Link)`
  color: ${props => props.color};
  text-decoration: none;
  margin-bottom: 15px;
  font-size: 20px;
  display: flex;

  justify-content: center;
  align-items: center;
`
