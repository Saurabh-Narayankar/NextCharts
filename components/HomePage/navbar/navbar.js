import { Text, Flex, Box, Button, Stack } from "@chakra-ui/react";
import Link from "next/link";
import ChartsDrawer from "./drawer";

const Navbar = () => {



  return (
      <Box width="100%" bgColor="purple.500" borderBottom='3px solid #353535'>
      <Flex
        flexDirection="row"
        px='10'
        py='4'
        alignItems="center"
        justifyContent="space-between"
        backgroundColor='blackAlpha.900'
      >
        <Link href='/'><Text
          marginRight="5"
          fontSize={["26px", "24px", "35px", "45px", '50px']}
          fontWeight="bold"
          color='white'
          _hover={{ cursor: 'pointer'}} 
        >
          NextCharts
        </Text></Link>
        <Flex flexDirection="row" flexWrap="wrap">
          <Stack direction={["column", "row"]} spacing="4">
            <ChartsDrawer />
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
