import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './css/Experince.css'

export default function Experience() {

    return (

    <div>
        <hr/>
      <h3 className='w-100 text-center heading'>Professional Experience (2014-2023)</h3>
        <hr/>
        <Accordion className='w-100 justify-content-center d-flex flex-column align-items-center' defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey="0" className='w-50'>
                <Accordion.Header><h5>Associate Software Engineer</h5></Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className='w-50'>
                <Accordion.Header>Operation Engineer</Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className='w-50'>
                <Accordion.Header><h5>Junior Miller</h5></Accordion.Header>
                <Accordion.Body>
                    <h6>Aussee Oats Milling Pvt. Ltd.</h6>
                    Trained and learnt overall milling process and the way of business
                    with related all departments (Mill, R & D, Bulk, Retail, Logistics, and
                    Maintenance).
                    ◦ Worked as 'Trainee Miller' at milling department. Re-design and
                    optimized, current 'Oats Mix Flour' milling operation.
                    ◦ Changed collecting points of raw materials.◦ Investigated new Feeding method Investigated quality checking
                    criteria and parameters.
                    ◦ Schedule for flour milling (Peak / off-peak).
                    ◦ Run the flour mill according to the new design for 3 weeks and
                    produced 180 tonnes of 'Oats mix flour' as a successful trial.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className='w-50'>
                <Accordion.Header>Technical Officer</Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </div>
  )
}
