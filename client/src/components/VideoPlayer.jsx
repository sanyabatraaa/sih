import { Grid2, Paper, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { SocketContext } from '../SocketContext';

const VideoPlayer = () => {
  const {name,callAccepted,myVideo,userVideo,callEnded,stream,call}=useContext(SocketContext);
  return (
    <Grid2 container>
      {stream && (
        <Paper>
          <Grid2 item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
            <video playInline muted ref={myVideo} autoPlay></video>
          </Grid2>
        </Paper>
      )}
      {callAccepted && !callEnded && (
        <Paper>
          <Grid2 item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
            <video muted ref={userVideo} autoPlay></video>
          </Grid2>
        </Paper>
      )}
    </Grid2>
  )
}

export default VideoPlayer