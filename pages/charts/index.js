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
        <Link href='/charts/pieChart'>
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
            Pie charts are often used to represent sample data—with data points belonging to a combination of different categories. Each of these categories “slice of the pie.”
          </Box>
          </Link>
          <Link href="/charts/lineChart">
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
          <Link href='/charts/funnelChart'>
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
          <Link href='/charts/areaBumpChart'>
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
              AreaBump Chart <ArrowForwardIcon />
            </Heading>
            A Area Bump Chart is similar to bump chart but it is used when the X & Y coordinated are in Numbers eg :- <div>(x - year, y - rank in that year)</div>
          </Box>
          </Link>
          <Link href='/charts/radialBarChart'>
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
              RadialBar Chart <ArrowForwardIcon />
            </Heading>
            A Radial Bar Chart (also called a Circular Bar Chart) uses circular shapes to compare key metrics in your data. The chart shares a resemblance with Bar Charts
          </Box>
          </Link>
          <Link href='/charts/bumpChart'>
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
              Bump Chart <ArrowForwardIcon />
            </Heading>
            A Bump Chart is a special form of a line plot designed for exploring changes in rank over time
          </Box>
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Charts;
