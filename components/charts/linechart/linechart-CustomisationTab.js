import {
  Flex,
  Text,
  Tooltip,
  Checkbox,
  Box,
  Input,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

const LinechartCustomisation = ({ setValue, setBooleanValue }) => {
  return (
    // Customisation Tab
    <>
      <Box bgColor="#140936" width="100%" height="3rem"></Box>
      {/* Section 1 Curve Type */}
      <Flex
        width="40%"
        flexDirection="row"
        justifyContent="space-between"
        flexWrap="wrap"
        marginX="4rem"
        marginBottom='1.5rem'
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
              <Text borderRadius='5px' paddingX='20px' bgColor='purple.500' fontSize={["sm", "md", "lg"]}>Curve Type</Text>
              <Tooltip
                hasArrow
                fontSize="md"
                placement="auto"
                label="Change the type of curve"
                bg="white"
                color="black"
              >
                <InfoIcon />
              </Tooltip>
            </Flex>
            <Flex direction="row" flexWrap="wrap" marginBottom="1.5rem">
              {/* Dropdown for Curve type */}
              <Select
                color="gray"
                onChange={(e) => setValue("curve", e)}
              >
                <option value="basis">Basis</option>
                <option value="cardinal">Cardinal</option>
                <option value="catmullRom">Catmull-Rom</option>
                <option value="linear">Linear</option>
                <option value="monotoneX">monotoneX</option>
                <option value="monotoneY">monotoneY</option>
                <option value="natural">Natural</option>
                <option value="step">Step</option>
                <option value="stepAfter">Step-After</option>
                <option value="stepBefore">Step-Before</option>
              </Select>
              {/* End of Dropdown for Curve type */}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {/* End of Section 1 Curve Type */}
      {/* Section 2 Colors */}
      <Flex
        width="40%"
        flexDirection="row"
        justifyContent="space-between"
        flexWrap="wrap"
        marginX="4rem"
        marginBottom='1.5rem'
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
              <Text borderRadius='5px' paddingX='20px' bgColor='purple.500' fontSize={["sm", "md", "lg"]}>Colors</Text>
              <Tooltip
                hasArrow
                fontSize="md"
                placement="auto"
                label="Change the type of color"
                bg="white"
                color="black"
              >
                <InfoIcon />
              </Tooltip>
            </Flex>
            <Flex direction="row" flexWrap="wrap" marginBottom="1.5rem">
              {/* Dropdown for Curve type */}
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
              {/* End of Dropdown for Curve type */}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {/* End of Section 2 Colors */}
      {/* SECTION 3 Stepper for Line-Width , Area and Area Opacity */}
      <Flex
        width="40%"
        flexDirection="row"
        justifyContent="space-between"
        flexWrap="wrap"
        marginX="4rem"
        marginBottom='1.5rem'
      >
        {/* Stepper for Line-Width */}
        <Flex>
          <Flex flexDirection="column" paddingRight="20px">
            <Flex
              flexDirection="row"
              justifyContent="flex-start"
              alignItems="center"
              gap="1.5rem"
              paddingBottom="10px"
            >
              <Text borderRadius='5px' paddingX='20px' bgColor='purple.500' fontSize={["sm", "md", "lg"]}>Curve Line-Width</Text>
              <Tooltip
                hasArrow
                fontSize="md"
                placement="auto"
                label="Set line-width for curve"
                bg="white"
                color="black"
              >
                <InfoIcon />
              </Tooltip>
            </Flex>
            <Flex gap={12} direction="row" flexWrap="wrap" marginBottom="2rem">
              <NumberInput
                size={["xs", "sm", "md"]}
                defaultValue={2}
                min={1}
                max={20}
                onChange={(e) => setValue("lineWidth", e)}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper
                    bg="purple.500"
                    _active={{ bg: "purple.700" }}
                  />
                  <NumberDecrementStepper
                    bg="purple.500"
                    _active={{ bg: "purple.700" }}
                  />
                </NumberInputStepper>
              </NumberInput>
            </Flex>
          </Flex>
        </Flex>
        {/* End of Stepper for Line-Width */}
        {/* Toggle and Stepper for Area and Area Opacity respectively */}
        <Flex>
          <Flex>
            <Flex flexDirection="column" paddingRight="20px">
              <Flex
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="center"
                gap="1.5rem"
                paddingBottom="10px"
              >
                <Text borderRadius='5px' paddingX='20px' bgColor='purple.500' fontSize={["sm", "md", "lg"]}>Area & Opacity</Text>
                <Tooltip
                  hasArrow
                  fontSize="md"
                  placement="auto"
                  label="Toggle On and Off the Area and change the opacity of it"
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
                  onChange={() => setBooleanValue("Area")}
                >
                  <Text fontSize={["sm", "md", "lg"]}>Area</Text>
                </Checkbox>
                <Flex flexDirection="column" justifyContent="flex-start">
                  <Text fontSize={["sm", "md"]} paddingBottom="8px">
                    Area-Opacity :{" "}
                  </Text>
                  <NumberInput
                    size={["xs", "sm", "md"]}
                    defaultValue={0.2}
                    precision={2}
                    step={0.05}
                    min={0}
                    max={1}
                    onChange={(e) => setValue("areaOpacity", e)}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper
                        bg="purple.500"
                        _active={{ bg: "purple.700" }}
                      />
                      <NumberDecrementStepper
                        bg="purple.500"
                        _active={{ bg: "purple.700" }}
                      />
                    </NumberInputStepper>
                  </NumberInput>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        {/* End of Toggle and Stepper for Area and Area Opacity respectively */}
      </Flex>
      {/* End of SECTION 3 Stepper for Line-Width , Area and Area Opacity */}
      {/* SECTION 4 Enable points and pointLabels */}
      <Flex
        width="40%"
        flexDirection="row"
        justifyContent="space-between"
        flexWrap="wrap"
        marginX="4rem"
      >
        {/* Toggle and Stepper for Curve Points */}
        <Flex>
          <Flex> 
            <Flex flexDirection="column" paddingRight="20px">
              <Flex
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="center"
                gap="1.5rem"
                paddingBottom="10px"
              >
                <Text borderRadius='5px' paddingX='20px' bgColor='purple.500' fontSize={["sm", "md", "lg"]}>Curve Points</Text>
                <Tooltip
                  hasArrow
                  fontSize="md"
                  placement="auto"
                  label="Toggle On and Off the curve points and change the point-size and Point-border-width"
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
                  onChange={() => setBooleanValue("points")}
                >
                <Text fontSize={["sm", "md", "lg"]}>Points</Text>
                </Checkbox>
                <Flex
                  flexDirection="column"
                  justifyContent="flex-start"
                  gap="2"
                >
                  <Flex flexDirection="column" justifyContent="flex-start">
                    <Text fontSize={["sm", "md"]} paddingBottom="8px">
                      Point Size :{" "}
                    </Text>
                    <NumberInput
                      size={["xs", "sm", "md"]}
                      defaultValue={10}
                      min={5}
                      max={20}
                      onChange={(e) => setValue("pointSize", e)}
                    >
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper
                          bg="purple.500"
                          _active={{ bg: "purple.700" }}
                        />
                        <NumberDecrementStepper
                          bg="purple.500"
                          _active={{ bg: "purple.700" }}
                        />
                      </NumberInputStepper>
                    </NumberInput>
                  </Flex>
                  <Flex flexDirection="column" justifyContent="flex-start">
                    <Text fontSize={["sm", "md"]} paddingBottom="8px">
                      Point Border Width :{" "}
                    </Text>
                    <NumberInput
                      size={["xs", "sm", "md"]}
                      defaultValue={2}
                      min={0}
                      max={20}
                      onChange={(e) => setValue("pointBorderWidth", e)}
                    >
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper
                          bg="purple.500"
                          _active={{ bg: "purple.700" }}
                        />
                        <NumberDecrementStepper
                          bg="purple.500"
                          _active={{ bg: "purple.700" }}
                        />
                      </NumberInputStepper>
                    </NumberInput>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        {/* End of Toggle and Stepper for Curve Points */}
        {/* Toggle and Stepper for Curve Pointlabels */}
        <Flex>
          <Flex>
            <Flex flexDirection="column" paddingRight="20px">
              <Flex
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="center"
                gap="1.5rem"
                paddingBottom="10px"
              >
                <Text borderRadius='5px' paddingX='20px' bgColor='purple.500' fontSize={["sm", "md", "lg"]}>Point Label</Text>
                <Tooltip
                  hasArrow
                  fontSize="md"
                  placement="auto"
                  label="Toggle On and Off the point label and change the Y-offset (TO MAKE POINT LABEL WORK FIRST TOGGLE ON THE POINTS IN CURVE POINTS)"
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
                  onChange={() => setBooleanValue("pointLabel")}
                >
                  <Text fontSize={["sm", "md", "lg"]}>Point label</Text>
                </Checkbox>
                <Flex flexDirection="column" justifyContent="flex-start">
                  <Text fontSize={["sm", "md"]} paddingBottom="8px">
                    Point Label Yoffset :{" "}
                  </Text>
                  <NumberInput
                    size={["xs", "sm", "md"]}
                    defaultValue={-12}
                    min={-24}
                    max={24}
                    onChange={(e) => setValue("pointLabelYOffset", e)}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper
                        bg="purple.500"
                        _active={{ bg: "purple.700" }}
                      />
                      <NumberDecrementStepper
                        bg="purple.500"
                        _active={{ bg: "purple.700" }}
                      />
                    </NumberInputStepper>
                  </NumberInput>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        {/* End of Toggle and Stepper for Curve Pointlabels */}
      </Flex>
      {/* SECTION 4 Enable points and pointLabels */}
    </>
    // End of Customisation Tab
  );
};

export default LinechartCustomisation;
