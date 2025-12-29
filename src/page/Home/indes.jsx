import React from "react";
import {
  HomePage,
  Homes
} from "./Home.styled";

import CatalogUy1 from "../../components/CatalogUy";

import Text from "../../components/Text";
import Lamp from "../../components/Lamp";
import NornLight from "../../components/NornLight/index";
import Section from "../../components/Section";
import Katalogss from "../../components/Katalog";
import Skidka from "./Skidka";


function Home() {

  return (
    <Homes>
      <Skidka />
      <div className="controller">
        <Katalogss />

        <NornLight />

        <Lamp />

        <Section />

        <CatalogUy1 showHeader={true} showBottom={true} />

        <Text />
      </div>
    </Homes>
  );
}

export default Home;
