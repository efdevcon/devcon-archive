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
              devconNum
              location
              conferenceDates
              data {
                title
                speakers
                url
                day
                room
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

    /*
     * Sets are an easy way to provide data for the UI filter where you only
     * want one of each category. However passing Sets to the pageContext
     * object returns an empty object, so instead we convert them to an array.
     */

    const createDays = data => {
      const daysSet = new Set();
      for (let i of data) {
        daysSet.add(i.day);
      }
      daysSet.delete("N/A");
      return [...daysSet];
    };

    const createRooms = data => {
      const roomsSet = new Set();
      for (let i of data) {
        roomsSet.add(i.room);
      }
      roomsSet.delete("N/A");
      return [...roomsSet];
    };

    /*
     * The nomenclature for `devcon{n}Videos` and `devcon{n}` variables is
     * not great. Essentially though the videos variables iterate through
     * the video yaml content, whereas the devcon{n} variables are created
     * just to fetch the name.
     */

    // Devcon0 Page Data
    const devcon0Videos = result.data.allVideosYaml.edges[0].node.data;
    const devcon0Days = createDays(devcon0Videos);
    const devcon0Rooms = createRooms(devcon0Videos);
    const devcon0 = result.data.allVideosYaml.edges[0].node;

    // Devcon1 Page Data
    const devcon1Videos = result.data.allVideosYaml.edges[1].node.data;
    const devcon1Days = createDays(devcon1Videos);
    const devcon1Rooms = createRooms(devcon1Videos);
    const devcon1 = result.data.allVideosYaml.edges[1].node;

    // Devcon2 Page Data
    const devcon2Videos = result.data.allVideosYaml.edges[2].node.data;
    const devcon2Days = createDays(devcon2Videos);
    const devcon2Rooms = createRooms(devcon2Videos);
    const devcon2 = result.data.allVideosYaml.edges[2].node;

    // Devcon3 Page Data
    const devcon3Videos = result.data.allVideosYaml.edges[3].node.data;
    const devcon3Days = createDays(devcon3Videos);
    const devcon3Rooms = createRooms(devcon3Videos);
    const devcon3 = result.data.allVideosYaml.edges[3].node;

    // Devcon4 Page Data
    const devcon4Videos = result.data.allVideosYaml.edges[4].node.data;
    const devcon4Days = createDays(devcon4Videos);
    const devcon4Rooms = createRooms(devcon4Videos);
    const devcon4 = result.data.allVideosYaml.edges[4].node;

    // Devcon5 Page Data
    const devcon5Videos = result.data.allVideosYaml.edges[5].node.data;
    const devcon5Days = createDays(devcon5Videos);
    const devcon5Rooms = createRooms(devcon5Videos);
    const devcon5 = result.data.allVideosYaml.edges[5].node;

    const postsPerPage = 21;
    const numPages0 = Math.ceil(devcon0Videos.length / postsPerPage);
    const numPages1 = Math.ceil(devcon1Videos.length / postsPerPage);
    const numPages2 = Math.ceil(devcon2Videos.length / postsPerPage);
    const numPages3 = Math.ceil(devcon3Videos.length / postsPerPage);
    const numPages4 = Math.ceil(devcon4Videos.length / postsPerPage);
    const numPages5 = Math.ceil(devcon5Videos.length / postsPerPage);

    /* Devcon 0 */
    Array.from({ length: numPages0 }).forEach((_, i) => {
      const previous =
        i === devcon0Videos.length - 1 ? null : devcon0Videos[i + 1];
      const next = i === 0 ? null : devcon0Videos[i - 1];
      createPage({
        path: i === 0 ? `/devcon-0/videos/` : `/devcon-0/videos/${i + 1}`,
        component: path.resolve("./src/templates/videos.js"),
        context: {
          slug: `/${devcon0.devcon}/videos`,
          limit: postsPerPage,
          skip: i * postsPerPage,
          previous,
          next,
          numPages: numPages0,
          currentPage: i + 1,
          devcon: devcon0Videos,
          devconNum: devcon0.devconNum,
          location: devcon0.location,
          conferenceDates: devcon0.conferenceDates,
          days: devcon0Days,
          rooms: devcon0Rooms,
        },
      });
    });

    /* Devcon 1 */
    Array.from({ length: numPages1 }).forEach((_, i) => {
      const previous =
        i === devcon1Videos.length - 1 ? null : devcon1Videos[i + 1];
      const next = i === 0 ? null : devcon1Videos[i - 1];
      createPage({
        path: i === 0 ? `/devcon-1/videos/` : `/devcon-1/videos/${i + 1}`,
        component: path.resolve("./src/templates/videos.js"),
        context: {
          slug: `/${devcon1.devcon}/videos`,
          limit: postsPerPage,
          skip: i * postsPerPage,
          previous,
          next,
          numPages: numPages1,
          currentPage: i + 1,
          devcon: devcon1Videos,
          devconNum: devcon1.devconNum,
          location: devcon1.location,
          conferenceDates: devcon1.conferenceDates,
          days: devcon1Days,
          rooms: devcon1Rooms,
        },
      });
    });

    /* Devcon 2 */
    Array.from({ length: numPages2 }).forEach((_, i) => {
      const previous =
        i === devcon2Videos.length - 1 ? null : devcon2Videos[i + 1];
      const next = i === 0 ? null : devcon2Videos[i - 1];
      createPage({
        path: i === 0 ? `/devcon-2/videos/` : `/devcon-2/videos/${i + 1}`,
        component: path.resolve("./src/templates/videos.js"),
        context: {
          slug: `/${devcon2.devcon}/videos`,
          limit: postsPerPage,
          skip: i * postsPerPage,
          previous,
          next,
          numPages: numPages2,
          currentPage: i + 1,
          devcon: devcon2Videos,
          devconNum: devcon2.devconNum,
          location: devcon2.location,
          conferenceDates: devcon2.conferenceDates,
          days: devcon2Days,
          rooms: devcon2Rooms,
        },
      });
    });

    /* Devcon 3 */
    Array.from({ length: numPages3 }).forEach((_, i) => {
      const previous =
        i === devcon3Videos.length - 1 ? null : devcon3Videos[i + 1];
      const next = i === 0 ? null : devcon3Videos[i - 1];
      createPage({
        path: i === 0 ? `/devcon-3/videos/` : `/devcon-3/videos/${i + 1}`,
        component: path.resolve("./src/templates/videos.js"),
        context: {
          slug: `/${devcon3.devcon}/videos`,
          limit: postsPerPage,
          skip: i * postsPerPage,
          previous,
          next,
          numPages: numPages3,
          currentPage: i + 1,
          devcon: devcon3Videos,
          devconNum: devcon3.devconNum,
          location: devcon3.location,
          conferenceDates: devcon3.conferenceDates,
          days: devcon3Days,
          rooms: devcon3Rooms,
        },
      });
    });

    /* Devcon 4 */
    Array.from({ length: numPages4 }).forEach((_, i) => {
      const previous =
        i === devcon4Videos.length - 1 ? null : devcon4Videos[i + 1];
      const next = i === 0 ? null : devcon4Videos[i - 1];
      createPage({
        path: i === 0 ? `/devcon-4/videos/` : `/devcon-4/videos/${i + 1}`,
        component: path.resolve("./src/templates/videos.js"),
        context: {
          slug: `/${devcon4.devcon}/videos`,
          limit: postsPerPage,
          skip: i * postsPerPage,
          previous,
          next,
          numPages: numPages4,
          currentPage: i + 1,
          devcon: devcon4Videos,
          devconNum: devcon4.devconNum,
          location: devcon4.location,
          conferenceDates: devcon4.conferenceDates,
          days: devcon4Days,
          rooms: devcon4Rooms,
        },
      });
    });

    /* Devcon 5 */
    Array.from({ length: numPages5 }).forEach((_, i) => {
      const previous =
        i === devcon5Videos.length - 1 ? null : devcon5Videos[i + 1];
      const next = i === 0 ? null : devcon5Videos[i - 1];
      createPage({
        path: i === 0 ? `/devcon-5/videos/` : `/devcon-5/videos/${i + 1}`,
        component: path.resolve("./src/templates/videos.js"),
        context: {
          slug: `/${devcon5.devcon}/videos`,
          limit: postsPerPage,
          skip: i * postsPerPage,
          previous,
          next,
          numPages: numPages5,
          currentPage: i + 1,
          devcon: devcon5Videos,
          devconNum: devcon5.devconNum,
          location: devcon5.location,
          conferenceDates: devcon5.conferenceDates,
          days: devcon5Days,
          rooms: devcon5Rooms,
        },
      });
    });
  });
};
