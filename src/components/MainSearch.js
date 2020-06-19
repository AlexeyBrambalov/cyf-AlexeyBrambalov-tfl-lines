import React, {useState, useEffect} from 'react'
import { Form } from "react-bootstrap";

export default function MainSearch({setMode}) {

    const [modes, setModes]=useState([])


    useEffect(() => {
      fetch("https://api.tfl.gov.uk/Line/Meta/Modes")
        .then((res) => res.json())
        .then((data) => {
          setModes(data.filter(mode => mode.isScheduledService).map(mode => mode.modeName));
        })
        .catch((err) => {
          console.error(err);
        });
    }, []);


    return (
        <Form.Control
            as="select"
            size="lg"
            className="col-10 ml-auto mr-auto mt-3"
            onChange={event => setMode(event.target.value)}
        >
            <option key="-1" value="">
                Choose a Mode of Transport ...
            </option>
            {modes.map((mode, id) => {
                return (
                <option key={id} value={mode}>
                    {mode}
                </option>
                );
            })}
         </Form.Control>
    )
}
