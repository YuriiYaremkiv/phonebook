const modeConfig = {
  style: {
    light: {
      backgroundColorHeader: { backgroundColor: '#fff' },
      backgroundColorMain: { backgroundColor: 'rgba(0, 0, 0, 0.04)' },
      backgroundColorSecondary: { backgroundColor: 'fafafa' },
      backgroundColorModal: { backgroundColor: 'rgba(0, 0, 0, 0.35)' },
      textColor: { color: '#000' },
    },
    dark: {
      backgroundColorHeader: { backgroundColor: '#050505' },
      backgroundColorMain: { backgroundColor: '#000' },
      backgroundColorSecondary: { backgroundColor: '212121' },
      backgroundColorModal: { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
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
      red: {
        color: 'red',
        transition: 'color 0.2s ease-in-out',
      },
    },
    gradientBgImage: {
      light: {
        backgroundImage:
          'linear-gradient(to top, rgba(245,245,245,1), rgba(0,0,0,0))',
      },
      dark: {
        backgroundImage:
          'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))',
      },
      red: {
        backgroundImage:
          'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))',
      },
    },
    horizontalGradientBgImage: {
      light: {
        backgroundImage:
          'linear-gradient(to right, rgba(245,245,245,0.8), rgba(0,0,0,0))',
      },
      dark: {
        backgroundImage:
          'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0))',
      },
      red: {
        backgroundImage:
          'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0))',
      },
    },
    verticalGradientBgImage: {
      light: {
        backgroundImage:
          'linear-gradient(to top, rgba(245,245,245,0.9), rgba(0,0,0,0))',
      },
      dark: {
        backgroundImage:
          'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0))',
      },
      red: {
        backgroundImage:
          'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0))',
      },
    },
  },
  themeConfig: {
    light: 'light',
    dark: 'dark',
    red: 'red',
  },
};

export default modeConfig;
