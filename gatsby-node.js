/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const devconTemplate = path.resolve(`./src/templates/videos.js`);

  return graphql(
    `
      {
        allVideosYaml {
          edges {
            node {
              devcon
              data {
                title
                speakers
                url
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    const devcon0 = result.data.allVideosYaml.edges[0].node.data;
    const devcon0Url = result.data.allVideosYaml.edges[0].node.devcon;
    const devcon1 = result.data.allVideosYaml.edges[1].node.data;
    const devcon1Url = result.data.allVideosYaml.edges[1].node.devcon;
    const devcon2 = result.data.allVideosYaml.edges[2].node.data;
    const devcon2Url = result.data.allVideosYaml.edges[2].node.devcon;
    const devcon3 = result.data.allVideosYaml.edges[3].node.data;
    const devcon3Url = result.data.allVideosYaml.edges[3].node.devcon;
    const devcon4 = result.data.allVideosYaml.edges[4].node.data;
    const devcon4Url = result.data.allVideosYaml.edges[4].node.devcon;
    const devcon5 = result.data.allVideosYaml.edges[5].node.data;
    const devcon5Url = result.data.allVideosYaml.edges[5].node.devcon;

    const postsPerPage = 20;
    const numPages0 = Math.ceil(devcon0.length / postsPerPage);
    const numPages1 = Math.ceil(devcon1.length / postsPerPage);
    const numPages2 = Math.ceil(devcon2.length / postsPerPage);
    const numPages3 = Math.ceil(devcon3.length / postsPerPage);
    const numPages4 = Math.ceil(devcon4.length / postsPerPage);
    const numPages5 = Math.ceil(devcon5.length / postsPerPage);

    /* Devcon 0 */
    Array.from({ length: numPages0 }).forEach((_, i) => {
      const previous = i === devcon0.length - 1 ? null : devcon0[i + 1];
      const next = i === 0 ? null : devcon0[i - 1];
      createPage({
        path: i === 0 ? `/devcon-0/videos/` : `/devcon-0/videos/${i + 1}`,
        component: path.resolve("./src/templates/videos.js"),
        context: {
          slug: `/${devcon0Url}/videos`,
          limit: postsPerPage,
          skip: i * postsPerPage,
          previous,
          next,
          numPages: numPages0,
          currentPage: i + 1,
          devcon: devcon0,
        },
      });
    });

    /* Devcon 1 */
    Array.from({ length: numPages1 }).forEach((_, i) => {
      const previous = i === devcon1.length - 1 ? null : devcon1[i + 1];
      const next = i === 0 ? null : devcon1[i - 1];
      createPage({
        path: i === 0 ? `/devcon-1/videos/` : `/devcon-1/videos/${i + 1}`,
        component: path.resolve("./src/templates/videos.js"),
        context: {
          slug: `/${devcon1Url}/videos`,
          limit: postsPerPage,
          skip: i * postsPerPage,
          previous,
          next,
          numPages: numPages1,
          currentPage: i + 1,
          devcon: devcon1,
        },
      });
    });

    /* Devcon 2 */
    Array.from({ length: numPages2 }).forEach((_, i) => {
      const previous = i === devcon2.length - 1 ? null : devcon2[i + 1];
      const next = i === 0 ? null : devcon2[i - 1];
      createPage({
        path: i === 0 ? `/devcon-2/videos/` : `/devcon-2/videos/${i + 1}`,
        component: path.resolve("./src/templates/videos.js"),
        context: {
          slug: `/${devcon2Url}/videos`,
          limit: postsPerPage,
          skip: i * postsPerPage,
          previous,
          next,
          numPages: numPages2,
          currentPage: i + 1,
          devcon: devcon2,
        },
      });
    });

    /* Devcon 3 */
    Array.from({ length: numPages3 }).forEach((_, i) => {
      const previous = i === devcon3.length - 1 ? null : devcon3[i + 1];
      const next = i === 0 ? null : devcon3[i - 1];
      createPage({
        path: i === 0 ? `/devcon-3/videos/` : `/devcon-3/videos/${i + 1}`,
        component: path.resolve("./src/templates/videos.js"),
        context: {
          slug: `/${devcon3Url}/videos`,
          limit: postsPerPage,
          skip: i * postsPerPage,
          previous,
          next,
          numPages: numPages3,
          currentPage: i + 1,
          devcon: devcon3,
        },
      });
    });

    /* Devcon 4 */
    Array.from({ length: numPages4 }).forEach((_, i) => {
      const previous = i === devcon4.length - 1 ? null : devcon4[i + 1];
      const next = i === 0 ? null : devcon4[i - 1];
      createPage({
        path: i === 0 ? `/devcon-4/videos/` : `/devcon-4/videos/${i + 1}`,
        component: path.resolve("./src/templates/videos.js"),
        context: {
          slug: `/${devcon4Url}/videos`,
          limit: postsPerPage,
          skip: i * postsPerPage,
          previous,
          next,
          numPages: numPages4,
          currentPage: i + 1,
          devcon: devcon4,
        },
      });
    });

    /* Devcon 5 */
    Array.from({ length: numPages5 }).forEach((_, i) => {
      const previous = i === devcon5.length - 1 ? null : devcon5[i + 1];
      const next = i === 0 ? null : devcon5[i - 1];
      createPage({
        path: i === 0 ? `/devcon-5/videos/` : `/devcon-5/videos/${i + 1}`,
        component: path.resolve("./src/templates/videos.js"),
        context: {
          slug: `/${devcon5Url}/videos`,
          limit: postsPerPage,
          skip: i * postsPerPage,
          previous,
          next,
          numPages: numPages5,
          currentPage: i + 1,
          devcon: devcon5,
        },
      });
    });
  });
};
