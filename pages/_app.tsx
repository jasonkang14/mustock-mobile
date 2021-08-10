import "styles/globals.css";
import type { AppProps } from "next/app";
import styled from "styled-components";
import Footer from "organisms/Footer";
import * as mixins from "styles/mixins";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Content>
        <Component {...pageProps} />
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
`;

const Content = styled.div`
  height: 100%;
`;
