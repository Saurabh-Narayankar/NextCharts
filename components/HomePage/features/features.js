import { Box, Heading, Text, Flex, Highlight, Divider, } from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons'

const FeatureSec = () => {
  return (
    <Flex direction="column" textAlign='center'>
      {/* FEATURES */}
      <Box width="100%" bgColor="blackAlpha.900" paddingBottom="70px">
        <Heading
          size={['2xl', '3xl', '4xl']}
          color="purple.50"
          paddingTop="20"
          textDecoration="underline"
        >
          Features
        </Heading>
      </Box>
      <Box  bgColor="blackAlpha.900" paddingBottom="300px">
        <Flex flexDirection="row" flexWrap='wrap' justifyContent="center" gap="8">
          <Box
            as="article"
            maxW="sm"
            fontSize="20"
            p="5"
            borderWidth="1px"
            rounded="md"
            textAlign="left"
            color="white"
            marginBottom="8"
          >
            <Heading textAlign="left" size="xl" my="3" color="purple.500">
              Free of cost <ArrowForwardIcon />
            </Heading>
            We charge you no money for any service that we provide.
          </Box>
          <Box
            as="article"
            maxW="sm"
            fontSize="20"
            p="5"
            borderWidth="1px"
            rounded="md"
            textAlign="left"
            color="white"
            marginBottom="8"
          >
            <Heading textAlign="left" size="xl" my="3" color="purple.500">
              Variety <ArrowForwardIcon />
            </Heading>
            There are a variety of charts available and new ones coming.
          </Box>
        </Flex>
        <Flex flexDirection="row" flexWrap='wrap' justifyContent="center" gap="8">
          <Box
            as="article"
            maxW="sm"
            fontSize="20"
            p="5"
            borderWidth="1px"
            rounded="md"
            textAlign="left"
            color="white"
            marginBottom="8"
          >
            <Heading textAlign="left" size="xl" my="3" color="purple.500">
            Quality <ArrowForwardIcon />
            </Heading>
            Every chart is meant to be exported in the highest quality SVG, PNG or PDF format.
          </Box>
          <Box
            as="article"
            maxW="sm"
            fontSize="20"
            p="5"
            borderWidth="1px"
            rounded="md"
            textAlign="left"
            color="white"
            marginBottom="8"
          >
            <Heading textAlign="left" size="xl" my="3" color="purple.500">
            Comfort <ArrowForwardIcon />
            </Heading>
            With a user-friendly editor, visualising your data is easier than ever.
          </Box>
        </Flex>
      </Box>
      {/* HOW TO USE */}
      <Flex flexDirection='column' bgColor="blackAlpha.900">
      <Box width="100%" backgroundColor='blackAlpha.900' paddingBottom="70px" textDecoration='underline'>
        <Heading
          size={['2xl', '3xl', '4xl']}
          color="purple.50"
          paddingTop="20"
          textDecoration="underline"
        >
          How To Use
        </Heading>
      </Box>
      <Box width="100%" bgColor="blackAlpha.900" paddingBottom="300px">
        <Flex flexDirection="row" flexWrap='wrap' justifyContent="center" gap="8">
          <Flex flexDirection="column">
            <Box
              as="article"
              maxW="sm"
              fontSize="20"
              p="5"
              borderWidth="1px"
              rounded="md"
              textAlign="left"
              color="white"
              
            >
              <Text
                color="purple.200"
                fontSize="3xl"
                paddingBottom="5"
                fontWeight="bold"
                textAlign="center"
              >
                1
              </Text>
              <Divider />
              <Heading textAlign="left" size="xl" my="3" color="purple.500">
                Ingest data <ArrowForwardIcon />
              </Heading>
              Depending on the chart, create required fields, then add as many
              rows as your inputs and insert data.
            </Box>
          </Flex>
          <Flex flexDirection="column">
            <Box
              as="article"
              maxW="sm"
              fontSize="20"
              p="5"
              borderWidth="1px"
              rounded="md"
              textAlign="left"
              color="white"
              
            >
              <Text
                color="purple.200"
                fontSize="3xl"
                paddingBottom="5"
                fontWeight="bold"
                textAlign="center"
              >
                2
              </Text>
              <Divider />
              <Heading textAlign="left" size="xl" my="3" color="purple.500">
                Customise <ArrowForwardIcon />
              </Heading>
              Every chart comes with its own set of customisations. Customise
              as much as you like.
            </Box>
          </Flex>
          <Flex flexDirection="column">
            <Box
              as="article"
              maxW="sm"
              fontSize="20"
              p="5"
              borderWidth="1px"
              rounded="md"
              textAlign="left"
              color="white"
              
            >
              <Text
                color="purple.200"
                fontSize="3xl"
                paddingBottom="5"
                fontWeight="bold"
                textAlign="center"
              >
                3
              </Text>
              <Divider />
              <Heading textAlign="left" size="xl" my="3" color="purple.500">
                Export <ArrowForwardIcon />
              </Heading>
              All the charts could be exported by choosing the format to export
              in. Enjoy data vizing.
            </Box>
          </Flex>
        </Flex>
      </Box>
      </Flex>
    </Flex>
  );
};

export default FeatureSec;
