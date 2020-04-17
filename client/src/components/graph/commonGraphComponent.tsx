import React from "react";
import {
    VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack, VictoryTooltip, VictoryLabel
} from 'victory';

export interface CommonGraph {
    input: GraphData[][]
    yaxisLabel: (x: any) => string
}

export interface GraphData {
    x: string,
    y: number,
    label: string
}

const getTickValues = (content: GraphData[] | undefined) => {
    return Array.from(Array(content?.length).keys()).map((i) => i + 1)
}

const getTickFormat = (content: GraphData[] | undefined) => {
    return content?.map((c) => c.x)
}

const getBar = (input: GraphData[][]) => {
    return input.map((x) => {
        return <VictoryBar
            labelComponent={
                <VictoryTooltip />}
            data={x}
        />
    })
}

const CommonGraphComponent: React.FunctionComponent<CommonGraph> = ({ input, yaxisLabel: yaxis }) => {
    return (
        <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
            <VictoryAxis
                tickValues={getTickValues(input[0])}
                tickFormat={getTickFormat(input[0])}>
            </VictoryAxis>
            <VictoryAxis
                dependentAxis
                tickFormat={yaxis}
            />
            <VictoryStack>
                {getBar(input)}
            </VictoryStack>
        </VictoryChart>
    );
}

export default CommonGraphComponent;