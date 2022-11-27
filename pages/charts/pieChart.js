import { useState } from 'react'
import { Flex, Heading } from '@chakra-ui/react'
import { ResponsivePie } from '@nivo/pie'
import PieChartFunctions from '../../components/charts/pieChart/pieChartFunctions'

const PieChart = () => {

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

    return (
    <>
    <Flex bgColor="blackAlpha.900" width="100%" height="4rem" justifyContent='center' alignItems='center'>
        <Heading color='white'>PIE CHART</Heading>
      </Flex>
      <Flex
        height="65vh"
        paddingX='10px'
        paddingY='15px'
        width="100%"
        overflowX="auto"
        bgColor="black"
      >
        <Flex
          height="57vh"
          width={{ base: 1450, lg: "98vw" }}
          alignItems="center"
          bgColor="blackAlpha.900"
        >
         <ResponsivePie
        data={data}
        theme={{ textColor: "#ffffff" }}
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
    </Flex>
    <PieChartFunctions setData={setData} setValue={setValue} setBooleanValue={setBooleanValue} createData={createData} finalData={finalData} setFinalData={setFinalData} />
    </>
    )
}

export default PieChart