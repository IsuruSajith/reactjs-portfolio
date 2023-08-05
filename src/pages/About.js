import React from 'react'
import {Link} from 'react-router-dom'
import Bootstraptest from '../components/Bootstraptest'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


export default function About() {
    return (<div>This is about page

            <br/>
            <Link to='/Home'>Home</Link>

            <hr/>
            <Bootstraptest/>
            <hr/>
            this is the section for navi

            <div>
                <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="home" title="Home">
                        Tab content for Home
                    </Tab>
                    <Tab eventKey="profile" title="Profile">
                        Tab content for Profile
                    </Tab>
                    <Tab eventKey="contact" title="Contact" >
                        Tab content for Contact
                    </Tab>
                </Tabs>
            </div>


        </div>

    )
}
