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
      <>
        <Card className="beast p-1 h-100" border="light" bg="info" style={{ width: '80%'}}>
          <Card.Img 
            onClick={this.handleFavorites}
            variant="top" 
            src={this.props.imageUrl}
            alt={this.props.title}/>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>This is a {this.props.horns} horned beast!</Card.Text>
            <Button onClick={this.handleFavorites}>Favorite</Button>
           <p>💖 = {this.state.favorites}</p>
          </Card.Body>
         </Card>
      </>
    );
  }

}

export default HornedBeast;
