module.exports = {
  mode: "jit",
  purge: ["./*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      desktop: "60em",

      "big-desktop": "85em",
    },
    colors: {
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
      "dark-gray": "hsl(0, 0%, 55%)",
      "very-dark-gray": "hsl(0, 0%, 41%)",
    },
    fontFamily: {
      alata: "'Alata', sans-serif",
      josefin: "'Josefin Sans', sans-serif",
    },
    backgroundImage: {
      "hero-mobile": "url('./src/assets/images/mobile/image-hero.jpg')",
      "hero-desktop":
        "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('./src/assets/images/desktop/image-hero.jpg')",

      "deep-earth-mobile":
        "url('./src/assets/images/mobile/image-deep-earth.jpg')",
      "deep-earth-desktop":
        "url('./src/assets/images/desktop/image-deep-earth.jpg')",

      "night-arcade-mobile":
        "linear-gradient(45deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1)),url('./src/assets/images/mobile/image-night-arcade.jpg')",
      "night-arcade-desktop":
        "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('./src/assets/images/desktop/image-night-arcade.jpg')",

      "soccer-team-mobile":
        "url('./src/assets/images/mobile/image-soccer-team.jpg')",
      "soccer-team-desktop":
        "url('./src/assets/images/desktop/image-soccer-team.jpg')",

      "the-grid-mobile":
        "linear-gradient(45deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1)),url('./src/assets/images/mobile/image-grid.jpg')",
      "the-grid-desktop": "url('./src/assets/images/desktop/image-grid.jpg')",

      "from-above-mobile":
        "linear-gradient(45deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)),url('./src/assets/images/mobile/image-from-above.jpg')",
      "from-above-desktop":
        "linear-gradient(360deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1)),url('./src/assets/images/desktop/image-from-above.jpg')",

      "pocket-borealis-mobile":
        "linear-gradient(45deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)),url('./src/assets/images/mobile/image-pocket-borealis.jpg')",
      "pocket-borealis-desktop":
        "url('./src/assets/images/desktop/image-pocket-borealis.jpg')",

      "the-curiosity-mobile":
        "linear-gradient(45deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),url('./src/assets/images/mobile/image-curiosity.jpg')",
      "the-curiosity-desktop":
        "linear-gradient(360deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)),url('./src/assets/images/desktop/image-curiosity.jpg')",

      "fisheye-mobile":
        "linear-gradient(45deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1)),url('./src/assets/images/mobile/image-fisheye.jpg')",
      "fisheye-desktop":
        "linear-gradient(360deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)),url('./src/assets/images/desktop/image-fisheye.jpg')",
    },
    extend: {
      fontSize: {
        bodycopy: "0.9rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
