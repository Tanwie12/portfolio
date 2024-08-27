'use client'
import { Webchat, WebchatProvider, Fab, getClient } from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";
import { useState } from "react";

const { theme, style } = buildTheme({
  themeName: "prism",
  themeColor: "#634433",
});
type Props = {}
//Add your Client ID here ⬇️
const clientId = "caacdf9d-3f7e-42ee-aa00-ca9e72302313";
function Dot({}: Props) {
  
  const client = getClient({ clientId });
const [isWebchatOpen, setIsWebchatOpen] = useState(false);

const toggleWebchat = () => {
  setIsWebchatOpen((prevState) => !prevState);
};

return (
  <div style={{ width: "100vw", height: "100vh" }}>
    <style>{style}</style>
    <WebchatProvider
      theme={theme}
      client={client}
    >
      <Fab onClick={toggleWebchat} />
      <div
        style={{
          display: isWebchatOpen ? "block" : "none",
        }}
      >
        <Webchat />
      </div>
    </WebchatProvider>
  </div>
  )
}

export default Dot