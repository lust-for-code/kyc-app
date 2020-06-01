import { useState, useEffect } from "react";
import {useHistory} from "react-router-dom";
export function useUserMedia(requestedMedia) {
  const [mediaStream, setMediaStream] = useState(null);
const history = useHistory();
  useEffect(() => {
    
    async function enableVideoStream() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(
          requestedMedia
        );
        setMediaStream(stream);
      } catch (err) {
        alert('Camera Permission Denied');
        history.push("/camDeny")
      }
    }

    if (!mediaStream) {
      enableVideoStream();
    } else {
      return function cleanup() {
        mediaStream.getTracks().forEach(track => {
          track.stop();
        });
      };
    }
  }, [mediaStream, requestedMedia]);

  return mediaStream;
}
