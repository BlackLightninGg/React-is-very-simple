import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {PageTitle} from "./components/PageTitle/PageTitle";
import {Rating} from "./components/Rating/Rating";
function App() {
  console.log("App")
  return (
      <div className="App">
        <PageTitle title={"Hello, everybody!"}/>
        <Rating value={0}/>
        <PageTitle title={"My page"}/>
        <Rating value={1}/>
        <PageTitle title={"My friends"}/>
        <Rating value={2}/>
        <Rating value={3}/>
        <Rating value={4}/>
        <Rating value={5}/>
        <Accordion title={"Menu"} collapsed={true}/>
        <Accordion title={"Users"} collapsed={false}/>
      </div>
  );
}

export default App;
