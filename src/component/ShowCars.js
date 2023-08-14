import React,{Component } from 'react';

//Data from other Component {datafromap}
class ShowCars extends Component{

    render(){
        const mydata=this.props.alldata;
        const pheader=<tr><th>Car Name</th> <th>Car Make</th> <th>Car Model</th><th>Car Registration Number</th><th>Car Price</th></tr>;

       const pdata=mydata.map((prod,key)=><tr><td>{prod.name}</td><td>{prod.make}</td><td>{prod.model}</td><td>{prod.registeration}</td><td>{prod.price}</td><td>{prod.sellerId}</td><td>{prod.sellStatus}</td></tr>);
        return (
         <div>
          <h1>Show All Products </h1>
          <table border="1">{pheader}{pdata}</table>
         </div>
        )
    }


}

export default ShowCars;