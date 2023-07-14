const size = {
  mini: '374px',
  mobile: '375px',
  tablet: '768px',
  desktop: '1440px',
};

export const media = {
  mini: `screen and (max-width: ${size.mini})`,
  mobile: `screen and (min-width: ${size.mobile})`,
  tablet: `screen and (min-width: ${size.tablet})`,
  desktop: `screen and (min-width: ${size.desktop})`,
  mobMax: `screen and (max-width: 767px)`,
  mobTab: `screen and (min-width: ${size.mobile}) and (max-width: 767px)`,
  tabDesk: `screen and (min-width: ${size.tablet}) and (max-width: 1439px)`,
  retina: `and (-webkit-min-device-pixel-ratio: 2) `, //   tabDesk: `screen and (min-width: ${size.tablet}) and (max-width: ${size.desktop})`,
};
