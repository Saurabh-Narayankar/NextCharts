import { useState } from "react";
import { Text, Box, Flex, Tooltip, Checkbox, Select } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import SliderComp from "../../customisation-Components/slider";
import SliderWithStepComp from "../../customisation-Components/sliderWithStepComp";

const RadialBarCustomisation = ({ setValue, setBooleanValue }) => {
  const [sliderValueStartAngle, setSliderValueStartAngle] = useState(0);
  const [showTooltipStartAngle, setShowTooltipStartAngle] = useState(false);
  const [sliderValueEndAngle, setSliderValueEndAngle] = useState(270);
  const [showTooltipEndAngle, setShowTooltipEndAngle] = useState(false);
  const [sliderValueCornerRadius, setSliderValueCornerRadius] = useState(0);
  const [showTooltipCornerRadius, setShowTooltipCornerRadius] = useState(false);
  const [sliderValuePadding, setSliderValuePadding] = useState(0.2);
  const [showTooltipPadding, setShowTooltipPadding] = useState(false);
  const [sliderValueInnerRadius, setSliderValueInnerRadius] = useState(0.3);
  const [showTooltipInnerRadius, setShowTooltipInnerRadius] = useState(false);

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
              <Select color="gray" onChange={(e) => setValue("colors", e)}>
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
        title="Start Angle"
        sliderDefaultVal={0}
        sliderMinVal={-360}
        sliderMaxVal={360}
        setValueFor="startAngle"
        setSliderValue={setSliderValueStartAngle}
        sliderValue={sliderValueStartAngle}
        setShowTooltip={setShowTooltipStartAngle}
        showTooltip={showTooltipStartAngle}
        toolTipLabel="Change start angle"
        setValue={setValue}
      />
      <SliderComp
        title="End Angle"
        sliderDefaultVal={270}
        sliderMinVal={-360}
        sliderMaxVal={360}
        setValueFor="endAngle"
        setSliderValue={setSliderValueEndAngle}
        sliderValue={sliderValueEndAngle}
        setShowTooltip={setShowTooltipEndAngle}
        showTooltip={showTooltipEndAngle}
        toolTipLabel="Change end angle"
        setValue={setValue}
      />
      <SliderComp
        title="Corner Radius"
        sliderDefaultVal={0}
        sliderMinVal={0}
        sliderMaxVal={35}
        setValueFor="cornerRadius"
        setSliderValue={setSliderValueCornerRadius}
        sliderValue={sliderValueCornerRadius}
        setShowTooltip={setShowTooltipCornerRadius}
        showTooltip={showTooltipCornerRadius}
        toolTipLabel="Change corner radius"
        setValue={setValue}
      />
      <SliderWithStepComp
        title="Padding"
        sliderDefaultVal={0.2}
        sliderMinVal={0}
        sliderMaxVal={0.9}
        sliderStepval={0.05}
        setValueFor="padding"
        setSliderValue={setSliderValuePadding}
        sliderValue={sliderValuePadding}
        setShowTooltip={setShowTooltipPadding}
        showTooltip={showTooltipPadding}
        toolTipLabel="Change the padding of field"
        setValue={setValue}
      />
      <SliderWithStepComp
        title="Inner Radius"
        sliderDefaultVal={0.3}
        sliderMinVal={0}
        sliderMaxVal={0.95}
        sliderStepval={0.05}
        setValueFor="innerRadius"
        setSliderValue={setSliderValueInnerRadius}
        sliderValue={sliderValueInnerRadius}
        setShowTooltip={setShowTooltipInnerRadius}
        showTooltip={showTooltipInnerRadius}
        toolTipLabel="Change the inner radius of field"
        setValue={setValue}
      />
      <Flex
        width="40%"
        flexDirection="row"
        justifyContent="space-between"
        flexWrap="wrap"
        marginX="4rem"
      >
        {/* Toggle for Grid X and Y Axis */}
        <Flex>
          <Flex flexDirection="column" paddingRight="20px">
            <Flex
              flexDirection="row"
              justifyContent="flex-start"
              alignItems="center"
              gap="1.5rem"
            >
              <Text
                borderRadius="5px"
                paddingX="20px"
                bgColor="purple.500"
                fontSize={["sm", "md", "lg", "xl"]}
                marginBottom="10px"
              >
                GRID
              </Text>
              <Tooltip
                hasArrow
                fontSize="md"
                placement="auto"
                label="Toggle On and Off the radial and circular grid"
                bg="white"
                color="black"
              >
                <InfoIcon />
              </Tooltip>
            </Flex>
            <Flex gap={12} direction="row" flexWrap="wrap" marginBottom="2rem">
              <Checkbox
                colorScheme="purple"
                size="lg"
                defaultChecked
                onChange={() => setBooleanValue("radialGrid")}
              >
                <Text fontSize={["sm", "md", "lg"]}>Radial-grid</Text>
              </Checkbox>
              <Checkbox
                colorScheme="purple"
                size="lg"
                defaultChecked
                onChange={() => setBooleanValue("circularGrid")}
              >
                <Text fontSize={["sm", "md", "lg"]}>Circular-grid</Text>
              </Checkbox>
            </Flex>
          </Flex>
        </Flex>
        {/*End of Toggle for Grid X and Y Axis */}
        {/* Toggle for Axes of X and Y Axis */}
        <Flex>
          <Flex>
            <Flex flexDirection="column" marginRight="20px" paddingRight="20px">
              <Flex
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="center"
                gap="1.5rem"
              >
                <Text
                  borderRadius="5px"
                  paddingX="20px"
                  bgColor="purple.500"
                  fontSize={["sm", "md", "lg", "xl"]}
                  marginBottom="10px"
                >
                  TRACKS AND LABELS
                </Text>
                <Tooltip
                  hasArrow
                  fontSize="md"
                  placement="auto"
                  label="Toggle On and Off the tracks and labels"
                  bg="white"
                  color="black"
                >
                  <InfoIcon />
                </Tooltip>
              </Flex>
              <Flex
                gap={12}
                direction="row"
                flexWrap="wrap"
                marginBottom="3rem"
              >
                <Checkbox
                  colorScheme="purple"
                  size="lg"
                  defaultChecked
                  onChange={() => setBooleanValue("track")}
                >
                  <Text fontSize={["sm", "md", "lg"]}>Track</Text>
                </Checkbox>
                <Checkbox
                  colorScheme="purple"
                  size="lg"
                  defaultChecked
                  onChange={() => setBooleanValue("labels")}
                >
                  <Text fontSize={["sm", "md", "lg"]}>Labels</Text>
                </Checkbox>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        {/* End of Toggle for Grid X and Y Axis */}
      </Flex>
    </>
  );
};

export default RadialBarCustomisation;
