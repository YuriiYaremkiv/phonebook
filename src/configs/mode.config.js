const modeConfig = {
  style: {
    light: {
      backgroundColorHeader: { backgroundColor: '#fff' },
      backgroundColorMain: { backgroundColor: '#eeeeee' },
      backgroundColorFooter: { backgroundColor: '#fff' },
      colorIcon: { color: '#000' },
      textColor: { color: '#000' },
    },
    dark: {
      backgroundColorHeader: { backgroundColor: '#050505' },
      backgroundColorMain: { backgroundColor: '#616161' },
      backgroundColorFooter: { backgroundColor: '#050505' },
      colorIcon: { color: '#1976d2' },
      textColor: { color: '#fff' },
    },

    textColorAndHover: {
      light: {
        color: 'red',
        transition: 'color 0.2s ease-in-out',
      },
      dark: {
        color: 'red',
        transition: 'color 0.2s ease-in-out',
      },
    },
  },
  themeConfig: {
    light: 'light',
    dark: 'dark',
  },
};

export default modeConfig;
