//Creating a class component ---> Older versions of react used thesse class componenets

import { Component } from "react";
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, count1: 2 };
    //console.log("Child Constructor");
  }

componentDidMount(){
    //console.log("Child Mount");
}

  render() {
    //console.log("Child Render");
    const { location } = this.props;
    return (
      <div>
        <h1>Name : {this.props.name}</h1>
        <h2>Count : {this.state.count}</h2>
        <button onClick={() =>{
            this.setState({
                //you can never directly modify the state variable --> this.state.count = this.state.count+1 --> This can never be done instead use this.setState() method provided by react for class components
                count : this.state.count + 1,
            });
        }}>Count Increase</button>
        <h2>Count2 : {this.state.count1}</h2>
        <h2>Location : {location}</h2>
      </div>
    );
  }
}

export default UserClass;
