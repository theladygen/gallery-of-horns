import React from "react";
import HornedBeast from "./HornedBeast.jsx";
import beasts from "./beasts.json";


class Gallery extends React.Component {

  render() {
    return (
      <main>
        {beasts.map((beast, index) => {
          return (<HornedBeast
            title={beast.title}
            description={beast.description}
            imageUrl={beast.image_url}
            key={index}
          />);
        })}
        
      </main>
    );
  }

}

export default Gallery;
