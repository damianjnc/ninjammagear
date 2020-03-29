import App, { Container } from 'next/app'
import { ApolloProvider } from 'react-apollo'
import withData from '../lib/withData'

import Page from '../components/Page'

function MyApp({ apollo, Component, pageProps }) {
  return (
    <Container>
      <ApolloProvider client={apollo}>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ApolloProvider>
    </Container>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.

MyApp.getInitialProps = async appContext => {
  const appProps = await App.getInitialProps(appContext)

  let pageProps = {}
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx)
  }
  //this exposes the query to the user
  pageProps.query = appContext.ctx.query

  return { ...appProps, pageProps }
}

export default withData(MyApp)
