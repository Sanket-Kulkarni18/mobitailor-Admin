import { Input, Switch, Typography } from "@material-ui/core";
import React, { useState,useEffect } from "react";
import { Row, Card, Col, Label, Button } from "reactstrap";
import { BsPencilSquare } from "react-icons/bs";
import firebase from "firebase/app";
import "firebase/database";

const ShopDetails = ({ shopObj }) => {
  const [editShop, setEditShop] = useState(false);
  const [editPayment, setEditPayment] = useState(false);
  const [shopName, setShopName] = useState();
  const [ownerName, setOwnerName] = useState();
  const [ownerMobile, setOwnerMobile] = useState();
  const [limit, setLimit] = useState();

  const profileRef=firebase.database().ref(`Users/${shopObj.shopId}/Profile`);

  
  useEffect(() => {
    initialStates();
  }, [])

  const initialStates=()=>{
    setShopName(shopObj.Profile?.shopName);
    setOwnerName(shopObj.Profile?.ownerName);
    setOwnerMobile(shopObj.Profile?.ownerMobile);
    setLimit(shopObj.PaymentDetails?.limit);
  };
  const saveToDatabase=()=>{
    shopObj.Profile={
      shopName,
      ownerName,
      ownerMobile,
    }
    profileRef.set(shopObj.Profile)
    .then(()=>{console.log("database");})
    .catch(err=>console.log(err))
  };


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
                  <Input type="text" 
                  onChange={(e)=>{
                    e.preventDefault();
                    setShopName(e.target.value)
                  }}
                  defaultValue={shopName}
                  value={shopName} />
                 
                ) : (shopName?
                  <Typography>{shopName}</Typography>
                  :
                  <Typography>{shopName}</Typography>
                )}
              </Col>
            </Row>
            <Row>
              <Col lg={4}>
                <Typography>Owner Name:</Typography>
              </Col>
              <Col lg={8}>
              {editShop ? (
                  <Input type="text" 
                  onChange={(e)=>{
                    e.preventDefault();
                    setOwnerName(e.target.value)
                  }}
                  defaultValue={ownerName}
                  value={ownerName} />
                 
                ) : (ownerName?
                  <Typography>{ownerName}</Typography>
                  :
                  <Typography>{ownerName}</Typography>
                )}
              </Col>
            </Row>
            <Row>
              <Col lg={4}>
                <Typography>Contact:</Typography>
              </Col>
              <Col lg={8}>
              {editShop ? (
                  <Input type="text" 
                  onChange={(e)=>{
                    e.preventDefault();
                    setOwnerMobile(e.target.value)
                  }}
                  defaultValue={ownerMobile}
                  value={ownerMobile} />
                 
                ) : (ownerName?
                  <Typography>{ownerMobile}</Typography>
                  :
                  <Typography>{ownerMobile}</Typography>
                )}
              </Col>
            </Row>
            {editShop && (
              <Row style={{ display: "flex", justifyContent: "space-around" }}>
                <Button
                  color="primary"
                  onClick={() => {
                    setEditShop(false);
                    saveToDatabase();
                  }}
                >
                  Edit
                </Button>
                <Button
                  color="secondary"
                  onClick={() => {
                    setEditShop(false);
                    initialStates();
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
