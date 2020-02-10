import React from "react";
import "./Catalogue.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ItemForSale from "../../components/itemForSale";

class Catalogue extends React.Component {
    render() {
        const element = <ItemForSale id="1"
                                     title="Noctis Lucis Caelum"
                                     description="The True King that shall purge the blight from our star"
                                     pic_url="https://i.pinimg.com/originals/4a/86/ca/4a86caba9ef476185c494d25ce264f9f.jpg"/>;
        return (
            <div>
                {element}
            </div>
        );
    }
}
export default Catalogue;
