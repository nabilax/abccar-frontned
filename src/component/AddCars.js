import axios from 'axios';
import React,{Component } from 'react';


class AddCars extends Component{
    //attibutes & methods 
    constructor(){
        super();
        this.state={
            "name":'',
            "make":'',
             "model":'',
             "registeration":'',
             "price":'',
             "sellerId":'',
             "sellStatus":'',
        }
    }

nameChange=(event)=>{
   //alert(event.target.value);
    this.setState({
        name:event.target.value
    })
}

makeChange=(event)=>{
    this.setState({
        make:event.target.value
    })
}
modelchange=(event)=>{
    this.setState({
        model:event.target.value
    })
}

registerationChange=(event)=>{
this.setState({
    registeration:event.target.value
})
}

priceChange=(event)=>{
    this.setState({
        price:event.target.value
    })
}

idChange=(event)=>{
    this.setState({
        sellerId:event.target.value
    })
}

statusChange=(event)=>{
    this.setState({
        sellStatus:event.target.value
    })
}

addProduct=(event)=>{
    alert(this.state.name+" "+this.state.make+" "+this.state.model+" "+" "+this.state.price+" "+this.state.sellStatus+" "+this.state.registeration+" "+this.state.sellerIdm);
    axios.post('/api/private/postcar',this.state)
    .then(res=>{
        console.log(res.data);
    })
    .catch(error=>{
        console.log(error);
    })
}
    //View --HTML

    render(){
        return (
            <div>
                <React.Fragment>
            <div class="container-lg my-md-9 my-lg-6  align-items-center"> 
            <div class="row d-flex justify-content-center allign-items-center ">
    
        <div class="col-md-6 text-center d-none d-md-block shadow-lg">
        <img class="img-fluid" src="assests/images/sellcar.jpg" alt="car cover"/>
        </div>  
        

            <div class="col-md-4 text-bg-light text-center d-none d-md-block shadow-lg  ">
                <h3 class="text-danger">Post Car </h3>
                <form onSubmit={this.addProduct}>
                <div class="mb-3 mt-3">
				<label for="name" class="form-label">Name:</label> <input
					type="text" class="form-control" 
					placeholder="Enter car name" value={this.state.name} onChange={this.nameChange} required="true" />
				<div class="valid-feedback">Valid.</div>
				<div class="invalid-feedback">Please fill out this field.</div>
			    </div>
                <div class="mb-3 mt-3">
				<label for="make" class="form-label">Make:</label> <input
					type="text" class="form-control" 
					placeholder="Enter make year" value={this.state.make} onChange={this.makeChange} required="true" />
				<div class="valid-feedback">Valid.</div>
				<div class="invalid-feedback">Please fill out this field.</div>
			    </div>
                <div class="mb-3 mt-3">
				<label for="model" class="form-label">Model:</label> <input
					type="text" class="form-control" 
					placeholder="Enter car model" value={this.state.model} onChange={this.modelchange} required="true" />
				<div class="valid-feedback">Valid.</div>
				<div class="invalid-feedback">Please fill out this field.</div>
			    </div>
                <div class="mb-3 mt-3">
				<label for="registration" class="form-label">Registration:</label> <input
					type="text" class="form-control" 
					placeholder="Enter registration no" value={this.state.registeration} onChange={this.registerationChange} required="true" />
				<div class="valid-feedback">Valid.</div>
				<div class="invalid-feedback">Please fill out this field.</div>
			    </div>
                <div class="mb-3 mt-3">
				<label for="price" class="form-label">Price:</label> <input
					type="text" class="form-control" 
					placeholder="Enter car price" value={this.state.price} onChange={this.priceChange} required="true" />
				<div class="valid-feedback">Valid.</div>
				<div class="invalid-feedback">Please fill out this field.</div>
			    </div>

                    <button class="btn btn-danger" type="submit" style={{position:'relative', top: '-10px'}}>Add Product</button>
                </form>
            </div>     
        </div>
        </div>
   
    </React.Fragment>
    </div>
        )
    }
}

export default AddCars;