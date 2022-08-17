import React from "react";
import Layout from "../../Layout";
import "./Member.scss";
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import AddToCalendar from 'react-add-to-calendar'
import { Col, Row } from "react-bootstrap";
import 'font-awesome/css/font-awesome.min.css';


export default function Member() {
 
  const event = {
    start: "2019-12-29",
    end: "2019-12-31",
    duration: [1, "day"],
    title: "Anand birthday",
    description: "Get ready for the party of your life!",
    location: "Internet",
    busy: true,
    guests: [
      "friend@example.com",
      "coworker@oswaldlabs.com"
    ]
  };

  return (
  <Layout>
    <Container className="MemberContainer">
	    <Tabs defaultActiveKey="Engineering" id="uncontrolled-tab-example" className ="team-tabs">
	      /*<Tab eventKey="Tech" title="Tech" style={{backgroundColor: 'white'}}>
          <div class="text-center">
            <h1 class="display-4 font-italic">Technology Team</h1>
          <Row>
            <Col>
              <h4 class="h4 bold">Meetings</h4>
              <h6 class="h5 bold">Tuesdays: 6-7PM</h6>
              <br/>
              <AddToCalendar event={event}></AddToCalendar>
            </Col>
            <Col style={{textAlign: 'right'}}>
              <Image className="d-block center" style={{height: '140px', width: '140px'}} src={require("../../static/images/ChrisLinkedIn.jpg")} roundedCircle />
            </Col>
            <Col style={{textAlign: 'right'}}>
              <p class="h4 bold">Tech Team Contact:</p>
              <p class="h5 bold">Chris Gilbertson</p>
                <ul>
                  <p class="h6 bold">Year: Senior</p>
                  <p class="h6 bold">Major: Computer Science</p>
                  <p class="h6 bold">Email: ctgilbertson@wisc.edu</p>
                </ul> 
            </Col>
          </Row>
          <hr></hr>
            <Image className="m-auto" fluid src={require("../../static/images/techteam.jpg")}/> 
            <p className="lead my-1"> The Helios Tech Team is focused on Computer Science and coding. 
                                      For the Fall 2020 semester we redesigned the Helios website to 
                                      run on React.js and bootstrap.  </p>
          </div>
	      </Tab>*/
        <Tab eventKey="Engineering" title="Engineering" style={{backgroundColor: 'white'}}>
          <div class="text-center">
            <h1 class="display-4 font-italic">Engineering Team</h1>
          <Row>
            <Col>
              <h4 class="h4 bold">Meetings</h4>
              <h6 class="h5 bold">check back soon!</h6>
              <br/>
              <AddToCalendar event={event}></AddToCalendar>
            </Col>
            <Col style={{textAlign: 'right'}}>
              <Image className="d-block center" style={{height: '140px', width: '140px'}} src={require("../../static/images/simon.jpg")} roundedCircle />
            </Col>
            <Col style={{textAlign: 'right'}}>
              <p class="h4 bold">Engineering Team Contact:</p>
              <p class="h5 bold">Jack Audi</p>
                <ul>
                  <p class="h6 bold">Year: Senior</p>
                  <p class="h6 bold">Major: Chemical Engineering</p>
                  <p class="h6 bold">Email: audi@wisc.edu</p>
                </ul> 
            </Col>
          </Row>
          <hr></hr>
            <Image className="m-auto" fluid src={require("../../static/images/engineeringTeam.jpg")}/>
            <p className="lead my-1"> The Engineering team within Helios works on projects with the 
             university that aim to increase the use of renewable energy (primarily solar) on campus.
             We believe the projects we engage in help move us towards a clean energy economy and 
             improve the campus experience for all. 
             </p>
          </div>
	      </Tab>
        <Tab eventKey="Energy" title="Energy" style={{backgroundColor: 'white'}}>
          <div class="text-center">
            <h1 class="display-4 font-italic">Energy Team</h1>
          <Row>
            <Col>
              <h4 class="h4 bold">Meetings</h4>
              <h6 class="h5 bold">check back soon!</h6>
              <br/>
              <AddToCalendar event={event}></AddToCalendar>
            </Col>
            <Col style={{textAlign: 'right'}}>
              <Image className="d-block center" style={{height: '140px', width: '140px'}} src={require("../../static/images/jessie.jpg")} roundedCircle />
            </Col>
            <Col style={{textAlign: 'right'}}>
              <p class="h4 bold">Energy Team Contact:</p>
              <p class="h5 bold">Jon Starfeldt</p>
                <ul>
                  <p class="h6 bold">Year: Junior</p>
                  <p class="h6 bold">Major: Data Science</p>
                  <p class="h6 bold">Email: jstarfeldt@wisc.edu</p>
                </ul> 
            </Col>
          </Row>
          <hr></hr>
            <Image className="m-auto" fluid src={require("../../static/images/EnergyTeam.jpg")}/> 

            <p className="lead my-1"> The energy team works to make tangible sustainable change at UW Madison.
             We identify opportunities for emissions reductions and have conducted projects like solar installations 
             and efficient lighting. We get to work closely with UW administrators to determine goals, policy restrictions,
              and grant availability. We also work with engineering firms to determine costs and emissions. Any major
              and experience level is welcome, and we would love you to join us and get experience in the sustainability, 
              policy, and contract work! 
            Check out our panels on top of Gordon’s from the Nick.  </p>
          </div>
	      </Tab>
        <Tab eventKey="Business" title="Business" style={{backgroundColor: 'white'}}>
          <div class="text-center">
            <h1 class="display-4 font-italic">Business Team</h1>
          <Row>
            <Col>
              <h4 class="h4 bold">Meetings</h4>
              <h6 class="h5 bold">check back soon!</h6>
              <br/>
              <AddToCalendar event={event}></AddToCalendar>
            </Col>
            <Col style={{textAlign: 'right'}}>
              <Image className="d-block center" style={{height: '140px', width: '140px'}} src={require("../../static/images/ryan.jpg")} roundedCircle />
            </Col>
            <Col style={{textAlign: 'right'}}>
              <p class="h4 bold">Business Team Contact:</p>
              <p class="h5 bold"></p>
                <ul>
                  <p class="h6 bold">Year: </p>
                  <p class="h6 bold">Major: </p>
                  <p class="h6 bold">Email: </p>
                </ul> 
            </Col>
          </Row>
          <hr></hr>
            /*<Image className="m-auto" fluid src={require("../../static/images/techteam.jpg")}/>*/

            <p className="lead my-1"> 
            /*The business team...*/ The business team runs Helios social media accounts and manages the club's finances.</p> 
              </p>
          </div>
	      </Tab>
        <Tab eventKey="Outreach" title="Outreach" style={{backgroundColor: 'white'}}>
          <div class="text-center">
            <h1 class="display-4 font-italic">Outreach Team</h1>
          <Row>
            <Col>
              <h4 class="h4 bold">Meetings</h4>
              <h6 class="h5 bold">check back soon!</h6>
              <br/>
              <AddToCalendar event={event}></AddToCalendar>
            </Col>
            <Col style={{textAlign: 'right'}}>
              <Image className="d-block center" style={{height: '140px', width: '140px'}} src={require("../../static/images/simon.jpg")} roundedCircle />
            </Col>
            <Col style={{textAlign: 'right'}}>
              <p class="h4 bold">Outreach Team Contact:</p>
              <p class="h5 bold">Ameya Baxi</p>
                <ul>
                  <p class="h6 bold">Year: Sophomore</p>
                  <p class="h6 bold">Major: Environmental Sciences</p>
                  <p class="h6 bold">Email: abaxi@wisc.edu</p>
                </ul> 
            </Col>
          </Row>
          <hr></hr>
            /*<Image className="m-auto" fluid src={require("../../static/images/engineeringTeam.jpg")}/>*/
            <p className="lead my-1"> The Outreach Team works on media and events to educate the community about Helios and renewable energy.</p>
          </div>
	      </Tab>
	 </Tabs>
    </Container>
  </Layout>
    );
}
