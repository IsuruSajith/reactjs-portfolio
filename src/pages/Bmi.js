import React, { useState } from 'react';
import Header from "../components/Header";
import './css/Bmi.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export default function Bmi() {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmi, setBMI] = useState("");
    const [validationError, setValidationError] = useState("");

    const validateInput = () => {
        if (!height || !weight) {
            setValidationError("Please enter both height and weight.");
            return false;
        }
        if (isNaN(height) || isNaN(weight)) {
            setValidationError("Please enter valid numeric values for height and weight.");
            return false;
        }
        setValidationError("");
        return true;
    };

    const calculateBMI = () => {
        if (validateInput()) {
            const heightInMeters = height / 100;
            const bmiValue = weight / (heightInMeters * heightInMeters);
            setBMI(bmiValue.toFixed(2));
        } else {
            // Reset BMI when validation fails
            setBMI("");
        }
    };
    const renderTooltip = (props) => (<Tooltip id="button-tooltip" {...props}>
            Compute BMI
        </Tooltip>);

    return (<div className='bmi-container'>
        <div className='calculator d-flex flex-column justify-content-center align-items-center'>
            <h2 className='text-blue-800 underline'>BMI Calculator</h2>
            <div className='border border-gray-300 rounded-lg p-4'>
                <Tabs
                    defaultActiveKey="home"
                    transition={false}
                    id="noanim-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="home" title="Metric Units">
                        <>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Your Height (cm)"
                                className="mb-2"
                            >
                                <Form.Control type="text"
                                              placeholder="180cm"
                                              value={height}
                                              onChange={(e) => setHeight(e.target.value)}
                                />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Your Weight (kg)">
                                <Form.Control type="text"
                                              placeholder="kg"
                                              value={weight}
                                              onChange={(e)=>setWeight(e.target.value)}

                                />
                            </FloatingLabel>
                            {validationError && <p className="text-danger">{validationError}</p>}
                        </>

                        <br/>

                        <OverlayTrigger
                            placement="right"
                            delay={{show: 250, hide: 400}}
                            overlay={renderTooltip}
                        >

                            <Button variant="success" className='button' onClick={calculateBMI}>BMI</Button>
                        </OverlayTrigger>

                        <hr/>
                        {bmi && <h5>Your BMI: {bmi}</h5>}
                    </Tab>


                </Tabs>
            </div>
        </div>

    </div>)
}
