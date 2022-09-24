import Link from "next/link";
import { Box, Text, Flex, Highlight, keyframes } from "@chakra-ui/react";

const HeroSec = () => {

  const animationKeyframes = keyframes`
  0% { background-position: 0% 100% }
  25% { background-position: 100% 0% }
  50% { background-position: 0% 100% }
  75% { background-position: 100% 0% }
  100% { background-position: 0% 100% }
`;

const animation = `${animationKeyframes} 10s linear infinite`;

  return (
    // HEADING
    <Flex direction="column" backgroundColor='blackAlpha.900'>
      <Box
        width="100%"
        className="herobox"
        backgroundColor='blackAlpha.900'
        textAlign="center"
      >
        <Text
          fontSize={["3xl", "5xl", "7xl"]}
          fontWeight="bold"
          color="white"
          paddingTop="100px"
          paddingBottom="6"  
          bgGradient={'linear(to-tr, #FF6FD8 19%, #3813C2 100%)'}
           bgClip='text'
          bgSize='1000%'
          animation={animation}
          letterSpacing='wide'
          
        >
          Create your own{" "}
          <Highlight
            query="Charts"
            styles={{
              color: "white",
              px: "5",
              rounded: "20",
              bg: "purple.700",
            }}
          >
            CHARTS
          </Highlight>{" "}
          as per your need
        </Text>
      </Box>
      <Box bgColor="blackAlpha.900" paddingBottom="120px" textAlign="center">
        <Text fontSize={["xl", "2xl", "3xl"]} color="whiteAlpha.700" letterSpacing='wide'>
          NextCharts provides you with highly customizable charts drawn from
          your own data
        </Text>
      </Box>
      <Box bgColor="blackAlpha.900" paddingBottom="310px" textAlign="center">
        <Link href="/charts">
          <Box
            as="button"
            p={5}
            color="white"
            fontWeight="bold"
            borderRadius="md"
            bgGradient="linear(to-r, purple.400, purple.600)"
            _hover={{
              bgGradient: "linear(to-r, purple.500, purple.800)", transition: '0.4s'
            }}
            _active={{ bgGradient: "linear(to-r, purple.600, purple.900)" }}
          >
            <Text fontSize="2xl">Get Started</Text>
          </Box>
        </Link>
      </Box>
    </Flex>
  );
};

export default HeroSec;
