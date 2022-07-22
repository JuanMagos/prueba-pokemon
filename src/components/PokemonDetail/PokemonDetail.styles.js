import styled from 'styled-components';
import { Avatar, Box } from '@mui/material';

export const AvatarContainer = styled(Box)`
  background-color: ${({ color }) => color};
`;

export const AvatarModal = styled(Avatar)`
  width: 200px !important;
  height: 200px !important;
`;
