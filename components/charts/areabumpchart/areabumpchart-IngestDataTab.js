import {
  Text,
  Box,
  Flex,
  FormControl,
  Tooltip,
  Input,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button,
  Highlight,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

const BumpChartData = ({ createData, finalData, setFinalData, setData }) => {
  
  const removeData = () => {
    setData([
      {
        id: "JavaScript",
        data: [
          {
            x: 2000,
            y: 17,
          },
          {
            x: 2001,
            y: 15,
          },
          {
            x: 2002,
            y: 18,
          },
          {
            x: 2003,
            y: 24,
          },
          {
            x: 2004,
            y: 25,
          },
          {
            x: 2005,
            y: 16,
          },
        ],
      },
      {
        id: "ReasonML",
        data: [
          {
            x: 2000,
            y: 25,
          },
          {
            x: 2001,
            y: 21,
          },
          {
            x: 2002,
            y: 18,
          },
          {
            x: 2003,
            y: 12,
          },
          {
            x: 2004,
            y: 17,
          },
          {
            x: 2005,
            y: 22,
          },
        ],
      },
    ]);
    setFinalData([{ id: "", data: [{ x: null, y: null }]}])
  };


  return (
    <>
      <Box bgColor="#140936" width="100%" height="3rem"></Box>
      <Flex width="39%" marginLeft="4rem" flexDir="column" gap="70px">
      <Text fontSize={["sm", "md", "lg", "xl"]}><Highlight query='NOTE' styles={{ px: '2', py: '1', bg: 'red' , color:'white', borderRadius: '7px' }}>NOTE :</Highlight>   Use Areabump chart only if the X and Y Co-ordinates are <b>numbers</b>, Otherwise use Bump chart</Text>
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
                          );
                        }}
                      />
                      <Flex width="700px" flexDir="column" gap="5">
                        <Flex gap="10">
                          <Table marginBottom="10px" variant="simple" size="sm">
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
                                                        (
                                                          input,
                                                          inputChangeIndexForX
                                                        ) =>
                                                          inputIndex ===
                                                          inputChangeIndexForX
                                                            ? {
                                                                ...input,
                                                                x: Number(e.target
                                                                    .value),
                                                              }
                                                            : { ...input }
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
                                                        (
                                                          input,
                                                          inputChangeIndexForY
                                                        ) =>
                                                          inputIndex ===
                                                          inputChangeIndexForY
                                                            ? {
                                                                ...input,
                                                                y: Number(e.target
                                                                    .value),
                                                              }
                                                            : { ...input }
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
                                      { x: null, y: null },
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
                  setFinalData([
                    ...finalData,
                    { id: null, data: [{ x: null, y: null }] },
                  ]);
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
          >
            Insert Data
          </Button>
          <Button
            width="100%"
            my="1em"
            colorScheme="red"
            variant="solid"
            onClick={removeData}
          >
            Remove Data
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default BumpChartData;
