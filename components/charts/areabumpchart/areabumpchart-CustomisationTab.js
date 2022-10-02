import { useState } from "react";
import { Text, Box, Flex, Tooltip, Select, RadioGroup, Radio,   } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import SliderComp from "../../customisation-Components/slider";
import SliderWithStepComp from '../../customisation-Components/sliderWithStepComp'


const AreaBumpCustomisation = ({ setValue }) => {

    const [sliderValueSpacing, setSliderValueSpacing] = useState(0);
    const [showTooltipSpacing, setShowTooltipSpacing] = useState(false);
    const [sliderValueXpadding, setSliderValueXpadding] = useState(0.6);
    const [showTooltipXpadding, setShowTooltipXpadding] = useState(false);
    const [sliderValueFOpacity, setSliderValueFOpacity] = useState(0.8);
    const [showTooltipFOpacity, setShowTooltipFOpacity] = useState(false);
    const [sliderValueBWidth, setSliderValueBWidth] = useState(1);
    const [showTooltipBWidth, setShowTooltipBWidth] = useState(false);
    const [sliderValueBOpacity, setSliderValueBOpacity] = useState(1);
    const [showTooltipBOpacity, setShowTooltipBOpacity] = useState(false);

    return(
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
        title=" Field Spacing"
        sliderDefaultVal={0}
        sliderMinVal={0}
        sliderMaxVal={32}
        setValueFor="spacing"
        setSliderValue={setSliderValueSpacing}
        sliderValue={sliderValueSpacing}
        setShowTooltip={setShowTooltipSpacing}
        showTooltip={showTooltipSpacing}
        toolTipLabel="Change spacing between each areabump"
        setValue={setValue}
        />
        <SliderWithStepComp
        title="Padding along X-axis"
        sliderDefaultVal={0.6}
        sliderMinVal={0}
        sliderMaxVal={1}
        sliderStepval={0.05}
        setValueFor="xPadding"
        setSliderValue={setSliderValueXpadding}
        sliderValue={sliderValueXpadding}
        setShowTooltip={setShowTooltipXpadding}
        showTooltip={showTooltipXpadding}
        toolTipLabel="Change the padding of areabump along X axis"
        setValue={setValue}
      />
      <SliderWithStepComp
        title="Field Opacity"
        sliderDefaultVal={0.8}
        sliderMinVal={0}
        sliderMaxVal={1}
        sliderStepval={0.05}
        setValueFor="fieldOpacity"
        setSliderValue={setSliderValueFOpacity}
        sliderValue={sliderValueFOpacity}
        setShowTooltip={setShowTooltipFOpacity}
        showTooltip={showTooltipFOpacity}
        toolTipLabel="Change field opacity"
        setValue={setValue}
      />
      <SliderComp
        title=" Field Border Width"
        sliderDefaultVal={1}
        sliderMinVal={0}
        sliderMaxVal={20}
        setValueFor="borderWidth"
        setSliderValue={setSliderValueBWidth}
        sliderValue={sliderValueBWidth}
        setShowTooltip={setShowTooltipBWidth}
        showTooltip={showTooltipBWidth}
        toolTipLabel="Change border width"
        setValue={setValue}
        />
        <SliderWithStepComp
        title="Field Border Opacity"
        sliderDefaultVal={1}
        sliderMinVal={0}
        sliderMaxVal={1}
        sliderStepval={0.05}
        setValueFor="borderOpacity"
        setSliderValue={setSliderValueBOpacity}
        sliderValue={sliderValueBOpacity}
        setShowTooltip={setShowTooltipBOpacity}
        showTooltip={showTooltipBOpacity}
        toolTipLabel="Change field border opacity"
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
                Interpolation
              </Text>
              <Tooltip
                hasArrow
                fontSize="md"
                placement="auto"
                label="change interpolation of fields"
                bg="white"
                color="black"
              >
                <InfoIcon />
              </Tooltip>
            </Flex>
            <RadioGroup onChange={(e) => {setValue('interpolation', e)}}>
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
    )
}

export default AreaBumpCustomisation;