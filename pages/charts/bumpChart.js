import { useState } from 'react'
import { Flex, Box, Heading } from "@chakra-ui/react";
import { ResponsiveBump } from '@nivo/bump'
import BumpChartFunctions from "../../components/charts/bumpChart/bumpChartFunctions";

const BumpChart = () => {

    const [dyValues, setDyValues] = useState({tickSizeX: 8, tickPaddingX: 8, tickRotationX: 0, legendXAxis: '', pointSize: 10, xPadding: 0.6, interpolation: 'smooth', colors: 'nivo', opacity: 1, pointBorderWidth: 3, lineWidth: 2, gridX: true, gridY: true})
    const [finalData, setFinalData] = useState([{id: '', data: [{x: '', y: null}]}])
    const [data, setData] = useState([
        {
            "id": "Serie 1",
            "data": [
              {
                "x": 2000,
                "y": 7
              },
              {
                "x": 2001,
                "y": 11
              },
              {
                "x": 2002,
                "y": 9
              },
              {
                "x": 2003,
                "y": 1
              },
              {
                "x": 2004,
                "y": 12
              }
            ]
          },
          {
            "id": "Serie 2",
            "data": [
              {
                "x": 2000,
                "y": 2
              },
              {
                "x": 2001,
                "y": 1
              },
              {
                "x": 2002,
                "y": 4
              },
              {
                "x": 2003,
                "y": 7
              },
              {
                "x": 2004,
                "y": 3
              }
            ]
          },
          {
            "id": "Serie 3",
            "data": [
              {
                "x": 2000,
                "y": 9
              },
              {
                "x": 2001,
                "y": 12
              },
              {
                "x": 2002,
                "y": 2
              },
              {
                "x": 2003,
                "y": 12
              },
              {
                "x": 2004,
                "y": 5
              }
            ]
          },
          {
            "id": "Serie 4",
            "data": [
              {
                "x": 2000,
                "y": 1
              },
              {
                "x": 2001,
                "y": 4
              },
              {
                "x": 2002,
                "y": 3
              },
              {
                "x": 2003,
                "y": 10
              },
              {
                "x": 2004,
                "y": 2
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
        <Heading color='white'>BUMP CHART</Heading>
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
        <ResponsiveBump
        data={data}
        xPadding={dyValues.xPadding}
        theme={{textColor: '#FFFFFF'}}
        colors={{ scheme: dyValues.colors }}
        lineWidth={dyValues.lineWidth}
        activeLineWidth={6}
        opacity={dyValues.opacity}
        inactiveLineWidth={3}
        interpolation = {dyValues.interpolation}
        inactiveOpacity={0.15}
        pointSize={dyValues.pointSize}
        activePointSize={16}
        inactivePointSize={0}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={dyValues.pointBorderWidth}
        activePointBorderWidth={3}
        pointBorderColor={{ from: 'serie.color' }}
        enableGridX={dyValues.gridX}
        enableGridY={dyValues.gridY}
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
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
        axisRight={null}
    />
        </Flex>
      </Flex>
      <BumpChartFunctions setValue={setValue} setBooleanValue={setBooleanValue} finalData={finalData} setFinalData={setFinalData} createData={createData} setData={setData} />
    </>
    )
}

export default BumpChart;