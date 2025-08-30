import React, { useEffect } from "react";
import Hero from "../components/Hero";
import LatestRelease from "../components/LatestRelease";
import Subscribe from "../components/Subscribe";
import "./Home.css";

function Home() {
  useEffect(() => {
    document.title = "Home | Music Artist";
  }, []);

  return (
    <div className="home">
      <Hero />
      <LatestRelease />
      <section className="subscribe">
        <Subscribe />
      </section>
    </div>
  );
}

export default Home;
