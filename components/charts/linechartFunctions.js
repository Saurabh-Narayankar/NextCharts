import { useState } from "react";
import {
  Flex,
  Text,
  Box,
  Input,
  Tooltip,
  Checkbox,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import SliderComp from "../customisation-Components/slider";
import GridAndAxesComp from "../customisation-Components/grid-&-axes";

const LineChartFunctions = ({ setValue, setBooleanValue }) => {

  return (
    <Box width="100%" bgColor="blackAlpha.900">
      {/* empty box for styling and spacing between CHART and CUSTOMIZATIONS */}
      <Box width="100%" paddingBottom="20px" bgColor="blackAlpha.900"></Box>
      {/*  END of empty box for styling and spacing between CHART and CUSTOMIZATIONS */}
      {/* Tabs for Data Injest, Grid and Axis and Customisation */}
      <Tabs
        isFitted
        mx='8'
        variant="enclosed"
        color="white"
        bgColor="blackAlpha.900"
        isLazy
      >
        <TabList>
          <Tab
            bgColor="#09021E"
            _selected={{ bgGradient: "linear(to-b, purple.900, #140936)" }}
          >
            <Text fontSize={["xs", "sm", "md", "lg", "xl"]}>Ingest Data</Text>
          </Tab>
          <Tab
            bgColor="#09021E"
            _selected={{ bgGradient: "linear(to-b, purple.900, #140936)" }}
          >
            <Text fontSize={["xs", "sm", "md", "lg", "xl"]}>Grid and Axes</Text>
          </Tab>
          <Tab
            bgColor="#09021E"
            _selected={{ bgGradient: "linear(to-b, purple.900, #140936)" }}
          >
            <Text fontSize={["xs", "sm", "md", "lg", "xl"]}>Customisation</Text>
          </Tab>
        </TabList>
        {/* TabList for Ingest Data */}
        <TabPanels>
          {/* initially mounted */}
          <TabPanel bgColor="#140936" borderBottomRadius="8px">
            <p>one!</p>
          </TabPanel>
          {/* initially not mounted */}
          <TabPanel bgColor="#140936" borderBottomRadius="8px">
            {/* Grid and Axes Tab */}
            <GridAndAxesComp  setValue={setValue} setBooleanValue={setBooleanValue} />                       
          </TabPanel>
          <TabPanel bgColor="#140936" borderBottomRadius="8px">
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Box width="100%" bgColor="blackAlpha.900" paddingBottom="100px"></Box>
    </Box>
  );
};

export default LineChartFunctions;
