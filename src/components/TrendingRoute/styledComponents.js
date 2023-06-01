import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SearchVideosCont = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
  overflow-y: scroll;
  padding: 30px;
`
export const VideosCont = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
`
export const TrendHeadCont = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  margin-left: 50px;
  width: 100%;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
`
export const TrendLogo = styled.div`
  border: 0px none;
  background-color: #94a3b8;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const TrendHeading = styled.h1`
  color: ${props => props.color};
  font-weight: bold;
`

export const ProductLoaderCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media screen and (min-width: 768px) {
    width: 70%;
  }
`
export const HomeStickyCont = styled.div`
  position: sticky;
  position: -webkit-sticky;
`
export const HomeSideCont = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
  overflow-y: scroll;
  width: 100%;
`
export const HomeCont = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.bgColor};
  width: 100vw;
`
export const NotFoundCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  background-color: '#ffffff';
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
export const NavLinkTwo = styled(Link)`
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
