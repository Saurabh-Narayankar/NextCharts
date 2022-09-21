import Link from "next/link";
import { Text, Box, Heading, Flex, transition } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Charts = () => {
  return (
    <Flex direction="column" textAlign="center" bgColor="blackAlpha.900">
      <Box width="100%" bgColor="blackAlpha.900" paddingBottom="70px">
        <Heading
          size={["2xl", "3xl", "4xl"]}
          color="purple.50"
          paddingTop="20"
          textDecoration="underline"
        >
          Chart Types
        </Heading>
      </Box>
      <Box
        width="100%"
        height="100vh"
        bgColor="blackAlpha.900"
        paddingBottom="350px"
      >
        <Flex
          
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          gap="12"
        >
          <Link href="/charts/linechart">
            <Box
              as="article"
              maxW="sm"
              fontSize="20"
              p="5"
              borderWidth="2px"
              rounded="md"
              textAlign="left"
              color="white"
              _hover={{
                cursor: "pointer",
                bgColor: "whiteAlpha.900",
                color: "black",
                transition: "0.4s",
                border: "2px solid purple",
              }}
            >
              <Heading textAlign="left" size="xl" my="3" color="purple.500">
                Line Chart <ArrowForwardIcon />
              </Heading>
              A line chart is a great way to visualise the correlation between
              two parameters.
            </Box>
          </Link>

          <Box
            as="article"
            maxW="sm"
            fontSize="20"
            p="5"
            borderWidth="2px"
            rounded="md"
            textAlign="left"
            color="white"
            _hover={{
              cursor: "pointer",
              bgColor: "white",
              color: "black",
              transition: "0.4s",
              border: "2px solid purple",
            }}
          >
            <Heading textAlign="left" size="xl" my="3" color="purple.500">
              Bar Chart <ArrowForwardIcon />
            </Heading>
            For side by side comparison of how multiple parameters correlate can
            be better visualised with a bar chart.
          </Box>
          <Box
            as="article"
            maxW="sm"
            fontSize="20"
            p="5"
            borderWidth="2px"
            rounded="md"
            textAlign="left"
            color="white"
            _hover={{
              cursor: "pointer",
              bgColor: "white",
              color: "black",
              transition: "0.4s",
              border: "2px solid purple",
            }}
          >
            <Heading textAlign="left" size="xl" my="3" color="purple.500">
              Pie Chart <ArrowForwardIcon />
            </Heading>
            Visualise how a set of data is divided in different sets in an
            beautiful manner.
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Charts;
