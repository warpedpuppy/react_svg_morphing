import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

export default class Menu extends Component {
	  constructor(props) {
		super(props);
		this.state = {
			loginShow: false,
			showDropDown:false
		}
	  }
	  loginShow(e){
	  	e.preventDefault();
	  	this.setState({
	  		loginShow: !this.state.loginShow
	  	})
	  }
	  showDropDown(e){
	  	this.setState({
	  		showDropDown: !this.state.showDropDown
	  	})
	  }
	  render() {

	  	let loginClass = (this.state.loginShow)?'':'hide';
	  	let showDropDownClass = (this.state.showDropDown)?'':'open';
	    return (
			<div>
				<nav>
					<h1>trying something</h1>
					<div  className={`links  ${showDropDownClass}`}>
						<Link to="/">home</Link>
						<Link to="/about">about</Link>
						<a onClick={(e) => this.loginShow(e)}>login</a>
					</div>
					<div className="hamburger" onClick={() => this.showDropDown()}>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</nav>
				<div className={`logInForm  ${loginClass} `}><h1>log in form placeholder</h1></div>
			</div>
	    );
	  }
}
