import {
  Text,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import FunnelCustomisation from "./funnelchart-CustomisationTab";

const FunnelChartFunctions = ({ setValue, setBooleanValue, dyValues }) => {
  return (
    <Box width="100%" bgColor="blackAlpha.900">
      <Box width="100%" paddingBottom="20px" bgColor="blackAlpha.900"></Box>
      <Tabs isFitted
        mx='8'
        variant="enclosed"
        color="white"
        bgColor="blackAlpha.900"
        isLazy>
        <TabList>
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
            <p>one!</p>
          </TabPanel>
          <TabPanel bgColor="#140936" borderBottomRadius="8px">
            <FunnelCustomisation setValue={setValue} setBooleanValue={setBooleanValue} />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Box width="100%" bgColor="blackAlpha.900" paddingBottom="100px"></Box>
    </Box>
  );
};

export default FunnelChartFunctions;
