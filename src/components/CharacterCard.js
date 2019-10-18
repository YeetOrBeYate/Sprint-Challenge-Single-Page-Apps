import React from "react";
import {Card,CardImg,CardBody,CardTitle,CardSubtitle,} from "reactstrap";

export default function CharacterCard(props) {
  return (
    <div key={props.key}>
      <Card>
        <img className = "bruh" src={props.img} alt="Card image cap" />
        <CardBody>
            <CardTitle>{props.name}</CardTitle>
            <CardSubtitle>{props.spec}</CardSubtitle>
            <CardSubtitle>{props.gender}</CardSubtitle>
            <CardSubtitle>{props.status}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
}
