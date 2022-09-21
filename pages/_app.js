import { ChakraProvider } from "@chakra-ui/react";
import NavBar from '../components/HomePage/navbar/navbar'
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <NavBar />
        <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
