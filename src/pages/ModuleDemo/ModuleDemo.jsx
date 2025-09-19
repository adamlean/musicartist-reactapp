import { useParams } from "react-router-dom";
import Gallery from "../../modules/Gallery/Gallery";
import Tracklist from "../../modules/Music/Tracklist";

const moduleMap = {
  gallery: Gallery,
  tracklist: Tracklist,
};

export default function ModuleDemo() {
  const { name } = useParams();
  const Module = moduleMap[name];
  return Module ? <Module demo /> : <p>Module not found</p>;
}
