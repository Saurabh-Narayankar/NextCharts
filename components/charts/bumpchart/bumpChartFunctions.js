import { Text, Box, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import BumpChartData from "./bumpChart-ingestDataTab";

const BumpChartFunctions = ({ setValue, setBooleanValue, createData, finalData, setFinalData, setData }) => {
    return(
        <Box width="100%" bgColor="blackAlpha.900">
        {/* empty box for styling and spacing between CHART and CUSTOMIZATIONS */}
        <Box width="100%" paddingBottom="20px" bgColor="blackAlpha.900"></Box>
        {/*  END of empty box for styling and spacing between CHART and CUSTOMIZATIONS */}
        {/* Tabs for Data Injest, Grid and Axis and Customisation */}
        <Tabs
          isFitted
          mx='8'
          variant='enclosed-colored'
          color="white"
          bgColor="blackAlpha.900"
        >
          <TabList border='2px solid #593AA5'>
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
              <BumpChartData createData={createData} finalData={finalData} setFinalData={setFinalData} setData={setData} />
            </TabPanel>
            {/* End of TabList for Ingest Data */}
  
            {/* TabList for Grid and Axes */}
            <TabPanel bgColor="#140936" borderBottomRadius="8px">           
                <p>two</p>                       
            </TabPanel>
            {/* End of TabList for Grid and Axes */}
  
            {/* TabList for Customisation */}
            <TabPanel bgColor="#140936" borderBottomRadius="8px">
                <p>three</p>
            </TabPanel>
            {/* End of TabList for Customisation */}
          </TabPanels>
        </Tabs>
        {/* End of Tabs for Data Injest, Grid and Axis and Customisation */}
        <Box width="100%" bgColor="blackAlpha.900" paddingBottom="100px"></Box>
      </Box>
    )
}

export default BumpChartFunctions;