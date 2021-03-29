import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/database";
import { Col, ListGroup, ListGroupItem, Row, Spinner } from "reactstrap";
import ShopDetails from "./ShopDetails";
import { useHistory } from "react-router";
import ShopCard from "./ShopCard";
import Modal from "@material-ui/core/Modal";

function Adminpanel() {
  const history = useHistory();
  const [shops, setShops] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState();
  const [isBuffering, setIsBuffering] = useState(true);
  const usersRef = firebase.database().ref("Users");

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        history.push("/login");
      } else {
        getAllShopsData();
      }
    });
  }, []);

  const getAllShopsData = () => {
    usersRef
      .once("value")
      .then((snapshot) => {
        if (snapshot.exists()) {
          let data = snapshot.val();
          console.log(data);
          let shopData = [];
          for (const [shopId, shopObj] of Object.entries(data)) {
            shopData.push({
              shopId,
              Profile: {
                shopName: shopObj.Profile?.shopName
                  ? shopObj.Profile?.shopName
                  : "unknown",
                ownerName: shopObj.Profile?.ownerName
                  ? shopObj.Profile?.ownerName
                  : "unknown",
                ownerMobile: shopObj.Profile?.ownerMobile
                  ? shopObj.Profile?.ownerMobile
                  : "unknown",
              },
              PaymentDetails: {
                limit: shopObj.PaymentDetails?.limit
                  ? shopObj.PaymentDetails?.limit
                  : "unknown",
                paidMember: shopObj.PaymentDetails?.paidMember
                  ? shopObj.PaymentDetails?.paidMember
                  : false,
                registrationDate: shopObj.PaymentDetails?.registrationDate
                  ? shopObj.PaymentDetails?.registrationDate
                  : "unknown",
              },
            });
          }
          console.log(shopData);
          setShops(shopData);
        } else {
          console.error("Data not found in database!");
        }
      })
      .catch((err) => {
        console.error(err.message);
      });
    setIsBuffering(false);
  };

  return (
    <div>
      <h1 className="heading-navbar">Admin Panel</h1>
      <Row>
        <Col>
          {!isBuffering ? (
            <ListGroup className="shops-list">
              {shops &&
                shops.map((shopObj, index) => (
                  <ListGroupItem
                    key={index}
                    onClick={() => {
                      setSelectedIndex(index);
                    }}
                    style={{ margin: "4px", borderRadius: "4px" }}
                  >
                    <ShopCard shopObj={shopObj} index={index} />
                  </ListGroupItem>
                ))}
            </ListGroup>
          ) : (
            <Spinner color="primary" />
          )}
        </Col>
        <Col>
          {selectedIndex ? (
            <ShopDetails shopObj={shops[selectedIndex]} />
          ) : null}
        </Col>
      </Row>
    </div>
  );
}

export default Adminpanel;
