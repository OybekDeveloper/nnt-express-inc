import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import laptopImg from "../../Assets/about.png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { consultation, deliberation, evalution, finish, solution } from "../../img";

const dataRoadmap = [
  {
    id: 1,
    icon:consultation,
    title: "CONSULTATION",
    desc: `- We initiate the process by
    engaging with our clients to
    deeply understand their
    challenges, goals, and
    requirements.
    <br/>
    <br/>
    - Through in-depth discussions,
    we gather insights into their
    existing processes and areas for
    improvement`,
  },
  {
    id: 2,
    icon:deliberation,
    title: "DELIBERATION",
    desc: `- Internally, we collaborate to
    analyze the information
    gathered during the consultation
    phase.
    <br/>
    <br/>
    - Our team brainstorms ideas
    and explores potential solutions
    that align with the client's
    objectives.`,
  },
  {
    id: 3,
    icon:solution,
    title: "SOLUTION",
    desc: `- Leveraging our expertise, we
    design bespoke IT automation
    solutions tailored to address the
    specific needs identified during
    consultation.
    <br/>
    <br/>
    - Our focus is on developing
    innovative strategies that
    streamline workflows and
    enhance operational efficiency`,
  },
  {
    id: 4,
    icon:evalution,
    title: "EVALUATION",
    desc: `- We present the proposed
    solutions to the client for review
    and feedback.
    <br/>
    <br/>
    - Facilitating open
    communication, we iterate on
    the proposed solutions based on
    client input to ensure alignment`,
  },
  {
    id: 5,
    icon:finish,
    title: "FINALIZATION",
    desc: `- Fine-tuning and finalizing the
    chosen solution, we address all
    technical and logistical aspects
    to meet the client's
    requirements.
    <br/>
    <br/>
    - Our goal is to deliver a
    comprehensive solution that not
    only meets but exceeds our
    client's expectations`,
  },
];

function About() {
  return (
    <Container fluid className="about-section screen">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              textAlign: "start",
              justifyContent: "start",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <p className="clamp2">WELCOME TO</p>
            <h1 className="purple clamp" style={{ paddingBottom: "20px" }}>
              NNT EXPRESS INC
            </h1>
            <p className="clamp4">
              A leading IT company specializing in automation solutions. We're
              dedicated to simplifying and optimizing workflows through our
              advanced software platforms. With a focus on practicality and
              efficiency, we help businesses across various industries
              streamline their operations, saving time and resources.
              <br /> <br />
              At NNT Express, our goal is simple: to empower organizations with
              the tools they need to thrive in today's digital landscape.
              Through our proven expertise and commitment to innovation, we've
              successfully modernized countless businesses, delivering tangible
              results and measurable improvements.
            </p>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={12}
            style={{
              textAlign: "start",
              justifyContent: "start",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <p className="clamp2">A BRIEF HISTORY OF</p>
            <h1 className="purple clamp" style={{ paddingBottom: "20px" }}>
              Our Journey
            </h1>
            <p className="clamp4">
              NNT Express embodies a tale of innovation and adaptability, rooted
              in a commitment to excellence and driven by a passion for
              transformation. Established in 2020 within the logistics sector,
              NNT Express swiftly rose to prominence as a trusted partner,
              revolutionizing traditional workflows and setting new standards
              for efficiency and reliability.
              <br />
              <br />
              In 2023, recognizing the seismic shift towards digitalization, NNT
              Express embraced change and expanded its horizons into the realm
              of Information Technology (IT). This strategic pivot marked a
              defining moment in the company's evolution, as it embarked on a
              journey to harness the power of technology to shape the future of
              logistics.
              <br />
              <br />
              Under the visionary leadership of its founders, NNT Express
              swiftly became a trailblazer in the IT landscape, pioneering the
              development of essential platforms such as Electronic Logging
              Device (ELD) and Transportation Management System (TMS). These
              platforms not only streamlined logistics processes but also laid
              the foundation for a new era of innovation within the industry
            </p>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={12}
            style={{
              textAlign: "start",
              justifyContent: "start",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <Timeline roadmaps={dataRoadmap} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;

const Timeline = ({ roadmaps }) => {
  const centeredIconStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#9557c9",
    color: "#fff",
  };
  return (
    <VerticalTimeline>
      {roadmaps.map((item, idx) => (
        <VerticalTimelineElement
          key={idx}
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "transparent",
            color: "#fff",
            border: "1px solid #be50f4",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #be50f4" }}
          // date="2011 - present"
          iconStyle={centeredIconStyle}
          icon={<img className="w-[20px]" src={item.icon} alt="icon" />}
        >
          <h3 className="vertical-timeline-element-title">{item?.title}</h3>
          <p
            className="text-[16px] font-[500] text-[#2C2738]"
            dangerouslySetInnerHTML={{
              __html: item.desc,
            }}
          ></p>
        </VerticalTimelineElement>
      ))}

      {/* <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
      /> */}
    </VerticalTimeline>
  );
};
