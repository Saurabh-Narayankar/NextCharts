import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import NavBar from '../components/HomePage/navbar/navbar'
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>NextCharts - Data Visualisation</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <ChakraProvider>
      <NavBar />
        <Component {...pageProps} />
    </ChakraProvider>
    </>
  );
}

export default MyApp;
