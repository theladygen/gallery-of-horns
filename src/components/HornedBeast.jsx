import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0
    }
  }

  handleFavorites = () => {
    this.setState({
      favorites:this.state.favorites + 1
    });
  }

  render() {
    
    return (
      // <>
      // <section className="beast">
      //   <Card style={{ width: '18rem'}}>
      //     <p>{this.state.favorites}</p>
      //     <Card.Img 
      //       variant="top" 
      //       src={this.props.imageURL}
      //       alt={this.props.title}/>
      //     <Card.Body>
      //       <Card.Title>{this.props.title}</Card.Title>
      //       <Card.Text>{this.props.description}</Card.Text>
      //       <Button onClick={this.handleFavorites}>Favorite</Button>
      //     </Card.Body>
      // </Card>
      // </section>
      // </>
      <>
        <section>
          <h2>{this.props.title}</h2>
          <img 
          src={this.props.imageUrl} 
          alt={this.props.description} 
          title={this.props.title}/>
          <p>{this.props.description}</p>
          <Button onClick={this.handleFavorites}>Favorites</Button>
          <p>💖 {this.state.favorites}</p>
        </section>
      </>
    );
  }

}

export default HornedBeast;
