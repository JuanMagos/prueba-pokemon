import styled from 'styled-components';
import { Box } from '@mui/material';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #23242e;
  height: auto;
`;

export const SpacingList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const BoxModal = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  background-color: white;
  border: 1px solid #000;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #000;
  padding: 20px;
`;
