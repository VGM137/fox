import React from "react";
import { connect } from "react-redux";
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import AboutUs from "../components/AboutUs";
import Products from "../components/Products";
import Footer from "../components/Footer";
import '../assets/styles/Components/Home.css'

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutUs />
      <Products />
      <Footer />
    </ >
  )
}

export default connect(null, null)(Home)