import { Flex, Text, Tooltip, Checkbox, Box, Input, Select, option } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

const LineCustomisation = ({ setValue, setBooleanValue }) => {
  return (
    // Customisation Tab
    <>
    {/* Section 1 Curve Type */}
    <Flex
      width="65%"
      flexDirection="row"
      justifyContent="space-around"
      flexWrap="wrap"
      border="2px solid red"
    >
      <Flex width="65%" border="2px solid orange">
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          width="100%"
          border="2px solid yellow"
        >
          <Flex
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
            gap="1.5rem"
            width="70%"
            border="2px solid green"
          >
            <Text fontSize={["sm", "md", "lg"]} paddingBottom="10px">
              Curve Type
            </Text>
          </Flex>
          <Flex
            direction="row"
            flexWrap="wrap"
            marginBottom="1.5rem"
            border="2px solid brown"
          >
            {/* Dropdown for Curve type */}
            <Select color='gray' placeholder="Select prefered curve type" onChange={(e) => setValue('curve', e)}>
              <option value='basis'>Basis</option>
              <option value='cardinal'>Cardinal</option>
              <option value='catmullRom'>Catmull-Rom</option>
              <option value='linear'>Linear</option>
              <option value='monotoneX'>monotoneX</option>
              <option value='monotoneY'>monotoneY</option>
              <option value='natural'>Natural</option>
              <option value='step'>Step</option>
              <option value='stepAfter'>Step-After</option>
              <option value='stepBefore'>Step-Before</option>
            </Select>
            {/* End of Dropdown for Curve type */}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
    {/* End of Section 1 Curve Type */}
    {/* Section 2 Colors */}
    <Flex
      width="65%"
      flexDirection="row"
      justifyContent="space-around"
      flexWrap="wrap"
      border="2px solid red"
    >
      <Flex width="65%" border="2px solid orange">
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          width="100%"
          border="2px solid yellow"
        >
          <Flex
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
            gap="1.5rem"
            width="70%"
            border="2px solid green"
          >
            <Text fontSize={["sm", "md", "lg"]} paddingBottom="10px">
              Colors
            </Text>
          </Flex>
          <Flex
            direction="row"
            flexWrap="wrap"
            marginBottom="1.5rem"
            border="2px solid brown"
          >
            {/* Dropdown for Curve type */}
            <Select color='gray' placeholder="Select prefered curve type" onChange={(e) => setValue('colors', e)}>
              <option value='nivo'>Nivo</option>
              <option value='category10'>category10</option>
              <option value='accent'>Accent</option>
              <option value='dark2'>Dark-2</option>
              <option value='paired'>Paired</option>
              <option value='pastel1'>Pastel-1</option>
              <option value='pastel2'>pastel-2</option>
              <option value='set1'>Set-1</option>
              <option value='set2'>Set-2</option>
              <option value='set3'>Set-3</option>
              <option value='pink_yellowGreen'>Pink &#x2192; YellowGreen</option> 
              <option value='red_yellow_blue'>Red &#x2192; Yellow &#x2192; Blue</option>
              <option value='red_yellow_green'>Red &#x2192; Yellow &#x2192; Green</option>
              <option value='spectral'>Spectral</option>
            </Select>
            {/* End of Dropdown for Curve type */}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
    {/* End of Section 2 Colors */}
    </>
    // End of Customisation Tab
  );
};

export default LineCustomisation;
