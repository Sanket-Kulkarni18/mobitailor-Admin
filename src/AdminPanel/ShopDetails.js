import { Input, Switch, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Row, Card, Col, Label, Button } from "reactstrap";
import { BsPencilSquare } from "react-icons/bs";

const ShopDetails = ({ shopObj }) => {
  const [editShop, setEditShop] = useState(false);
  const [editPayment, setEditPayment] = useState(false);

  console.log(shopObj);

  return shopObj ? (
    <>
      <Card style={{ padding: "0.8em", margin: "0.4em" }}>
        <Row>
          <Col lg={11}>
            <Row>
              <Col lg={4}>
                <Typography>Shop Name:</Typography>
              </Col>
              <Col lg={8}>
                {editShop ? (
                  <Input type="text" defaultValue={shopObj.Profile?.shopName} />
                ) : (
                  <Typography>{shopObj.Profile?.shopName}</Typography>
                )}
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
            {editShop && (
              <Row style={{ display: "flex", justifyContent: "space-around" }}>
                <Button
                  color="primary"
                  onClick={() => {
                    setEditShop(false);
                  }}
                >
                  Edit
                </Button>
                <Button
                  color="secondary"
                  onClick={() => {
                    setEditShop(false);
                  }}
                >
                  Cancel
                </Button>
              </Row>
            )}
          </Col>
          <Col lg={1}>
            <div
              style={{
                borderRadius: "5px",
                textAlign: "center",
                margin: "auto",
              }}
            >
              <BsPencilSquare
                onClick={() => {
                  setEditShop(true);
                }}
              />
            </div>
          </Col>
        </Row>
      </Card>

      <Card style={{ padding: "0.8em", margin: "0.4em" }}>
        <Row>
          <Col lg={4}>
            <Label>Limit:</Label>
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
};

export default ShopDetails;
