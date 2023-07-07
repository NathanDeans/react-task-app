// App.js

import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";
import {useState} from "react"

export default function App() {

  const[newItem, setNewItem] = useState("")


  return (
    <>
    <input value={newItem} onChange={e => setNewItem(e.target.value) }></input>
    </>
  )
}