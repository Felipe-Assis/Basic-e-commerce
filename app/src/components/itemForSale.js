import { Card } from 'react-bootstrap';
import React from "react";
import Button from "react-bootstrap/Button";

class ItemForSale extends React.Component {
    render() {
        return (
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src={this.props.pic_url}/>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                    <Button variant="primary">Reservar</Button>
                </Card.Body>
            </Card>
        )
    }
}
export default ItemForSale;
