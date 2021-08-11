import "styles/globals.css";
import { useState } from "react";
import type { AppProps } from "next/app";
import styled from "styled-components";
import Footer from "organisms/Footer";
import Header from "organisms/Header";
import NavigationBar from "organisms/NavigationBar";
import * as mixins from "styles/mixins";
import { AuthScreen, MainScreen } from "templates/Screen";

const auth = true;

function MyApp({ Component, pageProps }: AppProps) {
  const [showNav, setShowNav] = useState(false);

  const toggleNavBar = () => {
    setShowNav(!showNav);
  };

  return (
    <Layout>
      {auth ? (
        <>
          <Header toggleNavBar={toggleNavBar} />
          <MainScreen>
            {showNav && <NavigationBar />}
            <Component {...pageProps} />
          </MainScreen>
        </>
      ) : (
        <AuthScreen>
          <Component {...pageProps} />
        </AuthScreen>
      )}
      <Footer />
    </Layout>
  );
}
export default MyApp;

const Layout = styled.div`
  ${mixins.flexColumn}
  position: relative;
  justify-content: space-between;
  height: 100vh;
  background-color: var(--color-02);
`;
