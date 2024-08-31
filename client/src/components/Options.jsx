import React, { useState, useContext } from 'react';
import { Button, TextField, Grid, Typography, Container, Paper } from '@mui/material'; // Use Grid instead of Grid2
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from '@mui/icons-material';
import { styled } from '@mui/system';
import { SocketContext } from '../SocketContext';

// Define styles using the styled API
const StyledContainer = styled(Container)({
  width: '600px',
  margin: '35px 0',
  padding: 0,
  '@media (max-width:600px)': {
    width: '80%',
  },
});

const StyledPaper = styled(Paper)({
  padding: '10px 20px',
  border: '2px solid black',
});

const StyledGrid = styled(Grid)({
  padding: '20px',
});

const StyledButton = styled(Button)({
  marginTop: '20px',
});

const Sidebar = ({ children }) => {
  const context = useContext(SocketContext);
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = context || {};
  const [idToCall, setIdToCall] = useState('');

  // Check if context is provided correctly
  if (!context) return null;

  return (
    <StyledContainer>
      <StyledPaper elevation={10}>
        <form noValidate autoComplete="off">
          <Grid container>
            <StyledGrid item xs={12} md={6}>
              <Typography gutterBottom variant="h6">Account Info</Typography>
              <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
              <CopyToClipboard text={me}>
                <StyledButton variant="contained" color="primary" fullWidth startIcon={<Assignment fontSize="large" />}>
                  Copy Your ID
                </StyledButton>
              </CopyToClipboard>
            </StyledGrid>
            <StyledGrid item xs={12} md={6}>
              <Typography gutterBottom variant="h6">Make a call</Typography>
              <TextField label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
              {callAccepted && !callEnded ? (
                <StyledButton variant="contained" color="secondary" startIcon={<PhoneDisabled fontSize="large" />} fullWidth onClick={leaveCall}>
                  Hang Up
                </StyledButton>
              ) : (
                <StyledButton variant="contained" color="primary" startIcon={<Phone fontSize="large" />} fullWidth onClick={() => callUser(idToCall)}>
                  Call
                </StyledButton>
              )}
            </StyledGrid>
          </Grid>
        </form>
        {children}
      </StyledPaper>
    </StyledContainer>
  );
};

export default Sidebar;

