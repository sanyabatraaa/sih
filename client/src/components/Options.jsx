import React, { useState, useContext } from 'react';
import { Button, TextField, Grid2, Typography, Container, Paper } from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from '@mui/icons-material';
import { styled } from '@mui/system';
import { SocketContext } from '../SocketContext';

// Define styles using the styled API
const useStyles = styled({
  container: {
    width: '600px',
    margin: '35px 0',
    padding: 0,
    '@media (max-width:600px)': {
      width: '80%',
    },
  },
  paper: {
    padding: '10px 20px',
    border: '2px solid black',
  },
  padding: {
    padding: '20px',
  },
  margin: {
    marginTop: '20px',
  },
});

const Sidebar = ({ children }) => {
  const context = useContext(SocketContext);
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = context || {};
  const [idToCall, setIdToCall] = useState('');

  const classes = useStyles();

  // Check if context is provided correctly
  if (!context) return null;

  return (
    <Container sx={classes.container}>
      <Paper elevation={10} sx={classes.paper}>
        <form className={classes.root} noValidate autoComplete="off">
          <Grid2 container>
            <Grid2 item xs={12} md={6} sx={classes.padding}>
              <Typography gutterBottom variant="h6">Account Info</Typography>
              <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
              <CopyToClipboard text={me}>
                <Button variant="contained" color="primary" fullWidth startIcon={<Assignment fontSize="large" />} sx={classes.margin}>
                  Copy Your ID
                </Button>
              </CopyToClipboard>
            </Grid2>
            <Grid2 item xs={12} md={6} sx={classes.padding}>
              <Typography gutterBottom variant="h6">Make a call</Typography>
              <TextField label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
              {callAccepted && !callEnded ? (
                <Button variant="contained" color="secondary" startIcon={<PhoneDisabled fontSize="large" />} fullWidth onClick={leaveCall} sx={classes.margin}>
                  Hang Up
                </Button>
              ) : (
                <Button variant="contained" color="primary" startIcon={<Phone fontSize="large" />} fullWidth onClick={() => callUser(idToCall)} sx={classes.margin}>
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

export default Sidebar;
