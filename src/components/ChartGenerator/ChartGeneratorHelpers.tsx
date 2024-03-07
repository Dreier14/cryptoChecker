export const options = {
    title: "Crypto Coin Prices",
    chartArea: { width: "50%" },
    hAxis: {
      title: "Coin Price",
      minValue: 0,
    },
    vAxis: {
      title: "Crypto Coin",
    },
};

export const filterCoinData = (cryptoSymbol: string[] | undefined, cryptoData: Record<string, string | number>[] | undefined) => {
    const dataArr: Array<Array<Record<string, string | number>>> = [];
    const finalDataArr: Array<Array<string | number>> = [["Coin", "$ USD"]];
     if (cryptoData && cryptoSymbol) {
         cryptoSymbol.map(e => {
             const copiedArr = cryptoData;
             dataArr.push(copiedArr.filter(f => f.symbol === e));
         });
     }

     const flattenedData = dataArr.flat();

     flattenedData.map(e => {
         finalDataArr.push([e.symbol as string, parseInt(e.price_usd as string)])
     })

     return finalDataArr;
 }
