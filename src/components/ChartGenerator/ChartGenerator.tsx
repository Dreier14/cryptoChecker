import { observer } from "mobx-react-lite";
import { Container } from "react-bootstrap";
import { Chart } from "react-google-charts";
import { filterCoinData, options } from "./ChartGeneratorHelpers";
 
interface ICryptoChartValues {
    cryptoSymbol: Array<string> | undefined;
    cryptoData: Array<Record<string, string | number>> | undefined;
}


export const ChartGenerator: React.FC<ICryptoChartValues> = observer(({ cryptoSymbol, cryptoData }): JSX.Element =>  {
    const data = filterCoinData(cryptoSymbol, cryptoData);

    return (
        <>
            <Container>
                {
                    data.length > 1 ?
                        <Chart 
                            chartType="BarChart"
                            height="400px"
                            data={data}
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
