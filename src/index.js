import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import './index.css'
import KandyKorner from './components/KandyKorner';
import SearchInput from './components/NavBar/navBarInput';

 ReactDOM.render(
     <Router>
         
         <KandyKorner />
     </Router>
     , document.getElementById('root'))
