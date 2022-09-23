import { useState } from "react";
import {
  Flex,
  Text,
  Box,
  Input,
  Tooltip,
  Checkbox,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import SliderComp from "./slider";

const GridAndAxesComp = ({ setValue, setBooleanValue }) => {

  const width = `65%`
  const [sliderValueTickX, setSliderValueTickX] = useState(8);
  const [showTooltipTickX, setShowTooltipTickX] = useState(false);
  const [sliderValuePaddingX, setSliderValuePaddingX] = useState(8);
  const [showTooltipPaddingX, setShowTooltipPaddingX] = useState(false);
  const [sliderValueTickY, setSliderValueTickY] = useState(5);
  const [showTooltipTickY, setShowTooltipTickY] = useState(false);
  const [sliderValuePaddingY, setSliderValuePaddingY] = useState(5);
  const [showTooltipPaddingY, setShowTooltipPaddingY] = useState(false);

  return (
    <>
      <Box bgColor="#140936" width="100%" height="3rem"></Box>
      <SliderComp
        title="X-axis TickSize"
        sliderDefaultVal={8}
        sliderMinVal={0}
        sliderMaxVal={25}
        setValueFor="TickSizeX"
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
        setValueFor="TickPaddingX"
        setSliderValue={setSliderValuePaddingX}
        sliderValue={sliderValuePaddingX}
        setShowTooltip={setShowTooltipPaddingX}
        showTooltip={showTooltipPaddingX}
        toolTipLabel="Change tick padding of the values on X-axis"
        setValue={setValue}
      />
      {/* End of SECTION 2 X-axis Tick padding Slider */}

      {/* SECTION 3 Y-axis Tick Size Slider */}
      <SliderComp
        title="Y-axis TickSize"
        sliderDefaultVal={5}
        sliderMinVal={0}
        sliderMaxVal={15}
        setValueFor="TickSizeY"
        setSliderValue={setSliderValueTickY}
        sliderValue={sliderValueTickY}
        setShowTooltip={setShowTooltipTickY}
        showTooltip={showTooltipTickY}
        toolTipLabel="Change tick Size of the values on Y-axis"
        setValue={setValue}
      />
      {/* End of SECTION 3 Y-axis Tick Size Slider */}

      {/* SECTION 4 Y-axis Tick padding Slider */}
      <SliderComp
        title="Y-axis Padding"
        sliderDefaultVal={5}
        sliderMinVal={0}
        sliderMaxVal={15}
        setValueFor="TickPaddingY"
        setSliderValue={setSliderValuePaddingY}
        sliderValue={sliderValuePaddingY}
        setShowTooltip={setShowTooltipPaddingY}
        showTooltip={showTooltipPaddingY}
        toolTipLabel="Change tick padding of the values on Y-axis"
        setValue={setValue}
      />
      {/* End of SECTION 4 Y-axis Tick padding Slider */}
      {/* SECTION 5 of GRID and AXES i.e. Input section for X and Y axis */}
      <Flex
        width={width}
        paddingTop="1.5rem"
        flexDirection="row"
        justifyContent="space-evenly"
        flexWrap="wrap"
      >
        {/* Input of name for X-axis */}
        <Flex>
          <Flex flexDirection="column" paddingRight="20px">
            <Flex
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize={["sm", "md", "lg", "xl"]} paddingBottom="10px">
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
              variant="filled"
              placeholder="Name along X axis"
              marginBottom="2rem"
              marginRight="20px"
              onChange={(e) => setValue("legendXAxis", e)}
            />
          </Flex>
        </Flex>
        {/* End of Input of name for X-axis */}
        {/* Input of name for Y-axis */}
        <Flex>
          <Flex>
            <Flex flexDirection="column" paddingRight="20px">
              <Flex
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Text fontSize={["sm", "md", "lg", "xl"]} paddingBottom="10px">
                  Name for Y-axis
                </Text>
                <Tooltip
                  hasArrow
                  fontSize="md"
                  placement="auto"
                  label="Enter the name that you want to use as label for Y axis"
                  bg="white"
                  color="black"
                >
                  <InfoIcon />
                </Tooltip>
              </Flex>
              <Input
                type="text"
                fontSize="lg"
                variant="filled"
                placeholder="Name along Y axis"
                marginBottom="2rem"
                marginRight="20px"
                onChange={(e) => setValue("legendYAxis", e)}
              />
            </Flex>
          </Flex>
        </Flex>
        {/* End of Input of name for Y-axis */}
      </Flex>
      {/* End of SECTION 5 of GRID and AXES i.e. Input section for X and Y axis */}
      {/* End of Grid and Axes Tab */}
      {/* SECTION 6 of GRID and AXES i.e. toogle section for Grid and Axes */}
      <Flex
        width={width}
        flexDirection="row"
        justifyContent="space-evenly"
        flexWrap="wrap"
      >
        {/* Toggle for Grid X and Y Axis */}
        <Flex>
          <Flex flexDirection="column" paddingRight="20px">
            <Flex
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize={["sm", "md", "lg", "xl"]} paddingBottom="10px">
                GRID
              </Text>
              <Tooltip
                hasArrow
                fontSize="md"
                placement="auto"
                label="Toggle On and Off the grid along X & Y Grid"
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
                onChange={() => setBooleanValue("gridX")}
              >
                <Text fontSize={["sm", "md", "lg"]}>X-grid</Text>
              </Checkbox>
              <Checkbox
                colorScheme="purple"
                size="lg"
                defaultChecked
                onChange={() => setBooleanValue("gridY")}
              >
                <Text fontSize={["sm", "md", "lg"]}>Y-grid</Text>
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
                justifyContent="space-between"
                alignItems="center"
              >
                <Text fontSize={["sm", "md", "lg", "xl"]} paddingBottom="10px">
                  AXES
                </Text>
                <Tooltip
                  hasArrow
                  fontSize="md"
                  placement="auto"
                  label="Toggle On and Off the X & Y Axis"
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
                  onChange={() => setBooleanValue("axisBottom")}
                >
                  <Text fontSize={["sm", "md", "lg"]}>X-axis</Text>
                </Checkbox>
                <Checkbox
                  colorScheme="purple"
                  size="lg"
                  defaultChecked
                  onChange={() => setBooleanValue("axisLeft")}
                >
                  <Text fontSize={["sm", "md", "lg"]}>Y-axis</Text>
                </Checkbox>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        {/* End of Toggle for Grid X and Y Axis */}
      </Flex>
      {/* End of SECTION 6 of GRID and AXES i.e. toogle section for Grid and Axes */}
    </>
  );
};

export default GridAndAxesComp;
