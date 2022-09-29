import {
  Flex,
  Box,
  FormControl,
  Input,
  Button,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Tooltip,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

const LinechartData = ({
  createData,
  setData,
  finalData,
  setFinalData,
}) => {
  const removeData = () => {
    setData([
      {
        id: "japan",
        data: [
          {
            x: "plane",
            y: 76,
          },
          {
            x: "helicopter",
            y: 74,
          },
          {
            x: "boat",
            y: 164,
          },
          {
            x: "train",
            y: 3,
          },
          {
            x: "subway",
            y: 6,
          },
          {
            x: "bus",
            y: 55,
          },
          {
            x: "car",
            y: 232,
          },
          {
            x: "moto",
            y: 161,
          },
          {
            x: "bicycle",
            y: 119,
          },
          {
            x: "horse",
            y: 128,
          },
          {
            x: "skateboard",
            y: 12,
          },
          {
            x: "others",
            y: 247,
          },
        ],
      },
    ]);
    setFinalData({id: '', data: [{x: '', y: ''}]})
  };


  return (
    <>
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
                      border='3px solid purple'
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
                        label="This section is used for Ingesting Data...... 1-(ENTER FIELD NAME) 2-(ADD X AND Y CO_ORDINATES FOR SPECIFIC FIELD NAME) 3-(TO ADD MORE VALUES FOR A SPECIFIC FIELD USE ADD ROW BUTTON) 4-(TO ADD A NEW FIELD CLICK ON ADD LINE BUTTON) 5-(ENTER INSERT DATA BUTTON TO GET THE OUTPUT ON THE CHARTS)"
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
                                ? { ...singleData, id: e.target.value }
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
                                    X-axis Values
                                  </Text>
                                </Th>
                                <Th>
                                  <Text color="white" marginBottom="10px">
                                    Y-axis Values
                                  </Text>
                                </Th>
                              </Tr>
                            </Thead>
                            <Tbody>
                              {finalData
                                .find(
                                  (singleData, dIndex) => dIndex === parentIndex
                                )
                                .data.map((element, inputIndex) => (
                                  <Tr key={inputIndex}>
                                    <Td>
                                      <Input
                                        size="sm"
                                        onChange={(e) => {
                                          setFinalData(
                                            finalData.map(
                                              (singleData, inputChangeIndex) =>
                                                inputChangeIndex === parentIndex
                                                  ? {
                                                      ...singleData,
                                                      data: singleData.data.map(
                                                        (input, inputChangeIndexForX) => 
                                                          inputIndex === inputChangeIndexForX ?
                                                           {
                                                            ...input,
                                                            x: e.target.value,
                                                          } 
                                                          : {...input}
                                                      
                                                      ),
                                                    }
                                                  : { ...singleData }
                                            )
                                          );
                                        }}
                                      />
                                    </Td>
                                    <Td>
                                      <Input
                                        size="sm"
                                        onChange={(e) => {
                                          setFinalData(
                                            finalData.map(
                                              (singleData, d2Index) =>
                                                d2Index === parentIndex
                                                  ? {
                                                      ...singleData,
                                                      data: singleData.data.map(
                                                        (input, inputChangeIndexForY) => 
                                                          inputIndex === inputChangeIndexForY ?
                                                           {
                                                            ...input,
                                                            y: e.target.value,
                                                          } 
                                                          : {...input}
                                                      
                                                      ),
                                                    }
                                                  : { ...singleData }
                                            )
                                          );
                                          
                                        }}
                                      />
                                    </Td>
                                  </Tr>
                                ))}
                            </Tbody>
                          </Table>
                        </Flex>
                      </Flex>
                      <Button
                        marginTop="10px"
                        marginBottom="3rem"
                        variant="outline"
                        colorScheme="purple"
                        _hover={{
                          bgColor: "purple.500",
                          color: "white",
                          border: "1px solid purple",
                        }}
                        onClick={() => {
                          setFinalData(
                            finalData.map((singleData, nIndex) =>
                              nIndex === parentIndex
                                ? {
                                    ...singleData,
                                    data: [
                                      ...singleData.data,
                                      { x: "", y: "" },
                                    ],
                                  }
                                : singleData
                            )
                          );
                        }}
                      >
                        Add Row
                      </Button>
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
                  setFinalData([...finalData, { id: null, data: [{x: '', y: ''}] }]);
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
    </>
  );
};

export default LinechartData;
