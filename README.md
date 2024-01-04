//Parcel Functionalities :-


//Basic template for designing
/**
 * Header
 * -Logo
 * -Nav Items
 * Body
 * -Search
 * -Restaurant Container
 *   -rest-card
 *     -Name of the res, star rating, cuisine, Delivery time etc
 *
 */

 //Two types of export and import :-

 default export - export default {function}
 import Component from "path";

Note : When you are exporting multiple things then use named export else stick to default export !!
 named export - add the word export as a prefix for which ever component you are using
 import {Component} from "path";

 //Link is a superpower given by the react-router-dom which refreshes the components but doesnot refresh the whole page ---> This makes react super fast

//The use of useState variable - it is used to create a local state variable inside your functional components so always call them inside your functional component and not outside

//When is useEffect called - when there is no dependency array the useEffect will be called every time any component is rendered
//When there is a dependency array and that array is empty then the useEffect will be called only once that is the initial render (just once)
//When there is a dependency array and that array has some value then the useEffect will be called only when there is a change in the dependency array 

Note :- There are 2 types of routing in web applications
1) Server Side routing --> When ever you are making a network call to fetch something then that is server side routing.
2) Client side routing --> Usage of link results in client side routing

//Note : And therefore the usuage of the Link results -->  React is called as single page application But end of the day Link is a wrapper over anchor tag

//Usage of anchor tag will result in refreshing of the whole page which is unnecessary

//use shortcut "rafce" it creates the boiler template of the function

//Note :- Things to be kept in mind while coding
1) Single Responsibility Principle -- > Your module should be performing just single function
2) Modularity - by maintainig this you can fix the bugs easily depending on which module the bug is present

Using these point your code becomes re-usable, maintainable, readable, easy to test feature

//Hooks --> They are just normal utility functions given to us by a library
custom hooks - they are the utility functions that we write in-order to optimize the code 