import { Flex, Text, Box, Button, HStack } from "@chakra-ui/react";
import { ResponsiveLine } from "@nivo/line";

export const data = [
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

const LineChartComp = ({ data }) => {
  return (
    <>
      <Flex
        height="63vh"
        padding="10px"
        width="100vw"
        overflowX="auto"
        bgColor='black'
      >
        <Flex
          height="60vh"
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
            curve="natural"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              orient: "bottom",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "transportation",
              legendOffset: 50,
              legendPosition: "middle",
            }}
            axisLeft={{
              orient: "left",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "count",
              legendOffset: -50,
              legendPosition: "middle",
            }}
            pointSize={10}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabelYOffset={-12}
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
    </>
  );
};

export default LineChartComp;
