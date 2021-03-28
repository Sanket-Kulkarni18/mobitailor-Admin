import React,{useState,useEffect} from 'react';
import firebase from "firebase/app";
import "firebase/database";
import{Card,Col,ListGroup,ListGroupItem,Row,Spinner} from "reactstrap"
import ShopDetails from './ShopDetails';

function Adminpanel() {
    const [customer, setCustomer] = useState();
    const [shopname, setShopname] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState();
    const [paymentDetails, setPaymentDetails] = useState([])
    const [isbuffering, setIsbuffering] = useState(false);
    var i=1;
    const Users = firebase.database().ref("Users");
    useEffect(() => {
        Users.on("value",(s)=>{
            setCustomer(s.val());
        });
    }, []);
    useEffect(() => {
        var shops=[];
        var payments=[];
        for (const property in customer) {
           shops.push({
               shopName:customer[property].Profile?.shopName,
               ownerName:customer[property].Profile?.ownerName,
               ownerMobile:customer[property].Profile?.ownerMobile,
           });
           payments.push({
            limit:customer[property].PaymentDetails?.limit,
            paidMember:customer[property].PaymentDetails?.paidMember,
            registrationDate:customer[property].PaymentDetails?.registrationDate,
        });
            i++;
          };
          setShopname(shops);
          setPaymentDetails(payments);
          if (customer) {
            setIsbuffering(true);              
          }

    }, [customer]);
    return (
        <div>
            <Row>
                <Col> <h1>admin panel</h1>
           {isbuffering?(  <ListGroup>
               {shopname.map((name,index)=>
                <ListGroupItem 
                onClick={()=>{
                    setSelectedIndex(index);
                }}>{name}</ListGroupItem>)}
               </ListGroup>):(
              <Spinner color="primary"/>
           )}</Col>
                {customer&&<Col><ShopDetails shopObj={shopname[selectedIndex]} 
                paymentDetails={paymentDetails[selectedIndex]}/></Col>}
            </Row>
          
        </div>
    )
}

export default Adminpanel;
