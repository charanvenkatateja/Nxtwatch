import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SearchVideosCont = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
  overflow-y: scroll;
  padding: 30px;
`
export const SearchInput = styled.input`
  width: 250px;
  border-radius: 3px;
  border: 1px solid #64748b;
  margin-left: 60px;
  padding: 3px;
  padding-left: 10px;
  padding-right: 10px;
`

export const VideosCont = styled.ul`
  display: flex;
  flex-direction: row;

  flex-wrap: wrap;
  list-style-type: none;
`
export const ProductsLoaderCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media screen and (min-width: 768px) {
    width: 70%;
  }
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
