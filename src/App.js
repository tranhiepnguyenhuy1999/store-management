import React from 'react';
// Antd css features
import 'antd/dist/antd.css';
import './App.css';

import {
  BrowserRouter as Router,
} from "react-router-dom";

import FrameMain from './component/frameMain/frameMain'
function App() {
  return (
   <div>
        <Router>
         <FrameMain></FrameMain> 
        </Router>
        
   </div> 
  );
}

export default App;
