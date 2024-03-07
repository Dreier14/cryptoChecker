export const getCoinList = (cryptoSymbol: Array<string>) => {
    return (
        <>
            <div style={{margin:"auto", width: "15%"}}>
                <ul>
                    {
                        cryptoSymbol.map((e, i) => {
                            return (
                                <li key={i}>
                                    {e}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    );
}

export const getNoData = () => {
    return (
        <>
            <div style={{textAlign: 'center'}}>
                No coins have been added yet.
            </div>
        </>
    );
}