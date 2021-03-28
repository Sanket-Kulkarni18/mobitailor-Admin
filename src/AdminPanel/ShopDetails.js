import { Input, Switch, Typography } from "@material-ui/core";
import React from "react";
import { Row, Card, Col } from "reactstrap";

function ShopDetails({ shopObj }) {
  return shopObj ? (
    <>
      <Card style={{ padding: "0.8em", margin: "0.4em" }}>
        <Row>
          <Col lg={4}>
            <Typography>Shop Name:</Typography>
          </Col>
          <Col lg={8}>
            <Typography>{shopObj.Profile?.shopName}</Typography>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <Typography>Owner Name:</Typography>
          </Col>
          <Col lg={8}>
            <Typography>{shopObj.Profile?.ownerName}</Typography>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <Typography>Contact:</Typography>
          </Col>
          <Col lg={8}>
            <Typography>{shopObj.Profile?.ownerMobile}</Typography>
          </Col>
        </Row>
      </Card>
      <Card style={{ padding: "0.8em", margin: "0.4em" }}>
        <Row>
          <Col lg={4}>
            <Typography>Limit:</Typography>
          </Col>
          <Col lg={8}>
            <Input type="number" defaultValue={shopObj.PaymentDetails?.limit} />
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <Typography>Is Paid Member:</Typography>
          </Col>
          <Col lg={8}>
            <Switch value={shopObj.PaymentDetails?.paidMember} />
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <Typography>Registration Date:</Typography>
          </Col>
          <Col lg={8}>
            <Typography>{shopObj.PaymentDetails?.registrationDate}</Typography>
          </Col>
        </Row>
      </Card>
    </>
  ) : (
    <>Empty</>
  );
}

export default ShopDetails;
