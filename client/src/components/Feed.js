import React from "react";
import { Button, Container, Row, Col, Nav, Tab, Sonnet } from "react-bootstrap";
import HPIFeedCell from "./HPIFeedCell";

const FeedPage = () => {
    return (
        <Container className="my-4">
            <Row>
              <Col sm={12}>
                  <HPIFeedCell/>
              </Col>
            </Row>
        </Container>
      );

}

export default FeedPage;
