import React from 'react'
import { Card } from "react-bootstrap";

export default function RouteComponent({route}) {
    return (
    <div className="row justify-content-center mt-5 border" >
        <Card border="primary" style={{ width: '18rem' }} className="m-2">
            <Card.Body>
                <Card.Title>Start of Line </Card.Title>
                <Card.Text>
                {route.originationName}
                </Card.Text>
            </Card.Body>
        </Card>

        <Card border="primary" style={{ width: '18rem' }} className="m-2">
            <Card.Body>
                <Card.Title>End of Line </Card.Title>
                <Card.Text>
                {route.destinationName}
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
    )
}
