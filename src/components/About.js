import User from "./User";
import UserClass from "./UserClass";
import UserContext from "./UserContext";
import { useContext } from "react";
import React from "react";

//This is a class base component not function component here we cannot use useContext as it is a hook

class About extends React.Component {
  constructor(props) {
    super(props);
    //console.log("Parent Constructor");
  }

  componentDidMount() {
    //console.log("Parent Mount");
  }

  render() {
    //console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <div>
          <p>LoggedInUser : </p>
          <UserContext.Consumer>
            {({loggedInUser}) => {
              <h1 className="font-bold">{loggedInUser}</h1>;
            }}
          </UserContext.Consumer>
        </div>
        <h2>This is an about page</h2>
        <UserClass name={"Keerthana Class"} location={"Bangalore"} />
        <UserClass name={"Keerthana Class"} location={"Bangalore"} />
      </div>
    );
  }
}

export default About;
// // const About = () => {
// //   return (
// //     <div>
// //       <h1>About</h1>
// //       <h2>This is an about page</h2>
//        <User name ={"Keerthana Function"} location = {"Bangalore"} />
//       <UserClass name = {"Keerthana Class"} location = {"Bangalore"}/>
// //     </div>
// //   );
// // };
