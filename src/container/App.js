import React, { Component } from "react";
import Cardlist from "../components/CardList";
// import {robots} from "../components/robots";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component  {
    constructor(){
        super()
        this.state={
            robots:[],
            searchfield:''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users =>this.setState({robots:users}))
    }

    OnSearchChange = (event) =>{
        this.setState({searchfield: event.target.value})
    }
    render(){
        const {robots,searchfield} =this.state
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
    return !robots.length? 
        
            <h2>Loading...</h2>:
            (
        <div className="tc">
            <h1 className="f1">RoboFriend</h1>
            <SearchBox searchChange={this.OnSearchChange}/>
            <Scroll>
                <Cardlist robots={filteredRobots}/>
            </Scroll>
        </div>
     ) ;
}}

export default App