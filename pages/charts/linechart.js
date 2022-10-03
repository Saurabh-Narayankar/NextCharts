import { useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import LineChartFunctions from "../../components/charts/linechart/linechart-Component";
import { Text, Flex } from "@chakra-ui/react";


const LineChart = () => {

    const [dyValues, setDyValues] = useState({ curve: 'natural', colors: 'nivo', legendXAxis: '', legendYAxis: '', axisBottom: true, axisLeft: true, gridX: true, gridY: true, TickSizeX: 8, TickPaddingX: 8, TickSizeY: 5, TickPaddingY: 5, TickRotationX: 0, TickRotationY: 0, lineWidth: 2, Area: false, areaOpacity: 0.20, points: false, pointSize: 10, pointBorderWidth: 2, pointLabel: false, pointLabelYOffset: -12 })

    const [finalData, setFinalData] = useState([{id: '', data: [{x: '', y: ''}]}])
    const [data, setData] = useState(
      [
        {
          id: "japan",
          data: [
            {
              x: "plane",
              y: 76,
            },
            {
              x: "helicopter",
              y: 74,
            },
            {
              x: "boat",
              y: 164,
            },
            {
              x: "train",
              y: 3,
            },
            {
              x: "subway",
              y: 6,
            },
            {
              x: "bus",
              y: 55,
            },
            {
              x: "car",
              y: 232,
            },
            {
              x: "moto",
              y: 161,
            },
            {
              x: "bicycle",
              y: 119,
            },
            {
              x: "horse",
              y: 128,
            },
            {
              x: "skateboard",
              y: 12,
            },
            {
              x: "others",
              y: 247,
            },
          ],
        },
        {
          "id": "india",
          "color": "hsl(297, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 11
            },
            {
              "x": "helicopter",
              "y": 260
            },
            {
              "x": "boat",
              "y": 206
            },
            {
              "x": "train",
              "y": 43
            },
            {
              "x": "subway",
              "y": 15
            },
            {
              "x": "bus",
              "y": 287
            },
            {
              "x": "car",
              "y": 100
            },
            {
              "x": "moto",
              "y": 98
            },
            {
              "x": "bicycle",
              "y": 51
            },
            {
              "x": "horse",
              "y": 279
            },
            {
              "x": "skateboard",
              "y": 135
            },
            {
              "x": "others",
              "y": 264
            }
          ]
        },  
      ]
    )

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
          <ResponsiveLine
            data={data}
            theme={{ textColor: "#ffffff" }}
            margin={{ top: 50, right: 110, bottom: 60, left: 70 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              stacked: false,
              reverse: false,
            }}
            yFormat=" >-.2f"
            curve={dyValues.curve}
            axisTop={null}
            axisRight={null}
            axisBottom={dyValues.axisBottom ? {
                orient: "bottom",
                tickSize: dyValues.TickSizeX,
                tickPadding: dyValues.TickPaddingX,
                tickRotation: dyValues.TickRotationX,
                legend:dyValues.legendXAxis,
                legendOffset: 55,
                legendPosition: "middle",
              } : null}
            axisLeft={dyValues.axisLeft ? {
                orient: "left",
                tickSize: dyValues.TickSizeY,
                tickPadding: dyValues.TickPaddingY,
                tickRotation: dyValues.TickRotationY,
                legend: dyValues.legendYAxis,
                legendOffset: -60,
                legendPosition: "middle",
              } : null}
            enableGridX={dyValues.gridX}
            enableGridY={dyValues.gridY}
            colors={{ scheme: dyValues.colors }}
            lineWidth={dyValues.lineWidth}
            enablePoints={dyValues.points}
            pointSize={dyValues.pointSize}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={dyValues.pointBorderWidth}
            pointBorderColor={{ from: 'serieColor' }}
            enablePointLabel={dyValues.pointLabel}
            pointLabelYOffset={dyValues.pointLabelYOffset}
            enableArea={dyValues.Area}
            areaBaselineValue={0}
            areaOpacity={dyValues.areaOpacity}

            useMesh={true}
            legends={[
              {
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: "circle",
                symbolBorderColor: "rgba(0, 0, 0, .5)",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemBackground: "rgba(0, 0, 0, .03)",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
          />
        </Flex>
      </Flex>
      <LineChartFunctions setValue={setValue} setBooleanValue={setBooleanValue} setData={setData} createData={createData} finalData={finalData} setFinalData={setFinalData} />
    </>
    )
}

export default LineChart;