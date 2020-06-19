import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

import HeaderImage from '../images/header-image.jpg'

export default function Header() {
    return (
    <Container fluid>
      <Row>
        <Col className="header">
          <img src={HeaderImage} alt="header" />
        </Col>
      </Row>
    </Container>
    )
}
