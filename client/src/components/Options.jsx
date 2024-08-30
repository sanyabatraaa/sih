import React, { useState, useContext } from 'react';
import { Button, TextField, Typography, Container, Paper, Grid2 } from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from '@mui/icons-material';
import { SocketContext } from '../SocketContext'; 

const Options = ({ children }) => {
  const context = useContext(SocketContext);


  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = context;
  const [idToCall, setIdToCall] = useState('');

  return (
    <Container sx={{ width: '600px', margin: '35px 0', padding: 0, '@media (max-width:600px)': { width: '80%' } }}>
      <Paper elevation={10} sx={{ padding: '10px 20px', border: '2px solid black' }}>
        <form noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column' }}>
          <Grid2 container spacing={2}>
            <Grid2 item xs={12} md={6} sx={{ padding: 2 }}>
              <Typography gutterBottom variant="h6">Account Info</Typography>
              <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
              <CopyToClipboard text={me}>
                <Button variant="contained" color="primary" fullWidth startIcon={<Assignment fontSize="large" />} sx={{ marginTop: 2 }}>
                  Copy Your ID
                </Button>
              </CopyToClipboard>
            </Grid2>
            <Grid2 item xs={12} md={6} sx={{ padding: 2 }}>
              <Typography gutterBottom variant="h6">Make a call</Typography>
              <TextField label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
              {callAccepted && !callEnded ? (
                <Button variant="contained" color="secondary" startIcon={<PhoneDisabled fontSize="large" />} fullWidth onClick={leaveCall} sx={{ marginTop: 2 }}>
                  Hang Up
                </Button>
              ) : (
                <Button variant="contained" color="primary" startIcon={<Phone fontSize="large" />} fullWidth onClick={() => callUser(idToCall)} sx={{ marginTop: 2 }}>
                  Call
                </Button>
              )}
            </Grid2>
          </Grid2>
        </form>
        {children}
      </Paper>
    </Container>
  );
};

export default Options;
