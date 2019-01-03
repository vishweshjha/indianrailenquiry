import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";

import HomePage from './components/HomePage';

class App extends Component {  
  render() {
    return (
      <div>
      <BrowserRouter>
        <div id="page-top">
             <HomePage/>
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;