import { useRef, useState } from 'react'
import download from 'downloadjs'
import * as htmlToImage from 'html-to-image'
import { Flex, Text, Heading, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { ResponsivePie } from '@nivo/pie'
import PieChartFunctions from '../../components/charts/pieChart/pieChartFunctions'
import { ChevronDownIcon } from '@chakra-ui/icons'

const PieChart = () => {

    const chartReference = useRef(null)
    const [dyValues, setDyValues] = useState({colors: 'nivo', cRadius: 0, arcLabelStrLen: 24, innerRadius: 0.6, arcLabelLen: 16, sortByValue: false, arcLabels: false, borderWidth: 0, })
    const [finalData, setFinalData] = useState([{id: '', value: '', label: ''}])
    const [data, setData] = useState([
    {
      "id": "python",
      "label": "python",
      "value": 11,
    },
    {
      "id": "go",
      "label": "go",
      "value": 527,
    },
    {
      "id": "css",
      "label": "css",
      "value": 63,
    },
    {
      "id": "lisp",
      "label": "lisp",
      "value": 561,
    },
    {
      "id": "c",
      "label": "c",
      "value": 549,
    }
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

  const setBooleanValue = (attr) => {
    setDyValues({
      ...dyValues,
      [attr]: !dyValues[attr],
    });
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
        <Heading color='white'>Pie Chart</Heading>
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
        <ResponsivePie
        data={data}
        theme={{ textColor: "#808080" }}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={dyValues.innerRadius}
        colors={{ scheme: dyValues.colors }}
        padAngle={0.7}
        sortByValue={dyValues.sortByValue}
        cornerRadius={dyValues.cRadius}
        activeOuterRadiusOffset={8}
        borderWidth={dyValues.borderWidth}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={0}
        arcLinkLabelsDiagonalLength={dyValues.arcLabelLen}
        arcLinkLabelsStraightLength={dyValues.arcLabelStrLen}
        arcLinkLabelsTextColor={{ from: 'color', modifiers: [] }}
        arcLinkLabelsThickness={2}
        enableArcLabels={dyValues.arcLabels}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={0}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 108,
                itemHeight: 18,
                itemTextColor: '#808080',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
            }
        ]}
    />
    </Flex>
    </div>
    </Flex>
    <PieChartFunctions setData={setData} setValue={setValue} setBooleanValue={setBooleanValue} createData={createData} finalData={finalData} setFinalData={setFinalData} />
    </>
    )
}

export default PieChart