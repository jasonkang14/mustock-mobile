import "styles/globals.css";
import type { AppProps } from "next/app";
import styled from "styled-components";
import Footer from "organisms/Footer";
import * as mixins from "styles/mixins";
import Header from "organisms/Header";
import { AuthScreen, MainScreen } from "templates/Screen";

const auth = true;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Content>
        {auth ? (
          <>
            <Header />
            <MainScreen>
              <Component {...pageProps} />
            </MainScreen>
          </>
        ) : (
          <AuthScreen>
            <Component {...pageProps} />
          </AuthScreen>
        )}
      </Content>
      <Footer />
    </Layout>
  );
}
export default MyApp;

const Layout = styled.div`
  ${mixins.flexColumn}
  height: 100vh;
  background-color: var(--color-02);
  overflow: scroll;
`;

const Content = styled.div`
  height: 100%;
`;
