import { observer } from "mobx-react-lite";
import { Container } from "react-bootstrap";
import { Chart } from "react-google-charts";
import { filterCoinData, options } from "./ChartGeneratorHelpers";
 
interface ICryptoChartValues {
    cryptoSymbol: Array<string> | undefined;
    cryptoData: Array<Record<string, string | number>> | undefined;
}

export const ChartGenerator: React.FC<ICryptoChartValues> = observer(({ cryptoSymbol, cryptoData }): JSX.Element =>  {
    const chartData = filterCoinData(cryptoSymbol, cryptoData);
    const hasChartData: boolean = chartData.length > 1;
    return (
        <>
            <Container>
                {
                    hasChartData ?
                        <Chart 
                            chartType="BarChart"
                            height="400px"
                            data={chartData}
                            options={options}
                        /> :
                        <div style={{textAlign: 'center'}}>
                            No Current Data to Display
                        </div>
                }
            </Container>
        </>
    )
})
