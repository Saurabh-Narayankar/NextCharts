import {
  Text,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  FormControl,
  Input,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Tooltip,
} from "@chakra-ui/react";
import FunnelCustomisation from "./funnelchart-CustomisationTab";
import { InfoIcon } from '@chakra-ui/icons'
 



const FunnelChartFunctions = ({ setValue, setData, createData, finalData, setFinalData }) => {

  const removeData = () => {
    setData([
      {
        id: "Sent",
        value: 82788,
        label: "Sent",
      },
      {
        id: "Viewed",
        value: 61435,
        label: "Viewed",
      },
      {
        id: "Clicked",
        value: 41611,
        label: "Clicked",
      },
      {
        id: "Add To Card",
        value: 30672,
        label: "Add To Card",
      },
      {
        id: "Purchased",
        value: 19078,
        label: "Purchased",
      },
    ]);
    setFinalData([{id: '', value: '', label: ''}])
  };

  console.log(finalData)

  return (
    <Box width="100%" bgColor="blackAlpha.900">
      <Box width="100%" paddingBottom="20px" bgColor="blackAlpha.900"></Box>
      <Tabs isFitted
        mx='8'
        variant="enclosed-colored"
        color="white"
        bgColor="blackAlpha.900">
        <TabList border='2px solid #593AA5'>
          <Tab bgColor="#09021E"
            _selected={{ bgGradient: "linear(to-b, purple.900, #140936)" }}>
                <Text fontSize={["xs", "sm", "md", "lg", "xl"]}>Ingest Data</Text>
          </Tab>
          <Tab bgColor="#09021E"
            _selected={{ bgGradient: "linear(to-b, purple.900, #140936)" }}>
                <Text fontSize={["xs", "sm", "md", "lg", "xl"]}>Customisation</Text>
          </Tab>
        </TabList>
        <TabPanels>



          <TabPanel bgColor="#140936" borderBottomRadius="8px">
            <Box bgColor="#140936" width="100%" height="3rem"></Box>
      <Flex width="39%" marginLeft="4rem" flexDir="column" gap="70px">
        <Flex width="100%" justifyContent="space-between">
          <Flex width="100%" justifyContent="center">
            <FormControl>
              {finalData.map((field, parentIndex) => {
                return (
                  <Flex
                    key={parentIndex}
                    width="100%"
                    flexDirection="column"
                    alignItems="flex-start"
                    marginBottom="7"
                    flexWrap="wrap"
                    gap="1"
                  >
                    <Flex
                      width="100%"
                      flexDir="row"
                      justifyContent="space-between"
                      alignItems="center"
                      gap="1.5rem"
                      px="20px"
                      borderRadius="5px"
                      bgColor="purple.500"
                    >
                      <Text fontSize={["sm", "md", "lg", "xl"]}>
                        Line {parentIndex + 1}
                      </Text>
                      <Tooltip
                        hasArrow
                        fontSize="md"
                        placement="auto"
                        label="This section is used for Ingesting Data...... 1-(ENTER FIELD NAME) 2-(ADD THE VALUE FOR SPECIFIC FIELD NAME) 3-(TO ADD A NEW FIELD CLICK ON ADD LINE BUTTON) 4-(ENTER INSERT DATA BUTTON TO GET THE OUTPUT ON THE CHARTS)"
                        bg="white"
                        color="black"
                      >
                        <InfoIcon />
                      </Tooltip>
                    </Flex>
                    <Flex
                      width="100%"
                      justifyContent="center"
                      borderY="3px solid white"
                      paddingTop="3"
                      marginBottom="4"
                      flexWrap="wrap"
                      gap="6"
                    >
                      <Input
                        width="700px"
                        placeholder="Field Name"
                        onChange={(e) => {
                          setFinalData(
                            finalData.map((singleData, nIndex) =>
                              nIndex === parentIndex
                                ? { ...singleData, id: e.target.value , label: e.target.value }
                                : singleData
                            )
                          )
                        }}
                      />
                      <Flex width="700px" flexDir="column" gap="5">
                        <Flex gap="10">
                          <Table marginBottom='10px' variant="simple" size="sm">
                            <Thead>
                              <Tr>
                                <Th>
                                  <Text color="white" marginBottom="10px">
                                    Value
                                  </Text>
                                </Th>
                              </Tr>
                            </Thead>
                            <Tbody>
                              <Tr key={parentIndex}>
                                <Td>
                                  <Input
                                    size="sm"
                                    onChange={(e) => {finalData.find((singleData, dIndex) => parentIndex === dIndex).value = e.target.value
                                  }}
                                  />
                                </Td>
                              </Tr>
                            </Tbody>
                          </Table>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                  
                );
              })}
              <Button
                width="100%"
                variant="outline"
                colorScheme="purple"
                _hover={{
                  bgColor: "purple.500",
                  color: "white",
                  border: "1px solid purple",
                }}
                onClick={() => {
                  setFinalData([...finalData, {id: '', value: '', label: ''}]);
                }}
              >
                Add Line
              </Button>
            </FormControl>
          </Flex>
        </Flex>
        <Flex width="100%" flexDir="column">
          <Button
            width="100%"
            my="1em"
            colorScheme="purple"
            variant="solid"
            onClick={createData}
            isFullWidth
          >
            Insert Data
          </Button>
          <Button
            width="100%"
            my="1em"
            colorScheme="red"
            variant="solid"
            onClick={removeData}
            isFullWidth
          >
            Remove Data
          </Button>
        </Flex>
      </Flex>
          </TabPanel>



          <TabPanel bgColor="#140936" borderBottomRadius="8px">
            <FunnelCustomisation setValue={setValue} />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Box width="100%" bgColor="blackAlpha.900" paddingBottom="100px"></Box>
    </Box>
  );
};

export default FunnelChartFunctions;