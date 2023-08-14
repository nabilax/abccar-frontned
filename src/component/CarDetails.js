import Card from 'react-bootstrap/Card';
import { Container, Row } from 'react-bootstrap';
import React,{Component } from 'react';


//Data from other Component {datafromap}
class CarDetails extends Component{

    render(){
        const mydata = this.props.alldata;

        const pdata = mydata.map((prod, key) => (
            <Container>
            <Row className="bg-light d-lg-inline-block" style={{ float: 'left' }}>
          <Card key={key} style={{ width: '18rem' }}>
          <Card.Img variant="top" src="assests/images/cardemo.jpg" />
            <Card.Body>
              <Card.Title>{prod.name}</Card.Title>
              <Card.Text>
                <strong>Make:</strong> {prod.make}<br />
                <strong>Model:</strong> {prod.model}<br />
                <strong>Registration Number:</strong> {prod.registeration}<br />
                <strong>Price:</strong> {prod.price}<br />
                <strong>Seller ID:</strong> {prod.sellerId}<br />
                <strong>Sell Status:</strong> {prod.sellStatus}<br />
              </Card.Text>
            </Card.Body>
          </Card>
          </Row>
    </Container>
        ));

        return (
            <div class="container-lg my-md-9 my-lg-6  align-items-center">
            <h3>Car Details</h3>
           
            <div className="card-container" >{pdata} </div>
          </div>
        
        )
    }


}

export default CarDetails;