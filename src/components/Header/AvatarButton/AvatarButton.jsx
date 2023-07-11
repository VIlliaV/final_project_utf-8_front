import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
// import ava from './img/avatar.png';

export default function AvatarButton() {
  return (
    <Stack direction="row" spacing={2} sx={{ m: 10 }}  >
      <Avatar alt="Olena" />
    </Stack>
  );
}