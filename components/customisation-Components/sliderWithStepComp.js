import {
    Flex,
    Text,
    Tooltip,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
  } from "@chakra-ui/react";
  import { InfoIcon } from "@chakra-ui/icons";

const SliderWithStepComp = ({ title, sliderDefaultVal, sliderMinVal, sliderMaxVal, sliderStepval, setValueFor, setSliderValue, sliderValue, setShowTooltip, showTooltip, toolTipLabel, setValue }) => {

    const width = `60%`

  return (
    <Flex
      width={width}
      flexDirection="row"
      justifyContent="space-between"
      flexWrap="wrap"
      marginX="4rem"
      
    >
      <Flex  width="65%">
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          width="100%"
          
        >
          <Flex
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
            gap='1.5rem'
            
            width="70%"
          >
            <Text borderRadius='5px' paddingX='20px' bgColor='purple.500' fontSize={["sm", "md", "lg", "xl"]} marginBottom='10px' >{title}</Text>
            <Tooltip
              hasArrow
              fontSize={["sm", "md"]}
              placement="auto"
              label={toolTipLabel}
              bg="white"
              color="black"
            >
              <InfoIcon />
            </Tooltip>
          </Flex>
          <Flex gap={12} direction="row" flexWrap="wrap" marginBottom="1.5rem">
            {/* Slider for changing the X-Axis tickpadding */}
            <Slider
              defaultValue={sliderDefaultVal}
              min={sliderMinVal}
              max={sliderMaxVal}
              step={sliderStepval}
              onChange={(e) => {
                setSliderValue(e);
                setValue(setValueFor, e);
              }}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <SliderTrack>
                <SliderFilledTrack bg="purple.500" />
              </SliderTrack>
              <Tooltip
                hasArrow
                fontSize={["sm", "md", "lg"]}
                bg="white"
                color="black"
                placement="top"
                isOpen={showTooltip}
                label={`${sliderValue}`}
              >
                <SliderThumb boxSize={["3", "4", "5", "6"]} />
              </Tooltip>
            </Slider>
            {/* End of Slider for changing the X-Axis tickpadding */}
          </Flex>
        </Flex>
      </Flex>
      {/*End of SECTION 4 slider  */}
    </Flex>
  );
};

export default SliderWithStepComp;