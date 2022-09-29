import { useState } from "react";
import {
  Text,
  Box,
  Flex,
  Tooltip,
  Select,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

import SliderComp from "../../customisation-Components/slider";
import SliderWithStepComp from "../../customisation-Components/sliderWithStepComp";

const FunnelCustomisation = ({ setValue, setDyValues }) => {

  const [sliderValueSpacing, setSliderValueSpacing] = useState(0);
  const [showTooltipSpacing, setShowTooltipSpacing] = useState(false);
  const [sliderValueShapeBlending, setSliderValueShapeBlending] = useState(0.66);
  const [showTooltipShapeBlending, setShowTooltipShapeBlending] = useState(false);
  const [sliderValueOpacity, setSliderValueOpacity] = useState(1);
  const [showTooltipOpacity, setShowTooltipOpacity] = useState(false);
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
        title="Spacing"
        sliderDefaultVal={0}
        sliderMinVal={0}
        sliderMaxVal={30}
        setValueFor="spacing"
        setSliderValue={setSliderValueSpacing}
        sliderValue={sliderValueSpacing}
        setShowTooltip={setShowTooltipSpacing}
        showTooltip={showTooltipSpacing}
        toolTipLabel="Change spacing"
        setValue={setValue}
      />
      <SliderWithStepComp
        title="Shape Blend"
        sliderDefaultVal={0.66}
        sliderMinVal={0}
        sliderMaxVal={1}
        sliderStepval={0.01}
        setValueFor="shape"
        setSliderValue={setSliderValueShapeBlending}
        sliderValue={sliderValueShapeBlending}
        setShowTooltip={setShowTooltipShapeBlending}
        showTooltip={showTooltipShapeBlending}
        toolTipLabel="Change the smoothness of curve for each value in chart"
        setValue={setValue}
      />
      <SliderWithStepComp
        title="Opacity"
        sliderDefaultVal={1}
        sliderMinVal={0}
        sliderMaxVal={1}
        sliderStepval={0.01}
        setValueFor="opacity"
        setSliderValue={setSliderValueOpacity}
        sliderValue={sliderValueOpacity}
        setShowTooltip={setShowTooltipOpacity}
        showTooltip={showTooltipOpacity}
        toolTipLabel="Change the opacity of filled area"
        setValue={setValue}
      />
      <SliderComp
        title="Border Width"
        sliderDefaultVal={6}
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
          <Flex
            flexDirection="column"
            paddingRight="20px"
            
          >
            <Flex
              flexDirection="row"
              justifyContent="flex-start"
              alignItems="center"
              gap="1.5rem"
              paddingBottom="10px"
              
              flexWrap="wrap"
            >
              <Text
                borderRadius="5px"
                paddingX="20px"
                bgColor="purple.500"
                fontSize={["sm", "md", "lg"]}
              >
                Chart Direction
              </Text>
              <Tooltip
                hasArrow
                fontSize="md"
                placement="auto"
                label="Toggle Direction of Chart"
                bg="white"
                color="black"
              >
                <InfoIcon />
              </Tooltip>
            </Flex>
            <RadioGroup onChange={(e) => {setValue('chartDirection', e)}}>
              <Flex
                gap={4}
                direction="column"
                flexWrap="wrap"
                marginBottom="3rem"
                
              >
                <Radio colorScheme="purple" value='vertical'>
                  Vertical
                </Radio>
                <Radio colorScheme="purple" value='horizontal'>
                  Horizontal
                </Radio>
              </Flex>
            </RadioGroup>
          </Flex>
        </Flex>
        <Flex>
          <Flex
            flexDirection="column"
            paddingRight="20px"
            
          >
            <Flex
              flexDirection="row"
              justifyContent="flex-start"
              alignItems="center"
              gap="1.5rem"
              paddingBottom="10px"
              
              flexWrap="wrap"
            >
              <Text
                borderRadius="5px"
                paddingX="20px"
                bgColor="purple.500"
                fontSize={["sm", "md", "lg"]}
              >
                Chart Interpolation
              </Text>
              <Tooltip
                hasArrow
                fontSize="md"
                placement="auto"
                label="Toggle Chart interpolation"
                bg="white"
                color="black"
              >
                <InfoIcon />
              </Tooltip>
            </Flex>
            <RadioGroup onChange={(e) => {setValue('chartInterpolation', e)}}>
              <Flex
                gap={4}
                direction="column"
                flexWrap="wrap"
                marginBottom="3rem"
                
              >
                <Radio colorScheme="purple" value='smooth'>
                  Smooth
                </Radio>
                <Radio colorScheme="purple" value='linear'>
                  Linear
                </Radio>
              </Flex>
            </RadioGroup>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default FunnelCustomisation;
