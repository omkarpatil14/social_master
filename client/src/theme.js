// color design tokens export
export const colorTokens = {
  grey: {
    0: "#FFFFFF",
    10: "#F6F6F6",
    50: "#F0F0F0",
    100: "#E0E0E0",
    200: "#C2C2C2",
    300: "#A3A3A3",
    400: "#858585",
    500: "#666666",
    600: "#4D4D4D",
    700: "#333333",
    800: "#1A1A1A",
    900: "#0A0A0A",
    1000: "#000000",
  },
  primary: {
    50: "#E0FFA3",
    100: "#B3FF5C",
    200: "#99FF33",
    300: "#80FF00",
    400: "#66CC00",
    500: "#4D9900",
    600: "#336600",
    700: "#1A3300",
    800: "#001900",
    900: "#000D00",
  },
   secondary: {
    50: "#E6FFFA",
    100: "#B3FFD9",
    200: "#80FFC2",
    300: "#4DFFAD",
    400: "#1AFF96",
    500: "#00E6B8",
    600: "#00B386",
    700: "#008F5C",
    800: "#00663A",
    900: "#004D2A",
  },
  accent: {
    50: "#FFFFFF",
    100: "#FFFFFF",
    200: "#FFFFFF",
    300: "#FFFFFF",
    400: "#FFFFFF",
    500: "#F6F6F6", // Light Gray
    600: "#C2C2C2",
    700: "#858585",
    800: "#4D4D4D",
    900: "#1A1A1A",
  },
};


// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              dark: colorTokens.primary[200],
              main: colorTokens.primary[500],
              light: colorTokens.primary[800],
            },
            neutral: {
              dark: colorTokens.grey[100],
              main: colorTokens.grey[200],
              mediumMain: colorTokens.grey[300],
              medium: colorTokens.grey[400],
              light: colorTokens.grey[700],
            },
            background: {
              default: colorTokens.grey[900],
              alt: colorTokens.grey[800],
            },
          }
        : {
            // palette values for light mode
            primary: {
              dark: colorTokens.secondary[500],
              main: colorTokens.secondary[500],
              light: colorTokens.secondary[50],
            },
            neutral: {
              dark: colorTokens.grey[700],
              main: colorTokens.grey[500],
              mediumMain: colorTokens.grey[400],
              medium: colorTokens.grey[300],
              light: colorTokens.grey[200],
            },
            background: {
              default: colorTokens.grey[100],
              alt: colorTokens.grey[50],
            },
          }),
    },
    typography: {
      fontFamily: ["Rubik", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
