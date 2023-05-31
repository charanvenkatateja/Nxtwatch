import styled from 'styled-components'

export const NotFoundCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => props.isDark};
`

export const Desc = styled.p`
  text-align: center;
  font-size: 15px;
  color: ${props => props.isDark};
`

export const Heading = styled.h1`
  text-align: center;
  font-size: 25px;
  color: ${props => props.isDark};
`

export const Image = styled.img`
  margin: 10px;
  width: 250px;
`
