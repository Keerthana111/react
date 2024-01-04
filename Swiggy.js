// //React Element --> React.createElement => ReactElement--(Object)=> HTMLElement
// const heading = React.createElement("h1", {id : "heading"}, "Hello World from React!!");

// // const parent = React.createElement("div", {id:"parent"}, 
// //                 React.createElement("div"),{id:"child"},
// //                 [React.createElement("h1", {}, "I am a h1 tag!!"), 
// //                 React.createElement("h2", {}, "I am a h2 tag!!")]
// // );


// //JSX object => React.createElement => ReactElement--(Object)=> HTMLElement
// const jsxHeading = <h1 id="heading">Namaste Javascript from JSX 😊!!</h1>;


// //React functional component
// const HeadingComponent = () => {
//     return <h2 className ="heading">This is how function is written in react</h2>
// }

// //Above and below function are one and the same
// //This is also called component composition --> Function inside another function
// //Functional components are called this way
// //they can be called this way as well because functional components are nothing but functions, in javascript functions can be called this way

// const HeadingComponent2 = () => (
// <div id = "container">

//     {HeadingComponent()} 
    
//     <HeadingComponent />
//     <h1 className ="heading">This is how function is written in react!!</h1>
// </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// //Rendering an element
// root.render(heading);
// root.render(jsxHeading);

// //Rendering a component
// root.render(<HeadingComponent2 />);

