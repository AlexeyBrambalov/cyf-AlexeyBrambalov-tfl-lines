import React, {useState, useEffect} from 'react'
import { Form } from "react-bootstrap";

export default function SecondSearch({mode, setRoute}) {

    const [list, setList]=useState([])

    useEffect(() => {
        fetch(`https://api.tfl.gov.uk/Line/Mode/${mode}`)
          .then((res) => res.json())
          .then((data) => {
            setList(data.map(mode => mode.id));
          })
          .catch((err) => {
            console.error(err);
          });
      }, [mode]);


    return (
        <Form.Control
            as="select"
            size="lg"
            className="col-10 ml-auto mr-auto mt-3"
            onChange={event => setRoute(event.target.value)}
        >
            <option key="-1" value="">
                Choose a route number...
            </option>
            {list.map((mode, id) => {
                return (
                <option key={id} value={mode}>
                    {mode}
                </option>
                );
            })}
        </Form.Control>
    )
}
