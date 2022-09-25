import { useState } from "react";
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
} from "@chakra-ui/react";

const LinechartData = ({ fieldNames, setFieldNames, fieldData, setFieldData, createData  }) => {
    return(
        <>
      <Box bgColor="#140936" width="100%" height="3rem"></Box>
      <Flex width='39%' marginLeft='4rem' flexDir='column' gap='10'>
      <Flex
        width="100%"
        justifyContent="space-between"
        
      >
        <Flex
          width="100%"
          justifyContent="center"
        >
          <FormControl>
            {fieldNames.map((field, parentIndex) => {
              return (
                <Flex
                  key={parentIndex}
                  width="100%"
                  
                  padding='15px'
                  flexDirection="column"
                  alignItems="flex-start"
                  marginBottom="5"
                  flexWrap="wrap" 
                  gap="1"
                >
                  <Flex marginBottom='2' width="100%" flexDir="column">
                    <Text borderRadius='5px' paddingLeft='10px' fontSize="xl">Line {parentIndex + 1}</Text>
                  </Flex>
                  <Flex
                    width="100%"
                    justifyContent="space-between"
                    flexWrap="wrap"
                    gap="6"
                  >
                    <Input
                      width="700px"
                      placeholder="Field Name"
                      onChange={(e) => {
                        setFieldNames(
                          fieldNames.map((name, nIndex) =>
                            nIndex === parentIndex
                              ? (name = e.target.value)
                              : name
                          )
                        );
                      }}
                    />
                    <Flex
                      width="700px"
                      flexDir="column"
                      gap="5"
                    >
                      <Flex gap="10">
                        <Table variant='simple' size="sm">
                          <Thead>
                            <Tr>
                              <Th><Text color='white' marginBottom='10px'>X co-ordinates</Text></Th>
                              <Th><Text color='white' marginBottom='10px'>Y co-ordinates</Text></Th>
                            </Tr>
                          </Thead>
                          <Tbody>
                            {fieldData
                              .filter(
                                (input) => input.currentField === parentIndex
                              )
                              .map((el) => {
                                return (
                                  <Tr key={el.rowNo}>
                                    <Td>
                                      <Input
                                        size="sm"
                                        onChange={(e) => {
                                          setFieldData((fieldData) =>
                                            fieldData.map((input) =>
                                              input.currentField ===
                                                parentIndex &&
                                              input.rowNo === el.rowNo
                                                ? {
                                                    ...input,
                                                    x: e.target.value,
                                                  }
                                                : { ...input }
                                            )
                                          );
                                        }}
                                      />
                                    </Td>
                                    <Td>
                                      <Input
                                        size="sm"
                                        onChange={(e) => {
                                          setFieldData((fieldData) =>
                                            fieldData.map((input) =>
                                              input.currentField ===
                                                parentIndex &&
                                              input.rowNo === el.rowNo
                                                ? {
                                                    ...input,
                                                    y: e.target.value,
                                                  }
                                                : { ...input }
                                            )
                                          );
                                        }}
                                      />
                                    </Td>
                                  </Tr>
                                );
                              })}
                          </Tbody>
                        </Table>
                      </Flex>
                      <Button
                      marginTop='20px'
                      marginBottom='3rem'
                        variant="outline"
                        colorScheme="purple"
                        _hover={{bgColor: 'purple.500', color: 'white', border: '1px solid purple'}}
                        onClick={() => {
                          setFieldData([
                            ...fieldData,
                            {
                              x: null,
                              y: null,
                              currentField: parentIndex,
                              rowNo: fieldData.filter(
                                (data) => data.currentField === parentIndex
                              ).length,
                            },
                          ]);
                        }}
                      >
                        Add Row
                      </Button>
                    </Flex>
                  </Flex>
                </Flex>
              );
            })}
            <Button

              width="200px"
              variant="outline"
              colorScheme="purple"
              _hover={{bgColor: 'purple.500', color: 'white', border: '1px solid purple'}}
              onClick={() => {
                setFieldNames([...fieldNames, ""]);
              }}
            >
              Add Line
            </Button>
          </FormControl>
        </Flex>
      </Flex>
      <Button
      width='80%'
            my="1em"
            colorScheme="purple"
            variant="solid"
            onClick={createData}
            isFullWidth
          >
            Insert Data
          </Button>
      </Flex>
    </>
    )

}

export default LinechartData;

