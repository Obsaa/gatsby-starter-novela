module.exports = {
  siteMetadata: {
    title: `#DevAfrica Tech/Policy Blog by Obsaa`,
    name: `#DevAfrica`,
    siteUrl: `https://obsaa.com`,
    description: `Exploration of human development at the intersection tech, social media, human rights, and developing markets.`,
    hero: {
      heading: `Welcome to the home #DevAfrica blog and soon to follow podcast. I hope to create content that explores human development at the intersection tech, social media, human rights, and developing markets.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/obsaa`,
      },
      {
        name: `github`,
        url: `https://github.com/in/obsaa/`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/obsaa`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/obsaa/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `#DevAfrica by Obsaa Abdalhalim`,
        short_name: `#DevAfrica`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
