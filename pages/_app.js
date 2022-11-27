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
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,500,0,200&display=swap" />
    </Head>
    <ChakraProvider>
      <NavBar />
        <Component {...pageProps} />
    </ChakraProvider>
    </>
  );
}

export default MyApp;
