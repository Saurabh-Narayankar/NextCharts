import { useState } from 'react'
import { Flex } from "@chakra-ui/react";
import { ResponsiveBump } from '@nivo/bump'
import BumpChartFunctions from "../../components/charts/bumpchart/bumpChartFunctions";

const BumpChart = () => {

    const [dyValues, setDyValues] = useState({tickSizeX: 8, tickPaddingX: 8, tickRotationX: 0, legendXAxis: '', spacing: 0, xPadding: 0.6, interpolation: 'smooth', colors: 'nivo', fieldOpacity: 0.8, borderWidth: 1, borderOpacity: 1,})
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
        theme={{textColor: '#FFFFFF'}}
        colors={{ scheme: 'nivo' }}
        lineWidth={3}
        activeLineWidth={6}
        inactiveLineWidth={3}
        inactiveOpacity={0.15}
        pointSize={10}
        activePointSize={16}
        inactivePointSize={0}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={3}
        activePointBorderWidth={3}
        pointBorderColor={{ from: 'serie.color' }}
        axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -36
        }}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
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