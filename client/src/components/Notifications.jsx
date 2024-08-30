import React, { useContext } from 'react';
import { Button, Typography, Box } from '@mui/material'; // Updated imports from MUI
import { SocketContext } from '../SocketContext';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: 2 }}>
          <Typography variant="h4">{call.name} is calling:</Typography>
          <Button variant="contained" color="primary" onClick={answerCall}>
            Answer
          </Button>
        </Box>
      )}
    </>
  );
};

export default Notifications;
