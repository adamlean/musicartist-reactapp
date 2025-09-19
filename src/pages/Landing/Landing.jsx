import Hero from "../../components/Hero/Hero";
import Subscribe from "../../components/Subscribe/Subscribe";
import AlbumCard from "../../modules/Music/AlbumCard";
// import Gallery from "../../modules/Gallery/Gallery";

export default function Landing() {
  return (
    <>
      <Hero />
      <section>
        <h2>Modules Demo</h2>
        <AlbumCard demo />
        <Gallery demo />
      </section>
      <Subscribe />
    </>
  );
}
