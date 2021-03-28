import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import firebase from "firebase/app"
import "firebase/auth";
import firebaseconfig from "./routes/config";
import {Usercontext} from "./context/Usercontext";

//components
import HomePage from "./routes/Homepage";
import Signup from './routes/Signup';
import Loginpage from "./routes/loginpage";
import Adminpanel from "./routes/adminpanel";
import Pagenotfound from './routes/Pagenotfound';



if (!firebase.apps.length) {
  firebase.initializeApp(firebaseconfig);
}else {
  firebase.app(firebaseconfig); 
}
function App() {
  const [user, setUser] = useState()
  return (
    <div>
      <Usercontext.Provider value={{user,setUser}}>
   <BrowserRouter>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Loginpage} />
              <Route exact path="/adminpanel" component={Adminpanel} />
              <Route exact path="*" component={Pagenotfound} />

            </Switch>
          </BrowserRouter>
          </Usercontext.Provider>
    </div>
  );
}

export default App;
