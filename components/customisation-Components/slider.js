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

const SliderComp = ({ title, sliderDefaultVal, sliderMinVal, sliderMaxVal, setValueFor, setSliderValue, sliderValue, setShowTooltip, showTooltip, toolTipLabel, setValue }) => {

    const width = `65%`

  return (
    <Flex
      width={width}
      flexDirection="row"
      justifyContent="space-around"
      flexWrap="wrap"
      
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
            
            width="70%"
          >
            <Text fontSize={["sm", "md", "lg", "xl"]} marginRight='1rem' marginBottom='10px' >{title}</Text>
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

export default SliderComp;
