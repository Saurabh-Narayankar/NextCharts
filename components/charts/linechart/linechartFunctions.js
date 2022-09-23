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
import SliderComp from "../../customisation-Components/slider";
import GridAndAxesComp from "../../customisation-Components/Grid&Axes-tab";
import LineCustomisation from "./line-customisation";

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
        
        <TabPanels>
          {/* TabList for Ingest Data */}
          <TabPanel bgColor="#140936" borderBottomRadius="8px">
            <p>one!</p>
          </TabPanel>
          {/* End of TabList for Ingest Data */}

          {/* TabList for Grid and Axes */}
          <TabPanel bgColor="#140936" borderBottomRadius="8px">           
            <GridAndAxesComp  setValue={setValue} setBooleanValue={setBooleanValue} />                         
          </TabPanel>
          {/* End of TabList for Grid and Axes */}

          {/* TabList for Customisation */}
          <TabPanel bgColor="#140936" borderBottomRadius="8px">
            <LineCustomisation setValue={setValue} setBooleanValue={setBooleanValue} />
          </TabPanel>
          {/* End of TabList for Customisation */}
        </TabPanels>
      </Tabs>
      <Box width="100%" bgColor="blackAlpha.900" paddingBottom="100px"></Box>
    </Box>
  );
};

export default LineChartFunctions;
