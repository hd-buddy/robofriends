import React, { Component } from "react";
import Cardlist from "./CardList";
import {robots} from "./robots";
import SearchBox from './SearchBox'

class App extends Component{
    constructor(){
        super()
        this.state={
            robots:robots,
            searchfield:''
        }
    }
    OnSearchChange = (event) =>{
        this.setState({searchfield: event.target.value})
    }
    render(){
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
    
    return(
        <div className="tc">
            <h1>RoboFriend</h1>
            <SearchBox searchChange={this.OnSearchChange}/>
            <Cardlist robots={filteredRobots}/>
        </div>
     ) ;
}}

export default App