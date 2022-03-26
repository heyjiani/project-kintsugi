import React, {
  useState,
  useRef,
  useEffect,
} from "react";
import { io } from "socket.io-client";
import Peer from "simple-peer";

const socket = io("http://localhost:8080");

export default function VideoPage() {
  const [me, setMe] = useState("");
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] =
    useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] =
    useState();
  const [callAccepted, setCallAccepted] =
    useState(false);
  const [idToCall, setIdToCall] = useState("");
  const [callEnded, setCallEnded] =
    useState(false);
  const [name, setName] = useState("");

  const myVideo = useRef();
  const peerVideo = useRef();
  const connectionRef = useRef();

  useEffect(() => {
    //connect to server for websocket//
    socket.on("connect", () => {
      console.log(
        "socket client connected to server"
      );
    });

    //set myself as id of came back from server//
    socket.on("me", (id) => {
      console.log("me", id);
      setMe(id);
    });

    socket.on("callUser", (data) => {
      console.log("callUser: client");
      setReceivingCall(true);
      setCaller(data.from);
      setName(data.name);
      setCallerSignal(data.signal);
    });

    // set camera and audio on and set as a current stream//
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        setStream(stream);
        console.log("myVideo", stream);
        myVideo.current.srcObject = stream;
      });
  }, []);

  //create peer for making call
  const callUser = (id) => {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    });

    peer.on("signal", (data) => {
      socket.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: me,
        name: name,
      });
    });

    peer.on("stream", (stream) => {
      peerVideo.current.srcObject = stream;
    });

    socket.on("callAccepted", (signal) => {
      setCallAccepted(true);
      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  //create peer answering call//
  const answerCall = () => {
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });

    peer.on("signal", (data) => {
      socket.emit("answerCall", {
        signal: data,
        to: caller,
      });
    });

    peer.on("stream", (stream) => {
      peerVideo.current.srcObject = stream;
    });

    peer.signal(callerSignal);
    connectionRef.current = peer;
  };

  // create peer and me leaving the call//
  const leaveCall = () => {
    setCallEnded(true);
    connectionRef.current.destroy();
  };

  return (
    <div>
      <div>
        <div>
          {stream && (
            <video
              playsInline
              muted
              ref={myVideo}
              autoPlay
              style={{ width: "300px" }}
            />
          )}
        </div>
        <div>
          {callAccepted && !callEnded ? (
            <video
              playsInline
              ref={peerVideo}
              autoPlay
              style={{ width: "300px" }}
            />
          ) : null}
        </div>
      </div>

      <div>
        <input
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          style={{ marginBottom: "20px" }}
        />
        <div>{me}</div>

        <input
          value={idToCall}
          onChange={(e) =>
            setIdToCall(e.target.value)
          }
        />
        <div>
          {callAccepted && !callEnded ? (
            <button onClick={leaveCall}>
              End Call
            </button>
          ) : (
            <button
              onClick={() => callUser(idToCall)}
            >
              Call
            </button>
          )}
          {idToCall}
        </div>
      </div>
      <div>
        {receivingCall && !callAccepted ? (
          <div>
            <h1>{name} is calling...</h1>
            <button onClick={answerCall}>
              Answer
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
