import React from "react";
import Header from "../components/header";
import HeroSection from "../components/herosection";
import BlogGrid from "../components/bloggrid";
import Destinationslider from "../components/destinationslider";

/**
 * Home component represents the main page of the application.
 * @component
 * @return {React.FC} Returns the Home component.
 */
const Home: React.FC = () => {
  return (
    <div className="App h-full min-h-screen w-full">
      {/* Header component for displaying the header */}
      <Header />

      {/* HeroSection component for displaying the hero section */}
      <HeroSection />

      {/* BlogGrid component for displaying blog content in a vertical layout */}
      <BlogGrid blogLayout="vertical" />

      {/* BlogGrid component for displaying blog content in a horizontal layout */}
      <BlogGrid blogLayout="horizontal" />

      {/* Destinationslider component for displaying a slider of destinations */}
      <Destinationslider />
    </div>
  );
};

export default Home;
