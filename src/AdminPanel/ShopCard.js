import { Typography } from "@material-ui/core";
import React from "react";
import { Col, Row } from "reactstrap";

const ShopCard = ({ shopObj, index }) => {
  return (
    <div>
      <Row>
        <Col lg={1} style={{ margin: "auto" }}>
          <Typography>{index + 1}</Typography>
        </Col>
        <Col lg={11}>
          <Row>
            <Col lg={12}>
              <Typography
                style={{
                  fontSize: "1.2em",
                  fontWeight: "bold",
                }}
              >
                {shopObj.Profile?.shopName}
              </Typography>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Typography
                style={{
                  fontSize: "0.9em",
                  fontWeight: "normal",
                  color: "grey",
                }}
              >
                {shopObj.Profile?.ownerName}
              </Typography>
            </Col>
            <Col lg={6}>
              <Typography
                style={{
                  fontSize: "0.9em",
                  fontWeight: "normal",
                  color: "grey",
                }}
              >
                {shopObj.Profile?.ownerMobile}
              </Typography>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ShopCard;
