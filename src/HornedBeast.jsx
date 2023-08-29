import React from "react";

class HornedBeast extends React.Component {

  render() {
    console.log(this.props);
    return (
      <>
        <section>
          <h2>{this.props.title}</h2>
          <img src="" alt="" title=""></img>
         <p>{this.props.description}</p>
        </section>
      </>
    );
  }

}

export default HornedBeast;
