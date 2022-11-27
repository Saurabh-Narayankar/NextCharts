import { useState } from "react";
import { Text, Box, Flex, Tooltip, Select, RadioGroup, Radio,} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import SliderComp from "../../customisation-Components/slider";
import SliderWithStepComp from '../../customisation-Components/sliderWithStepComp'


const BumpCustomisation = ({ setValue }) => {

    const [sliderValuePointSize, setSliderValuePointSize] = useState(10);
    const [showTooltipPointSize, setShowTooltipPointSize] = useState(false);
    const [sliderValueXpadding, setSliderValueXpadding] = useState(0.6);
    const [showTooltipXpadding, setShowTooltipXpadding] = useState(false);
    const [sliderValueOpacity, setSliderValueOpacity] = useState(1);
    const [showTooltipOpacity, setShowTooltipOpacity] = useState(false);
    const [sliderValueBWidth, setSliderValueBWidth] = useState(3);
    const [showTooltipBWidth, setShowTooltipBWidth] = useState(false);
    const [sliderValueLWidth, setSliderValueLWidth] = useState(2);
    const [showTooltipLWidth, setShowTooltipLWidth] = useState(false);

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
        title="Point Size"
        sliderDefaultVal={10}
        sliderMinVal={0}
        sliderMaxVal={24}
        setValueFor="pointSize"
        setSliderValue={setSliderValuePointSize}
        sliderValue={sliderValuePointSize}
        setShowTooltip={setShowTooltipPointSize}
        showTooltip={showTooltipPointSize}
        toolTipLabel="Change size of points on line"
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
        toolTipLabel="Change the padding of line along X axis"
        setValue={setValue}
      />
      <SliderWithStepComp
        title="Opacity"
        sliderDefaultVal={1}
        sliderMinVal={0}
        sliderMaxVal={1}
        sliderStepval={0.05}
        setValueFor="opacity"
        setSliderValue={setSliderValueOpacity}
        sliderValue={sliderValueOpacity}
        setShowTooltip={setShowTooltipOpacity}
        showTooltip={showTooltipOpacity}
        toolTipLabel="Change opacity"
        setValue={setValue}
      />
      <SliderComp
        title="Point Border Width"
        sliderDefaultVal={3}
        sliderMinVal={0}
        sliderMaxVal={20}
        setValueFor="pointBorderWidth"
        setSliderValue={setSliderValueBWidth}
        sliderValue={sliderValueBWidth}
        setShowTooltip={setShowTooltipBWidth}
        showTooltip={showTooltipBWidth}
        toolTipLabel="Change point border width"
        setValue={setValue}
        />
        <SliderComp
        title="Line Width"
        sliderDefaultVal={2}
        sliderMinVal={0}
        sliderMaxVal={20}
        setValueFor="lineWidth"
        setSliderValue={setSliderValueLWidth}
        sliderValue={sliderValueLWidth}
        setShowTooltip={setShowTooltipLWidth}
        showTooltip={showTooltipLWidth}
        toolTipLabel="Change line width"
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

export default BumpCustomisation;