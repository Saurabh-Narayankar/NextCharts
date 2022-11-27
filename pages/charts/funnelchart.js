import { Flex, Heading } from "@chakra-ui/react";
import { ResponsiveFunnel } from "@nivo/funnel";
import { useState } from "react";
import FunnelChartFunctions from "../../components/charts/funnelChart/funnelChartFunctions";



const FunnelChart = () => {

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

  

  return (
    <>
    <Flex bgColor="blackAlpha.900" width="100%" height="4rem" justifyContent='center' alignItems='center'>
        <Heading color='white'>FUNNEL CHART</Heading>
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
      </Flex>
      <FunnelChartFunctions setData={setData} setValue={setValue} createData={createData} finalData={finalData} setFinalData={setFinalData} />
    </>
  );
};

export default FunnelChart;

