import { useRef, useState } from 'react'
import download from 'downloadjs'
import * as htmlToImage from 'html-to-image'
import { Flex, Text, Heading, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { ResponsiveFunnel } from "@nivo/funnel";
import FunnelChartFunctions from "../../components/charts/funnelChart/funnelChartFunctions";
import { ChevronDownIcon } from '@chakra-ui/icons'




const FunnelChart = () => {

  const chartReference = useRef(null)
  const [dyValues, setDyValues] = useState({colors: 'spectral', spacing: 0, shape: 0.66, opacity: 1, borderWidth: 6, label: true, chartInterpolation: 'smooth', chartDirection: 'vertical'})
  const [finalData, setFinalData] = useState([{id: '', value: '', label: ''}])
  const [data, setData] = useState([
    {
      id: "Sent",
      value: 82788,
      label: "Sent",
    },
    {
      id: "Viewed",
      value: 61435,
      label: "Viewed",
    },
    {
      id: "Clicked",
      value: 41611,
      label: "Clicked",
    },
    {
      id: "Add To Card",
      value: 30672,
      label: "Add To Card",
    },
    {
      id: "Purchased",
      value: 19078,
      label: "Purchased",
    },
  ])


  const setValue = (attr, e) => {
    if (e.target) {
      setDyValues({
        ...dyValues,
        [attr]: e.target.value,
      });
    } else {
      setDyValues({
        ...dyValues,
        [attr]: e,
      });
    }
  };

  
  const createData = () => {
    setData(finalData);
  };

  const generateSVG = () => {
    const htmlNode = chartReference.current;
    htmlToImage
      .toSvg(htmlNode)
      .then((data) => {
        download(data, "Chart.svg");
      })
      .catch((error) => {
        console.error("Something went wrong", error);
      });
  };

  const generatePNG = () => {
    const htmlNode = chartReference.current;
    htmlToImage
      .toPng(htmlNode)
      .then((data) => {
        download(data, "Chart.png");
      })
      .catch((error) => {
        console.error("Something went wrong", error);
      });
  };

  

  return (
    <>
    <Flex bgColor="blackAlpha.900" width="100%" height="4rem" px='10' wrap='wrap' justifyContent='space-between' alignItems='center'>
        <Heading color='white'>Funnel Chart</Heading>
        <Menu>
          <MenuButton px={4}
            py={2}
            size={["xs", "sm", "md", "lg"]}
            transition='all 0.2s'
            borderRadius='md'
            bgGradient='linear(to-r, purple.400, purple.600)'
            _hover={{ bgGradient: "linear(to-r, purple.500, purple.800)", }}
            _expanded={{  bgGradient: "linear(to-r, purple.500, purple.800)", }}
            >
            <Text color='white'>Download <ChevronDownIcon color='white' /></Text>
          </MenuButton>
          <MenuList>
            <MenuItem onClick={(e) => generateSVG(e.target.value)}>SVG Format</MenuItem>
            <MenuItem onClick={(e) => generatePNG(e.target.value)}>PNG Format</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Flex
        height="65vh"
        paddingX='10px'
        paddingY='15px'
        width="100%"
        overflowX="auto"
        bgColor="black"
      >
        <div ref={chartReference} >
        <Flex
          height="57vh"
          width={{ base: 1450, lg: "98vw" }}
          alignItems="center"
        >
          <ResponsiveFunnel
            data={data}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            valueFormat=">-.4s"
            colors={{ scheme: dyValues.colors }}
            interpolation={dyValues.chartInterpolation}
            direction={dyValues.chartDirection}
            borderWidth={dyValues.borderWidth}
            shapeBlending={dyValues.shape}
            spacing={dyValues.spacing}
            fillOpacity={dyValues.opacity}
            enableLabel={dyValues.label}
            labelColor={{
              from: "color",
              modifiers: [["darker", 3]],
            }}
            beforeSeparatorLength={100}
            beforeSeparatorOffset={20}
            afterSeparatorLength={100}
            afterSeparatorOffset={20}
            currentPartSizeExtension={10}
            currentBorderWidth={40}
            motionConfig="wobbly"
          />
        </Flex>
        </div>
      </Flex>
      <FunnelChartFunctions setData={setData} setValue={setValue} createData={createData} finalData={finalData} setFinalData={setFinalData} />
    </>
  );
};

export default FunnelChart;

