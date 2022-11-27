import { useState } from 'react'
import { Flex, Heading } from '@chakra-ui/react'
import { ResponsiveAreaBump } from '@nivo/bump'
import AreaBumpChartFunctions from '../../components/charts/areaBumpChart/areabumpchartFunctions'

const AreaBumpChart = () => {

  const [dyValues, setDyValues] = useState({tickSizeX: 8, tickPaddingX: 8, tickRotationX: 0, legendXAxis: '', spacing: 0, xPadding: 0.6, interpolation: 'smooth',colors: 'nivo', fieldOpacity: 0.8, borderWidth: 1, borderOpacity: 1,})
  const [finalData, setFinalData] = useState([{id: '', data: [{x: null, y: null}]}])
  const [data, setData] = useState([
        {
          id: "JavaScript",
          data: [
            {
              x: 2000,
              y: 17
            },
            {
              x: 2001,
              y: 15
            },
            {
              x: 2002,
              y: 18
            },
            {
              x: 2003,
              y: 24
            },
            {
              x: 2004,
              y: 25
            },
            {
              x: 2005,
              y: 16
            }
          ]
        },
        {
          id: "ReasonML",
          data: [
            {
              x: 2000,
              y: 25
            },
            {
              x: 2001,
              y: 21
            },
            {
              x: 2002,
              y: 18
            },
            {
              x: 2003,
              y: 12
            },
            {
              x: 2004,
              y: 17
            },
            {
              x: 2005,
              y: 22
            }
          ]
        }, 
  ])


  const createData = () => {
        setData(finalData);
  };

      
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



    return(
        <>
        <Flex bgColor="blackAlpha.900" width="100%" height="4rem" justifyContent='center' alignItems='center'>
        <Heading color='white'>AREA-BUMP CHART</Heading>
      </Flex>
      <Flex
        height="65vh"
        padding="15px"
        width="100vw"
        overflowX='auto'
        bgColor='black'
      >
        <Flex
          height="57vh"
          width={{ base: 1450, lg: "98vw" }}
          alignItems ='center'
          bgColor='blackAlpha.900'
        >
        <ResponsiveAreaBump
        data={data}
        theme={{textColor: "#ffffff"}}
        margin={{ top: 40, right: 100, bottom: 40, left: 100 }}
        spacing={dyValues.spacing}
        colors={{ scheme: dyValues.colors }}
        xPadding={dyValues.xPadding}
        blendMode="lighten"
        interpolation={dyValues.interpolation}
        fillOpacity={dyValues.fieldOpacity}
        inactiveFillOpacity={0}
        startLabel="id"
        startLabelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '0'
                ]
            ]
        }}
        endLabel="id"
        endLabelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '0'
                ]
            ]
        }}
        borderWidth={dyValues.borderWidth}
        borderOpacity={dyValues.borderOpacity}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.4
                ]
            ]
        }}
        axisTop={{
            tickSize: dyValues.tickSizeX,
            tickPadding: dyValues.tickPaddingX,
            tickRotation: dyValues.tickRotationX,
            legend: dyValues.legendXAxis,
            legendPosition: 'middle',
            legendOffset: -36
        }}
        axisBottom={{
            tickSize: dyValues.tickSizeX,
            tickPadding: dyValues.tickPaddingX,
            tickRotation: dyValues.tickRotationX,
            legend: dyValues.legendXAxis,
            legendPosition: 'middle',
            legendOffset: 32
        }}
        />
        </Flex>
      </Flex>
      <AreaBumpChartFunctions setValue={setValue} setBooleanValue={setBooleanValue} finalData={finalData} setFinalData={setFinalData} createData={createData} setData={setData} />
    </>
    )
}

export default AreaBumpChart;