import styled from 'styled-components'

export const SearchVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: ${props => props.bgColor};
  overflow-y: scroll;
`
export const VideosCont = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`
export const TrendingHeadCont = styled.div`
  display: flex;
  height: 100px;
  margin-left: 50px;
  align-items: center;
  background-color: ${props => props.bgColor};
`
export const TrendLogo = styled.div`
  background-color: #94a3b8;
  border: 0px none;
  border-radius: 50px;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`
export const TrendHead = styled.h1`
  font-size: 20px;
  color: ${props => props.color};
`
export const ProductsLoaderCont = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and(min-width:768px) {
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
  width: 100%;
  background-color: ${props => props.bgColor};
  overflow-y: scroll;
`
export const HomeCont = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  background-color: ${props => props.bgColor};
`
export const NotFoundCont = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
`
export const Image = styled.img`
  width: 250px;
  margin: 10px;
`
export const Heading = styled.h1`
  font-size: 30px;
  color: ${props => props.textColor};
  margin: 15px;
  color: black;
`
export const Desc = styled.p`
  font-size: 20px;
  color: ${props => props.textColor};
  margin-left: 15px;
`
