import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import Button from "./components/Button";
import Footer from "./components/Footer";
import TextInput from "./components/TextInput";

class App extends Component {
  //button onclick, ondrag?????
  render() {
    return (
      <div className="App">
        <Header title="Selamat Datang" />
        {/* <Header title="Selamat Datang" desc="welcome" /> */}
        {/* <Button message="hiyahiya" /> */}
        <TextInput label="Name" placeholder="Enter Your Name" />
        <Footer title="Terimakasih" />
      </div>
    );
  }
}

export default App;
