import {
  Flex,
  Text,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  FormControl,
  FormLabel,
  Input,
  Tooltip,
  Checkbox,
  CheckboxGroup,
  Stack,
  Tabs,
  TabList,
  Tab,TabPanels,
  TabPanel,

} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { ResponsiveLine } from "@nivo/line";

const LineChartFunctions = ({ setValue, setDyValues, setBooleanValue }) => {
  return (
    <Box width="100%" bgColor="blackAlpha.900">
      {/* empty box for styling and spacing between CHART and CUSTOMIZATIONS */}
      <Box width="100%" paddingBottom="35px" bgColor="blackAlpha.900"></Box>
      {/*  END of empty box for styling and spacing between CHART and CUSTOMIZATIONS */}
      {/* Tabs for Data Injest, Grid and Axis and Customisation */}
      <Tabs isFitted variant='enclosed' color='white' bgColor='blackAlpha.900' isLazy>
        <TabList mx='8' >
          <Tab bgColor='#09021E' _selected={{bgGradient: 'linear(to-b, purple.900, #140936)'}}><Text fontSize={["sm","md", "lg", "xl"]}>Ingest Data</Text></Tab>
          <Tab bgColor='#09021E' _selected={{bgGradient: 'linear(to-b, purple.900, #140936)'}}><Text fontSize={["sm","md", "lg", "xl"]}>Grid and Axis</Text></Tab>
          <Tab bgColor='#09021E' _selected={{bgGradient: 'linear(to-b, purple.900, #140936)'}}><Text fontSize={["sm","md", "lg", "xl"]}>Customisation</Text></Tab>
        </TabList>
        {/* TabList for Ingest Data */}
        <TabPanels>
          {/* initially mounted */}
          <TabPanel bgColor= '#140936' borderBottomRadius='8px' mx='8' >
            <p>one!</p>
          </TabPanel>
          {/* initially not mounted */}
          <TabPanel bgColor= '#140936' borderBottomRadius='8px' mx='8'>
          <Flex
          width="60%"
          paddingTop="2rem"
          flexDirection="row"
          justifyContent="space-around"
          flexWrap="wrap"
        >
          <Flex>
            <Flex flexDirection="column" paddingRight='20px'>
              <Flex
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Text fontSize={["sm","md", "lg", "xl"]} paddingBottom="15px">
                  Name for X-axis
                </Text>
                <Tooltip
                  hasArrow
                  fontSize="md"
                  placement="auto"
                  label="Enter the name that you want to use as label for X axis"
                  bg="white"
                  color="black"
                >
                  <InfoIcon />
                </Tooltip>
              </Flex>
              <Input
                type="text"
                fontSize="lg"
                variant="filled"
                placeholder="Name along X axis"
                marginBottom="2rem"
                marginRight='20px'
                onChange={(e) => setValue("legendXAxis", e)}
              />
            </Flex>
          </Flex>
          <Flex>
            <Flex>
              <Flex flexDirection="column" paddingRight='20px'>
                <Flex
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Text fontSize={["sm","md", "lg", "xl"]} paddingBottom="15px">
                    Name for Y-axis
                  </Text>
                  <Tooltip
                    hasArrow
                    fontSize="md"
                    placement="auto"
                    label="Enter the name that you want to use as label for Y axis"
                    bg="white"
                    color="black"
                  >
                    <InfoIcon />
                  </Tooltip>
                </Flex>
                <Input
                  type="text"
                  fontSize="lg"
                  variant="filled"
                  placeholder="Name along Y axis"
                  marginBottom="4rem"
                  marginRight='20px'
                  onChange={(e) => setValue("legendYAxis", e)}
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          width="60%"
          flexDirection="row"
          justifyContent="space-around"
          flexWrap="wrap"
        >
          <Flex>
            <Flex flexDirection="column" marginRight='20px' paddingRight='20px'>
              <Flex
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Text fontSize={["sm","md", "lg", "xl"]} paddingBottom="15px">
                  GRID
                </Text>
                <Tooltip
                  hasArrow
                  fontSize="md"
                  placement="auto"
                  label="Toggle On and Off the grid along X & Y Grid"
                  bg="white"
                  color="black"
                >
                  <InfoIcon />
                </Tooltip>
              </Flex>
              <Flex gap={12} direction="row" flexWrap="wrap" marginBottom="2rem">
                <Checkbox
                  colorScheme="purple"
                  size="lg"
                  defaultChecked
                  onChange={() => setBooleanValue("gridX")}
                >
                  <Text fontSize={["sm","md", "lg"]}>X-grid</Text>
                </Checkbox>
                <Checkbox
                  colorScheme="purple"
                  size="lg"
                  defaultChecked
                  onChange={() => setBooleanValue("gridY")}
                >
                  <Text fontSize={["sm","md", "lg"]}>Y-grid</Text>
                </Checkbox>
              </Flex>
            </Flex>
          </Flex>
          <Flex>
            <Flex>
              <Flex flexDirection="column" marginRight='20px' paddingRight='20px'>
                <Flex
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Text fontSize={["sm","md", "lg", "xl"]} paddingBottom="15px">
                    AXIS
                  </Text>
                  <Tooltip
                    hasArrow
                    fontSize="md"
                    placement="auto"
                    label="Toggle On and Off the X & Y Axis"
                    bg="white"
                    color="black"
                  >
                    <InfoIcon />
                  </Tooltip>
                </Flex>
                <Flex gap={12} direction="row" flexWrap="wrap" marginBottom="4rem">
                  <Checkbox
                    colorScheme="purple"
                    size="lg"
                    defaultChecked
                    onChange={() => setBooleanValue("axisBottom")}
                  >
                    <Text fontSize={["sm","md", "lg"]}>X-axis</Text>
                  </Checkbox>
                  <Checkbox
                    colorScheme="purple"
                    size="lg"
                    defaultChecked
                    onChange={() => setBooleanValue("axisLeft")}
                  >
                    <Text fontSize={["sm","md", "lg"]}>Y-axis</Text>
                  </Checkbox>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
          </TabPanel>
          <TabPanel bgColor= '#140936' borderBottomRadius='8px' mx='8'>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Box width="100%" bgColor="blackAlpha.900" paddingBottom="100px"></Box>
    </Box>
  );
};

export default LineChartFunctions;