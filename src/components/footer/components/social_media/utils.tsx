import React from 'react';
import {
  TelegramIcon,
  TwitterIcon,
  MediumIcon,
} from '@icons';

export const socialMediaLinks:{
  component: React.ReactNode;
  className: string;
  url: string;
}[] = [
  {
    component: <TelegramIcon />,
    className: 'telegram',
    url: 'https://t.me/hupayx_community',
  },
  {
    component: <TwitterIcon />,
    className: 'twitter',
    url: 'https://twitter.com/hupayx',
  },
  {
    component: <MediumIcon />,
    className: 'medium',
    url: 'https://medium.com/hupayx/',
  },
];
