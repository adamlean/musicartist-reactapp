import React, { useEffect } from 'react';
import "./About.css";
import Subscribe from "../components/Subscribe";

function About() {
  useEffect(() => {
    document.title = 'About | Music Artist';
  }, []);

  return (
    <main>
      <div className="container">

        <section class="about">
          <div class="container">
            <h3>About</h3>
            <p>
              Award-winning actor, producer, musician, and entrepreneur Cliff
              "Method Man" Smith, has been forging an extraordinary and
              unparalleled path across all mediums since he first entered the
              scene 30 years ago.
            </p>
            <p>
              Smith currently stars as 'Attorney Davis MacLean' opposite Mary J.
              Blige in the worldwide hit STARZ series Power Book II: Ghost. The
              show, which completed production on its fourth season, follows the
              on-going journey of some of "Power's" most controversial
              characters, in addition to introducing new fan favorites.
            </p>
            <p>
              He was last seen in Paramount+'s feature film On the Come Up,
              which is based on a novel written by New York Times bestselling
              author, Angie Thomas. The film premiered at Toronto International
              Film Festival and was released in Septemeber 2022. Method received
              a 2023 NAACP Image Award nomination for Best Supporting Actor for
              this role. He recently wrapped production on Lionsgate's action
              thriller, Shadow Force, alongside Kerry Washington and Da'Vine Joy
              Randolph, and on Carnegie Hill Entertainment's feature Bad
              Shabbos. Smith made his film debut in One Eight Seven and Belly,
              and his additional film credits include Concrete Cowboy,
              Peppermint, Last Looks, Keanu, Trainwreck, Red Tails, The
              Wackness, The Sitter, The Cobbler, the award-winning drama Garden
              State amongst many others.
            </p>
          </div>
        </section>


      </div>
      <Subscribe />
    </main>
  );
};

export default About;
