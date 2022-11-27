import { useState } from "react";
import {
  Text,
  Box,
  Flex,
  Tooltip,
  Select,
  Checkbox,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

import SliderComp from "../../customisation-Components/slider";
import SliderWithStepComp from "../../customisation-Components/sliderWithStepComp";

const PieCustomisation = ({setValue, setBooleanValue}) => {

    const [sliderValuecRadius, setSliderValuecRadius] = useState(0);
    const [showTooltipcRadius, setShowTooltipcRadius] = useState(false);
    const [sliderValuearcLabelLen, setSliderValuearcLabelLen] = useState(16);
    const [showTooltiparcLabelLen, setShowTooltiparcLabelLen] = useState(false);
    const [sliderValueInnerRadius, setSliderValueInnerRadius] = useState(0.6);
    const [showTooltipInnerRadius, setShowTooltipInnerRadius] = useState(false);
    const [sliderValuearcLabelStrLen, setSliderValuearcLabelStrLen] = useState(24);
    const [showTooltiparcLabelStrLen, setShowTooltiparcLabelStrLen] = useState(false);
    const [sliderValueBorderWidth, setSliderValueBorderWidth] = useState(6);
    const [showTooltipBorderWidth, setShowTooltipBorderWidth] = useState(false);

    return (
        <>
      <Box bgColor="#140936" width="100%" height="3rem"></Box>

      <Flex
        width="40%"
        flexDirection="row"
        justifyContent="space-between"
        flexWrap="wrap"
        marginX="4rem"
        marginBottom="1.5rem"
      >
        <Flex width="100%">
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            width="100%"
          >
            <Flex
              flexDirection="row"
              justifyContent="flex-start"
              alignItems="center"
              gap="1.5rem"
              width="70%"
              paddingBottom="10px"
            >
              <Text
                borderRadius="5px"
                paddingX="20px"
                bgColor="purple.500"
                fontSize={["sm", "md", "lg"]}
              >
                Colors
              </Text>
              <Tooltip
                hasArrow
                fontSize="md"
                placement="auto"
                label="Change the colors"
                bg="white"
                color="black"
              >
                <InfoIcon />
              </Tooltip>
            </Flex>
            <Flex direction="row" flexWrap="wrap" marginBottom="1rem">
              <Select
                color="gray"
                onChange={(e) => setValue("colors", e)}
              >
                <option value="nivo">Nivo</option>
                <option value="category10">category10</option>
                <option value="accent">Accent</option>
                <option value="dark2">Dark-2</option>
                <option value="paired">Paired</option>
                <option value="pastel1">Pastel-1</option>
                <option value="pastel2">pastel-2</option>
                <option value="set1">Set-1</option>
                <option value="set2">Set-2</option>
                <option value="set3">Set-3</option>
                <option value="pink_yellowGreen">
                  Pink &#x2192; YellowGreen
                </option>
                <option value="red_yellow_blue">
                  Red &#x2192; Yellow &#x2192; Blue
                </option>
                <option value="red_yellow_green">
                  Red &#x2192; Yellow &#x2192; Green
                </option>
                <option value="spectral">Spectral</option>
              </Select>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <SliderComp
        title="Corner Radius"
        sliderDefaultVal={0}
        sliderMinVal={0}
        sliderMaxVal={45}
        setValueFor="cRadius"
        setSliderValue={setSliderValuecRadius}
        sliderValue={sliderValuecRadius}
        setShowTooltip={setShowTooltipcRadius}
        showTooltip={showTooltipcRadius}
        toolTipLabel="Change corner radius"
        setValue={setValue}
      />
      <SliderWithStepComp
        title="Inner Radius"
        sliderDefaultVal={0.6}
        sliderMinVal={0}
        sliderMaxVal={1}
        sliderStepval={0.05}
        setValueFor="innerRadius"
        setSliderValue={setSliderValueInnerRadius}
        sliderValue={sliderValueInnerRadius}
        setShowTooltip={setShowTooltipInnerRadius}
        showTooltip={showTooltipInnerRadius}
        toolTipLabel="Change inner radius of the pie chart"
        setValue={setValue}
      />
      <SliderComp
        title="Arc-Link-Label Diagonal Length"
        sliderDefaultVal={16}
        sliderMinVal={0}
        sliderMaxVal={36}
        setValueFor="arcLabelLen"
        setSliderValue={setSliderValuearcLabelLen}
        sliderValue={sliderValuearcLabelLen}
        setShowTooltip={setShowTooltiparcLabelLen}
        showTooltip={showTooltiparcLabelLen}
        toolTipLabel="Change the diagonal length of the arc link label"
        setValue={setValue}
      />
      <SliderComp
        title="Arc-Link-Label Straight Length"
        sliderDefaultVal={24}
        sliderMinVal={0}
        sliderMaxVal={36}
        setValueFor="arcLabelStrLen"
        setSliderValue={setSliderValuearcLabelStrLen}
        sliderValue={sliderValuearcLabelStrLen}
        setShowTooltip={setShowTooltiparcLabelStrLen}
        showTooltip={showTooltiparcLabelStrLen}
        toolTipLabel="Change the straight length of the arc link label"
        setValue={setValue}
      />
      <SliderComp
        title="Border Width"
        sliderDefaultVal={0}
        sliderMinVal={0}
        sliderMaxVal={20}
        setValueFor="borderWidth"
        setSliderValue={setSliderValueBorderWidth}
        sliderValue={sliderValueBorderWidth}
        setShowTooltip={setShowTooltipBorderWidth}
        showTooltip={showTooltipBorderWidth}
        toolTipLabel="Change the border width"
        setValue={setValue}
      />
      <Flex
        width="40%"
        flexDirection="row"
        justifyContent="space-between"
        flexWrap="wrap"
        marginX="4rem"
        marginBottom="1.5rem"
        marginTop='1rem'
        
      >
        <Flex>
        <Flex flexDirection="column" paddingRight="20px">
              <Flex
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="center"
                gap="1.5rem"
                paddingBottom="10px"
              >
                <Text borderRadius='5px' paddingX='20px' bgColor='purple.500' fontSize={["sm", "md", "lg"]}>Sort by Value</Text>
                <Tooltip
                  hasArrow
                  fontSize="md"
                  placement="auto"
                  label="Toggle for sorting the data on pie chart by value"
                  bg="white"
                  color="black"
                >
                  <InfoIcon />
                </Tooltip>
              </Flex>
              <Flex gap={8} direction="column" flexWrap="wrap" marginBottom="3rem">
                <Checkbox
                  colorScheme="purple"
                  size="lg"
                  onChange={() => setBooleanValue("sortByValue")}
                >
                <Text fontSize={["sm", "md", "lg"]}>sort by value</Text>
                </Checkbox>
              </Flex>
            </Flex>
        </Flex>
        <Flex>
        <Flex flexDirection="column" paddingRight="20px">
              <Flex
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="center"
                gap="1.5rem"
                paddingBottom="10px"
              >
                <Text borderRadius='5px' paddingX='20px' bgColor='purple.500' fontSize={["sm", "md", "lg"]}>Enable Arc Labels</Text>
                <Tooltip
                  hasArrow
                  fontSize="md"
                  placement="auto"
                  label="Toggle for enabling arc labels"
                  bg="white"
                  color="black"
                >
                  <InfoIcon />
                </Tooltip>
              </Flex>
              <Flex gap={8} direction="column" flexWrap="wrap" marginBottom="3rem">
                <Checkbox
                  colorScheme="purple"
                  size="lg"
                  onChange={() => setBooleanValue("arcLabels")}
                >
                <Text fontSize={["sm", "md", "lg"]}>enable arc labels</Text>
                </Checkbox>
              </Flex>
            </Flex>
        </Flex>
      </Flex>
    </>
    )
}

export default PieCustomisation