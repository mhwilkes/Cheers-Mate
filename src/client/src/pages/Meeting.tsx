import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import io from 'socket.io-client';
import SimplePeer from 'simple-peer';

const ContentContainer = styled.div`
  text-align: center;
  margin: 10vh auto;
  width: 80vw;
`;

const StyledVideo = styled.video`
  height: 40%;
  width: 50%;
`;
// @ts-ignore
const Video = (props) => {
  const ref = useRef();

  useEffect(() => {
    // @ts-ignore
    props.peer.on('stream', (stream) => {
      // @ts-ignore
      ref.current.srcObject = stream;
    });
  }, []);

  // @ts-ignore
  return <StyledVideo playsInline autoPlay ref={ref} />;
};

const videoConstraints = {
  height: window.innerHeight / 2,
  width: window.innerWidth / 2,
};

const Meeting = (props: { match: any }) => {
  const [peers, setPeers] = useState([]);
  const socketRef = useRef();
  const userVideo = useRef();
  const peersRef = useRef([]);
  const roomID = props.match.params.id;
  const { match } = props;

  useEffect(() => {
    // @ts-ignore
    socketRef.current = io.connect('/');
    navigator.mediaDevices
      .getUserMedia({ video: videoConstraints, audio: true })
      .then((stream) => {
        // @ts-ignore
        userVideo.current.srcObject = stream;
        // @ts-ignore
        socketRef.current.emit('join room', roomID);
        // @ts-ignore
        socketRef.current.on('all users', (users) => {
          // @ts-ignore
          const peers = [];
          // @ts-ignore
          users.forEach((userID) => {
            // @ts-ignore
            const peer = createPeer(userID, socketRef.current.id, stream);
            peersRef.current.push({
              // @ts-ignore
              peerID: userID,
              // @ts-ignore
              peer,
            });
            peers.push(peer);
          });
          // @ts-ignore
          setPeers(peers);
        });
        // @ts-ignore
        socketRef.current.on('user joined', (payload) => {
          const peer = addPeer(payload.signal, payload.callerID, stream);

          peersRef.current.push({
            // @ts-ignore
            peerID: payload.callerID,
            // @ts-ignore
            peer,
          });
          // @ts-ignore
          setPeers((users) => [...users, peer]);
        });

        // @ts-ignore
        socketRef.current.on('receiving returned signal', (payload) => {
          // @ts-ignore
          const item = peersRef.current.find((p) => p.peerID === payload.id);
          // @ts-ignore
          item.peer.signal(payload.signal);
        });
      });
  }, []);

  // @ts-ignore
  function createPeer(userToSignal, callerID, stream) {
    const peer = new SimplePeer({
      initiator: true,
      trickle: false,
      stream,
    });
    // @ts-ignore
    peer.on('signal', (signal) => {
      // @ts-ignore
      socketRef.current.emit('sending signal', {
        userToSignal,
        callerID,
        signal,
      });
    });

    return peer;
  }

  // @ts-ignore
  function addPeer(incomingSignal, callerID, stream) {
    const peer = new SimplePeer({
      initiator: false,
      trickle: false,
      stream,
    });

    peer.on('signal', (signal) => {
      // @ts-ignore
      socketRef.current.emit('returning signal', { signal, callerID });
    });

    peer.signal(incomingSignal);

    return peer;
  }

  // @ts-ignore
  return (
    <ContentContainer>
      <div className="hero-body">
        <div className="container has-text-centered has-text-weight-bold">
          <h1 className="title is-size-1">This is Meeting room</h1>
          <h2 className="subtitle is-size-4 has-text-weight-bold">
            Room ID: {match.params.id}
          </h2>
          // @ts-ignore
          <StyledVideo muted ref={userVideo} autoPlay playsInline />
          {peers.map((peer, index) => {
            return <Video key={index} peer={peer} />;
          })}
        </div>
      </div>
    </ContentContainer>
  );
};

export default Meeting;
