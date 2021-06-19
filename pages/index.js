import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import React, { useState } from "react";

import Layout from "../components/Layout/Layout";
import Nav from "../components/Nav/Nav";
import TileComponent from "../components/Tile/TileComponent";
import ContentSwitcherComponent from "../components/ContentSwitcher/ContentSwitcherComponent";

export default function Home() {
  let [contentForTile, setContentForTile] = useState("Biodegradable waste");
  let receiveTileContent = (value) => {
    console.log("[value]", value);
    setContentForTile(value);
  };
  return (
    <Layout>
      <div className={styles.container}>
        {/*<Layout>*/}
        {/*<div className={styles.nav}>*/}
        {/*    <Nav />*/}
        {/*</div>*/}
        {/*<ContentSwitcherComponent*/}
        {/*    callBackFromComponent = {receiveTileContent}*/}
        {/*/>*/}

        <TileComponent content={contentForTile} />
        {/*</Layout>*/}
      </div>
    </Layout>
  );
}
