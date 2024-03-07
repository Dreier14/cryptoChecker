export const getCoinList = (cryptoSymbol: Array<string>) => {
    return (
        <>
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