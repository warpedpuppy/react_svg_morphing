import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './Menu.css';

export default class Menu extends Component {
  render() {
    return (
      <nav>
      	<h1>trying something</h1>
      	<Link to="/">home</Link>
      	<Link to="/about">about</Link>
      </nav>
    );
  }
}
