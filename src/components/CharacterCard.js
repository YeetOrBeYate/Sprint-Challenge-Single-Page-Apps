import React from "react";
import {Card,CardImg,CardBody,CardTitle,CardSubtitle,} from "reactstrap";


export default function CharacterCard(props) {
  return (
    <div className="" key={props.key}>
      <Card>
        <img className = "bruh" src={props.img} alt="Card image cap" />
        <CardBody>
            <CardTitle>Name:{props.name}</CardTitle>
            <CardSubtitle>Species:{props.spec}</CardSubtitle>
            <CardSubtitle>Gender:{props.gender}</CardSubtitle>
            <CardSubtitle>Status:{props.status}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
}
