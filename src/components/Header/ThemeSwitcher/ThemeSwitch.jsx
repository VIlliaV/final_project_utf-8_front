import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

import { useDispatch } from 'react-redux';
import { themeToggle } from 'redux/auth/authOperations';
import { useAuth } from 'utils/hooks/useAuth';
import { useState } from 'react';

export default function ThemeSwitcher() {
  const { isThemeToggle } = useAuth();

  const [checked, setChecked] = useState(isThemeToggle);

  const dispatch = useDispatch();

  const getValue = () => {

	dispatch(themeToggle());

	setChecked(!checked); // изменяем значение на противоположное


  };

  return (
    <FormGroup>
      <FormControlLabel control={<IOSSwitch innerShadow onChange={getValue} checked={!checked} />} label="" />
      <svg width="0" height="0">
        <defs>
          <linearGradient
            id="paint0_linear_18976_752"
            x1="14.725"
            y1="5.5"
            x2="14.725"
            y2="26.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>
        </defs>
      </svg>
    </FormGroup>
  );
}

const IOSSwitch = styled(({ innerShadow, ...props }) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme, innerShadow }) => ({
  width: 61,
  height: 27,
  padding: 0,
  position: 'relative',
  '& .MuiSwitch-switchBase': {
    padding: 0.5,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(34.5px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#8BAA36',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 21.3,
    height: 21,
    position: 'relative',
    zIndex: 1,
    background: 'linear-gradient(180deg, #FFFFFF, #FFFFFF)', // Используем белый цвет для ползунка
    borderRadius: '50%',
    boxShadow: `inset 0 0 2px rgba(0, 0, 0, 0.2), 0 0 4px rgba(0, 0, 0, 0.2)`, // Внутренняя и внешняя тени для ползунка
    transform: 'translateZ(0)', // Включение 3D-режима
  },
  '& .MuiSwitch-thumb.Mui-focusVisible': {
    boxShadow: `0 0 0 4px ${theme.palette.primary.main}33`, // Тень для фокуса на ползунке
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
    ...(innerShadow && {
      boxShadow: 'inset 0 0 4px rgba(0, 0, 0, 0.3)', // Внутренняя тень для трека
    }),
  },
}));
