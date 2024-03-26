import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import Home from "./Home";
import About from "./About";

export default function Title() {

  return (
    <>
      <h1 className="title">Blue Flamingo</h1>
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
      </nav>

    </>
  )
}