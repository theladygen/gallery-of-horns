import React from "react";

class HornedBeast extends React.Component {

  render() {
    console.log(this.props);
    return (
      <>
        <section>
          <h2>{this.props.title}</h2>
          <img src={this.props.imageUrl} alt={this.props.description} title={this.props.title}/>
          <p>{this.props.description}</p>
        </section>
      </>
    );
  }

}

export default HornedBeast;
