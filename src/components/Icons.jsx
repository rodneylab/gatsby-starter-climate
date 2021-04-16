import React from 'react';
import FeatherIcon from 'feather-icons-react';

export const CameraIcon = () => (
  <span role="img" aria-label="camera">
    <FeatherIcon icon="camera" size="96" />
  </span>
);
export const EmailIcon = () => (
  <span role="img" aria-label="email">
    <FeatherIcon icon="mail" />
  </span>
);
export const ExternalLinkIcon = () => (
  <span role="img" aria-label="external link">
    <FeatherIcon icon="external-link" size="16" />
  </span>
);
export const FacebookIcon = () => (
  <span role="img" aria-label="facebook">
    <FeatherIcon icon="facebook" />
  </span>
);
// eslint-disable-next-line react/prop-types
export const FilmIcon = ({ size = '16' }) => (
  <span role="img" aria-label="film">
    <FeatherIcon icon="film" size={size} />
  </span>
);
export const GithubIcon = () => (
  <span role="img" aria-label="git hub">
    <FeatherIcon icon="github" />
  </span>
);
export const LinkedinIcon = () => (
  <span role="img" aria-label="linked in">
    <FeatherIcon icon="linkedin" />
  </span>
);
// eslint-disable-next-line react/prop-types
export const SettingsIcon = ({ size = '16' }) => (
  <span role="img" aria-label="settings">
    <FeatherIcon icon="settings" size={size} />
  </span>
);
export const TelegramIcon = () => (
  <span role="img" aria-label="telegram">
    <FeatherIcon icon="send" />
  </span>
);
// eslint-disable-next-line react/prop-types
export const ThermometerIcon = ({ size = '16' }) => (
  <span role="img" aria-label="thermometer">
    <FeatherIcon icon="thermometer" size={size} />
  </span>
);
export const TwitterIcon = () => (
  <span role="img" aria-label="twitter">
    <FeatherIcon icon="twitter" />
  </span>
);
export const WireIcon = () => (
  <span role="img" aria-label="wire" style={{ width: '24px', height: '24px' }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 275.4 226.2">
      <path d="M275.4 141.2c0 46.9-37.9 84.9-84.8 85-19 0-37.5-6.4-52.4-18.3a84.95 84.95 0 0 1-52.8 18.4c-46.9 0-85.4-38.1-85.4-85V7.5h16.2v133.6c.1 38.1 31.1 68.9 69.2 68.8 14.7 0 29-4.8 40.8-13.5-13.4-15.3-20.8-35-20.9-55.3V31.8c.3-17.9 15.1-32.1 33-31.8 17.4.3 31.5 14.4 31.8 31.8v109.3c.1 20.3-7.2 39.9-20.4 55.3 30.4 22.6 73.4 16.3 96-14.1 8.8-11.9 13.6-26.3 13.5-41.2V7.5h16.2v133.7zM153.9 31.8a16.2 16.2 0 0 0-32.4 0v109.3c0 16.2 5.8 31.9 16.2 44.3 10.5-12.4 16.2-28.1 16.2-44.3V31.8z" />
    </svg>
  </span>
);
