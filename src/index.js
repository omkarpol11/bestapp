import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

class Home extends React.Component {
  render(){
    return (
      <h1></h1>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Home/>
  </React.StrictMode>,
  document.getElementById('root')
);

