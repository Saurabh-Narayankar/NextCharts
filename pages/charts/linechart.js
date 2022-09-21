import { Text } from "@chakra-ui/react";
import LineChartComp from "../../components/charts/linechart";
import { data } from "../../components/charts/linechart";

const LineChart = () => {

    return(
        <LineChartComp data={data}/>
    )
}

export default LineChart;