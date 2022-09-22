import { useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import LineChartFunctions from "../../components/charts/linechartFunctions";
import { Text, Flex } from "@chakra-ui/react";


const LineChart = () => {

    const [dyValues, setDyValues] = useState({ legendXAxis: '', legendYAxis: '', axisBottom: true, axisLeft: true, gridX: true, gridY: true  })

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
    


    const data = [
        {
          id: "japan",
          color: "hsl(184, 70%, 50%)",
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
      ];

    return(
        <>
      <Flex
        height="65vh"
        padding="10px"
        width="100vw"
        overflowX='scroll'
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
              stacked: true,
              reverse: false,
            }}
            yFormat=" >-.2f"
            curve={dyValues.curve}
            axisTop={null}
            axisRight={null}
            axisBottom={dyValues.axisBottom ? {
                orient: "bottom",
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend:dyValues.legendXAxis,
                legendOffset: 50,
                legendPosition: "middle",
              } : null}
            axisLeft={dyValues.axisLeft ? {
                orient: "left",
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: dyValues.legendYAxis,
                legendOffset: -50,
                legendPosition: "middle",
              } : null}
            enableGridX={dyValues.gridX}
            enableGridY={dyValues.gridY}
            colors={{ scheme: 'nivo' }}
            pointSize={9}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            enablePointLabel={false}
            pointLabelYOffset={-12}
            enableArea={true}
            areaBaselineValue={60}
            areaOpacity={0.25}
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
      <LineChartFunctions setValue={setValue} setDyValues={setDyValues} setBooleanValue={setBooleanValue} />
    </>
    )
}

export default LineChart;