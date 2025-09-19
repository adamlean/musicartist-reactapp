import config from "../../core/modules.config.json";
import Discography from "../../modules/Music/Discography";
import Tracklist from "../../modules/Music/Tracklist";
import Gallery from "../../modules/Gallery/Gallery";

const modulesMap = {
  "Music/Discography": Discography,
  "Music/Tracklist": Tracklist,
  "Gallery": Gallery,
};

export default function AppView() {
  return (
    <div>
      {config.enabledModules.map((key) => {
        const Module = modulesMap[key];
        return Module ? <Module key={key} /> : null;
      })}
    </div>
  );
}
