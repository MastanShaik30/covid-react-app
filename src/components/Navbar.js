import React, { Component } from 'react';
import Navitem from './Navitem';

class Navbar extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'NavItemActive':''
        }
    }
    activeitem=(x)=>
    {
        if(this.state.NavItemActive.length>0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive':x},()=>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };
    render() {
        return (
            <nav>
            <ul>
            <Navitem item="Home" tolink="/"  activec={this.activeitem}></Navitem>
            <Navitem item="Map" tolink="/map"  activec={this.activeitem}></Navitem>
            <Navitem item="World" tolink="/world"  activec={this.activeitem}></Navitem>
            <Navitem item="India" tolink="/india"  activec={this.activeitem}></Navitem>
            <Navitem item="District Wise in India" tolink="/indiadst" activec={this.activeitem}></Navitem>
            <Navitem item="United States" tolink="/us"  activec={this.activeitem}></Navitem>
            </ul>
            </nav>
            )
        }
    }
    
    export default Navbar
    