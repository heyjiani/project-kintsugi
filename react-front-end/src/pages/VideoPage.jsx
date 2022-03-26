// import React, { useState, useRef, useEffect } from 'react'
// import io from 'socket.io-client';


// const socket = io.connect("http//localhost:8080");

// export default function VideoPage() {
//   const [me, setMe] = useState('');
//   const [stream, setStream] = useState();
//   const [receivingCall, setReceivingCall] = useState(false);
//   const [caller, setCaller] = useState('');
//   const [callerSignal, setCallerSignal] = useState()
//   const [callAccepted, setCallAccepted] = useState(false);
//   const [idToCall, setIdToCall] = useState('');
//   const [callEnded, setCallEnded] = useState(false);
//   const [name, setName] = useState('');

//   const myVideo = useRef();
//   const peerVideo = useRef();
//   const connectionRef = useRef();

//   useEffect(() => {
//     // set camera and audio on and set as a current stream//
//     navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
//       setStream(stream)
//       myVideo.current.srcObject = stream;
//     });

//     //set my id as came back from server//
//     socket.on('me', (id) => {
//       setMe(id);
//     });

//     socket.on('callUser', (data) => {
//       setReceivingCall(true);
//       setCaller(data.from);
//       setName(data.name);
//       setCallerSignal(data.signal)
//     })
//   }, [])


//   //create peer for receiving call
//   const callUser = (id) => {
//     const peer = new Peer({
//       initiator: true,
//       trickle: false,
//       stream: stream
//     });

//     peer.on('signal', (data) => {
//       socket.emit("callUser", {
//         userToCall: id,
//         signalData: data,
//         from: me,
//         name: name
//       })
//     });

//     peer.on("stream", (stream) => {
//       peerVideo.current.srcObject = stream
//     });


//     socket.on("answerCall", (signal) => {
//       setCallAccepted(true)
//       peer.signal(signal)
//     });

//     connectionRef.current = peer

//   }

//   const answerCall = () => {
//     setCallAccepted(true);
//     const peer = new Peer({
//       initiator: true,
//       trickle: false,
//       stream: stream
//     });


//     peer.on("signal", (data) => {
//       socket.
//     })
//   }


//   return (
//     <div>VideoPage</div>
//   )
// }
