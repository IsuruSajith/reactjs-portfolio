import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './css/Experince.css'

export default function Experience() {

    return (

        <div>
            <hr/>
            <h3 className='w-100 text-center heading'>Professional Experience (2014-2023)</h3>
            <hr/>
            <Accordion className='w-100 justify-content-center d-flex flex-column align-items-center'
                       defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0" className='w-50'>
                    <Accordion.Header>
                        <div className='d-flex justify-content-between align-items-center w-100'>
                            <h6>Associate Software Engineer</h6><h6>Jan 2023 - Present</h6>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body className='description'>
                        <h6><u>IJSE - Institute of Software Engineering, Pandura.</u></h6>
                        I am a versatile developer with a portfolio showcasing diverse projects. <br/>The Point-of-Sale
                        System (POS) offers streamlined retail order processing with Java, Spring Boot, and React. Pic
                        Vibe introduces seamless photo sharing using Java, MySQL, and Angular. <br/>The Library-Management
                        System (LMS) efficiently administers library transactions with Java, Hibernate, and Docker. <br/>A
                        MiniGame explores JavaScript and responsive design. <br/>Task Breeze provides dynamic task management
                        through Jakarta Servlets and JavaServer Pages (JSP). <br/>I've also recreated Tesla's website with
                        precision using HTML, CSS, and ECMA Script. My projects highlight my prowess in frontend,
                        backend, and full-stack development, ensuring engaging user experiences. <br/>See the <b>Project</b> tab for more details about the above projects.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className='w-50'>
                    <Accordion.Header>
                        <div className='d-flex justify-content-between align-items-center w-100'>
                            <h6>Operation Engineer</h6><h6>Sep 2020 - Dec 2022</h6>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body className='description'>
                        <h6><u>SBC Asia pvt ltd, Peliyagoda.</u></h6>
                        <ol>
                            <li><b>Petroleum Storage Tank Calibration (Upright, Underground,
                                Horizontal, etc.)</b><br/>
                                Calibrated Petroleum Storage Tanks according to <b>API MPMS Chapter
                                    2.2A</b> for following type tanks;<br/>
                                <ul>
                                    <li>Vertical Tanks - CPSTL Kolonnawa, Sri Lanka.</li>
                                    <li>Vertical Tanks - CPSTL Kolonnawa, Sri Lanka.</li>
                                    <li>Cylindrical Tanks</li>
                                    <li>Fixed Roof Tanks</li>
                                    <li>Floating Roof Tanks - CPSTL Kolonnawa, Sri Lanka.</li>
                                </ul>
                            </li>
                            <li><b>Petroleum Inspection (Surveyor)</b><br/>
                                Working as a Petroleum Surveyor regarding the following
                                responsibilities;<br/>
                                <ul>
                                    <li>Quantity determination inspections of shore tanks, railcars, and
                                        tank trucks for quantity surveys of a variety of commodities
                                        including petroleum and petrochemicals inspections and collects
                                        samples for laboratory analysis.
                                    </li>
                                    <li>Physically sample, measure, and take the temperature of shore
                                        tanks utilizing a variety of methods dictated by company and API
                                        procedures.
                                    </li>
                                    <li>Calculate and report quantities transferred (Outturn) and perform
                                        full reconciliation of same.
                                    </li>
                                    <li>Accurately complete all required reports and forms (Ullage
                                        reports, Pumping logs, VEF, Timesheet, etc.).
                                    </li>
                                    <li>Work in cooperation with client’s representatives, Customs, vessel
                                        personnel, government agents (Ceylon Petroleum Cooperation)
                                        and shore facility personnel (Ceylon Petroleum Storage Terminals
                                        Limited) to ensure accurate results are achieved.
                                    </li>
                                    <li>Maintain regular communication with office staff with reference
                                        to job status, problems, concerns, etc.
                                    </li>
                                    <li>Provide guidance and assist in the training of Inspector Trainees.</li>
                                </ul>

                            </li>
                            <li><b>Any kind of Quality (Chemically) and Quantity Inspection</b><br/>
                                Wheat Inspection is done for Prima Ceylon Pvt Ltd
                                <ul>
                                    <li>Quantity checking (Outturn)</li>
                                    <li>Quality check wheat flour, bags.</li>
                                    <li>Container Inspection (whether food grade or not.)</li>
                                </ul>
                            </li>
                        </ol>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className='w-50'>
                    <Accordion.Header>
                        <div className='d-flex justify-content-between align-items-center w-100'>
                            <h6>Junior Miller</h6><h6>Feb 2020 - Aug 2020</h6>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body className='description'>
                        <h6><u>Aussee Oats Milling Pvt. Ltd.</u></h6>
                        <b>Trained and learnt overall milling process and the way of business
                            with related all departments (Mill, R & D, Bulk, Retail, Logistics, and
                            Maintenance).</b>
                        <ul>
                            <li>Worked as 'Trainee Miller' at milling department. Re-design and
                                optimized, current 'Oats Mix Flour' milling operation.
                            </li>
                            <li>hanged collecting points of raw materials.</li>
                            <li>Investigated new Feeding method Investigated quality checking
                                criteria and parameters.
                            </li>
                            <li>Schedule for flour milling (Peak / off-peak).</li>
                            <li>Run the flour mill according to the new design for 3 weeks and
                                produced 180 tonnes of 'Oats mix flour' as a successful trial.
                            </li>
                        </ul>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className='w-50'>
                    <Accordion.Header>
                        <div className='d-flex justify-content-between align-items-center w-100'>
                            <h6> Technical Officer</h6><h6>Sep 2014 - Oct 2025</h6>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body className='description'>
                        <h6><u>SUNPOWER CONSTRUCTIONS PVT. LTD.</u></h6>
                        <ul>
                            <li>Construction of pipe-laying, culvert crossing, rock-breaking was
                                supervised.
                                </li>
                            <li>
                                Monthly progress reports, Fortnight reports, as-built reports were made
                                as technical officer.
                            </li>
                        </ul>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>)
}
