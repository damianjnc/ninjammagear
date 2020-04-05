import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import Header from './Header'
import Meta from './Meta'

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
}

const GlobalStyle = createGlobalStyle`
  html{
    -webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after{
    -webkit-box-sizing: inherit;-moz-box-sizing: inherit;box-sizing: inherit;
  }
  body{
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    font-family: ${props => props.theme.fontFamily};
  }
  a{
    text-decoration: none;
    color: ${props => props.theme.black};
  }
`

const StyledPage = styled.div`
  background: white;
  color: ${({ theme }) => theme.black};
`

const Inner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  background: ${({ theme }) => theme.background};
  margin: 0 auto;
  padding: 2rem;
`

const Page = ({ children }) => {
  return (
      <StyledPage>
        <GlobalStyle />
        <Meta />
        <Header />
        <Inner>{children}</Inner>
      </StyledPage>
  )
}

export default Page
