import "styles/globals.css";
import type { AppProps } from "next/app";
import styled from "styled-components";
import Footer from "organisms/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Content></Content>
      <Footer />
    </Layout>
  );
}
export default MyApp;

const Layout = styled.div`
  height: 100vh;
  background-color: var(--color-02);
`;

const Content = styled.div`
  height: 100%;
`;
