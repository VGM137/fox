import React from "react";
import { connect } from "react-redux";
import NavBar from '../components/NavBar'
import LegalsPage from "../components/LegalsPage";
import Footer from "../components/Footer";
import '../assets/styles/Components/Home.css'

const Home = () => {
  return (
    <>
      <NavBar />
      <LegalsPage />
      <Footer />
    </ >
  )
}

export default connect(null, null)(Home)