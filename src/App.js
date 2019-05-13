import React, { Component } from "react";
import Unsplash from "./api/Unsplash";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

class App extends Component {
  state = {
    images: []
  };
  onSearchSubmit = async term => {
    const response = await Unsplash.get("/search/photos", {
      params: { query: term }
    });
    // .then(response => {
    //   console.log(response.data.results);
    // });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ margintop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
