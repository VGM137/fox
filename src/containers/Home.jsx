import React from "react";
import { connect } from "react-redux";
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Footer from "../components/Footer";
import '../assets/styles/Components/Home.css'
import AboutUs from "../components/AboutUs";

const Home = () => {
  return (
    <>
      <div>

      </div>
      <NavBar />
      <Hero />
      <AboutUs />
      <Footer />
    </ >
  )
}

export default connect(null, null)(Home)