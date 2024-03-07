import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { IComponentProps } from "../../interfaces/IComponentProps";

export const Input: React.FC<IComponentProps> = observer(({ store }) => {
    const [inputValue, setInputValue] =  useState<string>('');
    const [statusMessage, setStatusMessage] =  useState<string | undefined>(undefined);

    const clearStatusMessage = () => {
        setTimeout(() => {
            setStatusMessage(undefined)
        }, 5000)
    }

    const handleInput = (e: string) => {
        setInputValue(e);
    }

    const handleSubmit = (e: string) => {
        if (store.cryptoSymbol?.includes(e)) {
            setStatusMessage('Coin has already been added');
            clearStatusMessage();
            return;
        }

        if (store.cryptoData?.filter(f =>  f.symbol === e).length === 0) {
            setStatusMessage('Crypto Coin symbol was not found');
            clearStatusMessage();
            return;
        }

        store.setCryptoCurrencySymbol(e);
    }

    return (
        <Container fluid>
            <Col>
                <Row style={{marginLeft: '5px'}}>
                    Add Crypto Symbol:
                </Row>
                <br/>
                <Row>
                    <div style={{ display: "flex"}}>
                        <Form.Control size="lg" type="text" placeholder="Add a crypto symbol" onChange={e => handleInput(e.target.value)}/>
                            <Button variant="primary" onClick={() => handleSubmit(inputValue)} style={{ marginLeft: "15px"}}>
                            Add
                        </Button>
                    </div>
                </Row>
                { 
                    statusMessage ?
                        <Row style={{ marginLeft: "250px"}}>
                            <br/>
                            {statusMessage}
                        </Row>  : null
                }       
            </Col>
        </Container>
    );
})