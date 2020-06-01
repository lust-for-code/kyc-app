import React, { Fragment, useState } from "react";
import {useHistory} from "react-router-dom";
// import ReactDOM from "react-dom";
import { Camera } from "./camera3";
import { Root, Footer, GlobalStyle } from "./styles";

export default function Cam() {
    const [isCameraOpen, setIsCameraOpen] = useState(false);
    const [cardImage, setCardImage] = useState();
    const history = useHistory();
    const handleCameraOpen = () => setIsCameraOpen(true)
    const handleClick = () => {
        setIsCameraOpen(false);
        setCardImage(undefined);
        if(sessionStorage.getItem('idback'))
        {
          history.push("/idpreviewback")
        }
        else{
          history.push("/verifyidback")
        }
      }

  return (
    <Fragment>
      <Root>
        {isCameraOpen && (
          <Camera
            onCapture={blob => setCardImage(blob)}
            onClear={() => setCardImage(undefined)}
          />
        )}

        

        <Footer>
          <button onClick={handleCameraOpen}>Open Camera</button>
          <button
            onClick={handleClick}
          >
            Close Camera
          </button>
          {/* <button >Proceed</button> */}
        </Footer>
      </Root>
      <GlobalStyle />
    </Fragment>
  );
}