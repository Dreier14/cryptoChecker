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
        }, 5000);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>, inputValue: string) => {
        e.preventDefault();
        if (store.cryptoSymbol?.includes(inputValue)) {
            setStatusMessage('Coin has already been added');
            clearStatusMessage();
            return;
        }

        if (store.cryptoData?.filter(f =>  f.symbol === inputValue).length === 0) {
            setStatusMessage('Crypto Coin symbol was not found');
            clearStatusMessage();
            return;
        }

        store.setCryptoCurrencySymbol(inputValue);
        setInputValue('');
    }

    return (
        <Container fluid>
            <Col>
                <Row style={{marginLeft: '5px'}}>
                    Add Crypto Symbol:
                </Row>
                <br/>
                <Row>
                    <Form onSubmit={(e) => handleSubmit(e, inputValue)}>
                        <div style={{ display: "flex" }}>
                            <Form.Control size="lg" type="text" value={inputValue} placeholder="Add a crypto symbol" onChange={e => setInputValue((e.target.value.toUpperCase()))}/>
                            <Button variant="primary" disabled={inputValue === ''} type="submit" style={{ marginLeft: "15px"}}>
                                Add
                            </Button>
                        </div>
                    </Form>
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