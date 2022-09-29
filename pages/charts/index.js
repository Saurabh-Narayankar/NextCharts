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
              borderWidth="4px"
              rounded="md"
              textAlign="left"
              color="white"
              _hover={{
                cursor: "pointer",
                bgColor: "blackAlpha.800",
                color: "white",
                transition: "0.3s",
                border: "4px solid #553C9A",
              }}
            >
              <Heading textAlign="left" size="xl" my="3" color="purple.500">
                Line Chart <ArrowForwardIcon />
              </Heading>
              A line chart is a great way to visualise the correlation between
              two parameters.
            </Box>
          </Link>

          <Link href='/charts/funnelchart'>
          <Box
            as="article"
            maxW="sm"
            fontSize="20"
            p="5"
            borderWidth="4px"
            rounded="md"
            textAlign="left"
            color="white"
            _hover={{
              cursor: "pointer",
                bgColor: "blackAlpha.800",
                color: "white",
                transition: "0.3s",
                border: "4px solid #553C9A",
            }}
          >
            <Heading textAlign="left" size="xl" my="3" color="purple.500">
              Funnel Chart <ArrowForwardIcon />
            </Heading>
            A funnel chart helps you visualize a linear process that has continuous, connected stages.
          </Box>
          </Link>
          <Box
            as="article"
            maxW="sm"
            fontSize="20"
            p="5"
            borderWidth="4px"
            rounded="md"
            textAlign="left"
            color="white"
            _hover={{
              cursor: "pointer",
                bgColor: "blackAlpha.800",
                color: "white",
                transition: "0.3s",
                border: "4px solid #553C9A",
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
