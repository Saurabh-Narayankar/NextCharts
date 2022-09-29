import { Text, Flex, Box, Button, Stack } from "@chakra-ui/react";
import Link from "next/link";
import ContactModal from "../navbar/contact";
import ChartsDrawer from "./drawer";

const Navbar = () => {



  return (
    <Box width="100%" bgColor="purple.500" borderBottom='1px solid #353535'>
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
            <ContactModal />
            <Button
              size={["xs", "sm", "md", "lg"]}
              variant="ghost"
              color="whiteAlpha.900"
              _hover={{ bg: '#ebedf0', color: 'purple.900' }}
              _active={{
                bg: 'whiteAlpha.600',
              }}
            >
              About
            </Button>
            <ChartsDrawer />
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
