import { useState } from "react";
import { Text, Flex,Box,Input,Tooltip,Checkbox, } from "@chakra-ui/react";
import SliderComp from "../../customisation-Components/slider";
import { InfoIcon } from "@chakra-ui/icons";


const AreaBumpGridAndAxes = ({ setValue, setBooleanValue }) => {

    const [sliderValueTickX, setSliderValueTickX] = useState(8);
    const [showTooltipTickX, setShowTooltipTickX] = useState(false);
    const [sliderValuePaddingX, setSliderValuePaddingX] = useState(8);
    const [showTooltipPaddingX, setShowTooltipPaddingX] = useState(false);
    const [sliderValueTickXRotation, setSliderValueTickXRotation] = useState(0);
    const [showTooltipTickXRotation, setShowTooltipTickXRotation] = useState(false);

    return(
    <>
      <Box bgColor="#140936" width="100%" height="3rem"></Box>
      {/* SECTION 1 X-axis Tick Size Slider */}
      <SliderComp
        title="X-axis Tick-Size"
        sliderDefaultVal={8}
        sliderMinVal={0}
        sliderMaxVal={20}
        setValueFor="tickSizeX"
        setSliderValue={setSliderValueTickX}
        sliderValue={sliderValueTickX}
        setShowTooltip={setShowTooltipTickX}
        showTooltip={showTooltipTickX}
        toolTipLabel="Change tick Size of the values on X-axis"
        setValue={setValue}
      />
      {/* End of SECTION 1 X-axis Tick Size Slider */}

      {/* SECTION 2 X-axis Tick padding Slider */}
      <SliderComp
        title="X-axis Padding"
        sliderDefaultVal={8}
        sliderMinVal={0}
        sliderMaxVal={20}
        setValueFor="tickPaddingX"
        setSliderValue={setSliderValuePaddingX}
        sliderValue={sliderValuePaddingX}
        setShowTooltip={setShowTooltipPaddingX}
        showTooltip={showTooltipPaddingX}
        toolTipLabel="Change tick padding of the values on X-axis"
        setValue={setValue}
      />
      {/* End of SECTION 2 X-axis Tick padding Slider */}

      {/* SECTION 3 X-axis Tick Rotation Slider */}
      <SliderComp
        title="X-axis Tick-Rotation"
        sliderDefaultVal={0}
        sliderMinVal={-90}
        sliderMaxVal={90}
        setValueFor="tickRotationX"
        setSliderValue={setSliderValueTickXRotation}
        sliderValue={sliderValueTickXRotation}
        setShowTooltip={setShowTooltipTickXRotation}
        showTooltip={showTooltipTickXRotation}
        toolTipLabel="Change tick rotation of the values on X-axis"
        setValue={setValue}
      />
      {/* End of SECTION 3 X-axis Tick Rotation Slider */}
      <Flex
        width='40%'
        paddingTop="1.5rem"
        flexDirection="row"
        justifyContent="space-between"
        flexWrap="wrap"
        marginX="4rem"
      >
        {/* Input of name for X-axis */}
        <Flex marginBottom="2rem">
          <Flex flexDirection="column" paddingRight="20px">
            <Flex
              flexDirection="row"
              justifyContent="flex-start"
              alignItems="center"
              gap='1.5rem'
            >
              <Text borderRadius='5px' paddingX='20px' bgColor='purple.500' fontSize={["sm", "md", "lg", "xl"]} marginBottom="10px">
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
              placeholder="Name along X axis"
              marginRight="20px"
              onChange={(e) => setValue("legendXAxis", e)}
            />
          </Flex>
        </Flex>
        {/* End of Input of name for X-axis */}
      </Flex>
    </>
    )

}

export default AreaBumpGridAndAxes;