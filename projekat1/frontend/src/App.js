import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  
  state = ({
    apiResponse: ""
  })
  
  callAPI() {
    const requestOptions = {
      info: "Informacija poslata u requestu",
      info2: "Druga informacija"
    };
    axios.post('http://localhost:5000/api', requestOptions)
    .then((response) => {this.setState((state) => {return {apiResponse: response.data}});});
  }

  clickHandler = () => {
    console.log("Dugme je kliknuto :)");  
    this.callAPI();
  }
  
  render() {
    return (
      <div>
        <p>{this.state.apiResponse}</p>
        <h1>Klikni dugme ispod</h1>
        <button onClick={this.clickHandler}>Klikni me</button>  
      </div>
    );
  }
}

export default App;
