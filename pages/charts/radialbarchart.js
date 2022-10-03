import { Text, Flex } from "@chakra-ui/react";
import { ResponsiveRadialBar } from '@nivo/radial-bar'
import { useState } from "react";
import RadialbarFunctions from "../../components/charts/radialBarChart/radialBarFunctions";

const RadialBarChart = () => {

    const [dyValues, setDyValues] = useState({startAngle: 0, endAngle: 270, cornerRadius: 0, padding: 0.2, innerRadius: 0.3, radialGrid: true, circularGrid: true, track: true, labels: false, colors: 'nivo' })
    const [finalData, setFinalData] = useState([{id: '', data: [{x: '', y: null}]}])
    const [data, setData] = useState([
        {
          "id": "Supermarket",
          "data": [
            {
              "x": "Vegetables",
              "y": 295
            },
            {
              "x": "Fruits",
              "y": 231
            },
            {
              "x": "Meat",
              "y": 157
            },
            {
              "x": "Fish",
              "y": 206
            }
          ]
        },
        {
          "id": "Combini",
          "data": [
            {
              "x": "Vegetables",
              "y": 1
            },
            {
              "x": "Fruits",
              "y": 94
            },
            {
              "x": "Meat",
              "y": 195
            },
            {
              "x": "Fish",
              "y": 41
            }
          ]
        },
        {
          "id": "Online",
          "data": [
            {
              "x": "Vegetables",
              "y": 140
            },
            {
              "x": "Fruits",
              "y": 237
            },
            {
              "x": "Meat",
              "y": 262
            },
            {
              "x": "Fish",
              "y": 36
            }
          ]
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
    


    return(
        <>
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
          <ResponsiveRadialBar
        data={data}
        valueFormat=">-.2f"
        startAngle={dyValues.startAngle}
        endAngle={dyValues.endAngle}
        innerRadius={dyValues.innerRadius}
        theme={{ textColor: "#ffffff" }}
        padding={dyValues.padding}
        enableRadialGrid={dyValues.radialGrid}
        enableCircularGrid={dyValues.circularGrid}
        cornerRadius={dyValues.cornerRadius}
        enableTracks={dyValues.track}
        enableLabels={dyValues.labels}
        colors={{ scheme: dyValues.colors }}
        margin={{ top: 30, right: 120, bottom: 5, left: 40 }}
        radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
        circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '3'
                ]
            ]
        }}
        tracksColor='rgba(206,206,206,0.23)'
        legends={[
            {
                anchor: 'right',
                direction: 'column',
                justify: false,
                translateX: -75,
                translateY: 0,
                itemsSpacing: 6,
                itemDirection: 'left-to-right',
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                symbolSize: 18,
                symbolShape: 'square',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
        </Flex>
      </Flex>
      <RadialbarFunctions setValue={setValue} setBooleanValue={setBooleanValue} createData={createData} setData={setData} finalData={finalData} setFinalData={setFinalData}  />
    </>
    )
}

export default RadialBarChart;