import axios from 'axios';
import React,{Component} from 'react';
import AddCars from './component/AddCars';
import ShowCars from './component/ShowCars';
import CarDetails from './component/CarDetails';
import LoginCar from './component/LoginCar';
import LoginUser from './component/LoginUser';
import Dashboard from './component/Dashboard';
import Facebook from './component/Facebook';
import Welcome from './component/Welcome';
import MessageSender from './component/MessageSender';
// import { AuthCo } from './component/AuthContext';
// import { AuthProvider } from './component/AuthContext';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";

/*
 */
class App extends Component{
  
  constructor(){
    super();
   this.state={
    products:[]
    
}}

componentDidMount(){
  axios.get('showCar')
  .then(res=>{   
   this.setState({
     products:res.data
   })
  })
  .catch(error=>{
    console.log(error);
  })
}

// constructor(props) {
//   super(props);
//   this.state = {
//     user: null,
//   };
// }

// componentDidMount() {
//   this.fetchUser();
// }

// fetchUser = async () => {
//   try {
//     const response = await axios.get('/user');
//     this.setState({
//       user: response.data.userAuthentication.details.name,
//     });
//   } catch (error) {
//     console.log('Error fetching user:', error);
//   }
// };
  
    render(){
      const { user } = this.state;
      return(
       <Router>
         {/* <AuthProvider> */}
         
       <div>
       <h3 class="text-danger">XYZ <span class="text-dark">Car Portals</span></h3>

       <Link to="/add"><button type="button" class="btn btn btn-danger">Post Car</button></Link>&nbsp; &nbsp;&nbsp;&nbsp;
       <Link to="/car"><button type="button" class="btn btn btn-danger">Car Details</button></Link>&nbsp; &nbsp;&nbsp;&nbsp;
       <Link to="/api/login"><button type="button" class="btn btn btn-danger">Login</button></Link>&nbsp; &nbsp;&nbsp;&nbsp;
       <Link to="/dashboard"><button type="button" class="btn btn btn-danger">Dashboard</button></Link>&nbsp; &nbsp;&nbsp;&nbsp;
       <Link to="/login"><button type="button" class="btn btn btn-danger">Facebook Login</button></Link>&nbsp; &nbsp;&nbsp;&nbsp;
       <Link to="/webhook"><button type="button" class="btn btn btn-danger">Webhook Message</button></Link>&nbsp; &nbsp;&nbsp;&nbsp;
        <Route path="/add">
            <AddCars></AddCars>
        </Route>
        <Route path="/car">
            <CarDetails alldata={this.state.products}></CarDetails>
        </Route> 
        <Route path="/api/login">
            <LoginUser></LoginUser>
        </Route>
        <Route path="/" exact component={LoginUser} />
        <Route path="/dashboard" component={Dashboard} />
        {/* <Route path="/login" component={Facebook} /> */}
        <Route path="/login" >  <Facebook> </Facebook>   </Route>
        <Route path="/welcome/:username" render={(props) => <Welcome {...props} />} />
        <Route path="/webhook">
            <MessageSender></MessageSender>
        </Route> 
        {/* <div> */}
        {/* <h1>Demo</h1>

        {user ? (
          <div className="container authenticated">
            Logged in as: <span id="user">{user}</span>
          </div>
        ) : (
          <div className="container unauthenticated">
            Login With Facebook: <a href="/oauth2/authorization/facebook">click here</a>
          </div>
        )}
      </div> */}

       </div>
       {/* </AuthProvider> */}
       </Router>

        
      )
    }
}


export default App;
