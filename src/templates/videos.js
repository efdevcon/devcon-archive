import React from "react";
import { Link } from "gatsby";

/* CSS */
import css from "./videos.module.css";
import "../index.css";

/* Components */
import ArchiveHero from "../components/archive_hero";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import SEO from "../components/SEO";

const Videos = ({ pageContext }) => {
  /* Pagination logic */
  const isFirst = pageContext.currentPage === 1;
  const isLast = pageContext.currentPage === pageContext.numPages;
  const multiPages = pageContext.numPages > 1;
  const prevPage =
    pageContext.currentPage - 1 === 1
      ? pageContext.slug
      : `${pageContext.slug}/${pageContext.currentPage - 1}`.toString();
  const nextPage = `${pageContext.slug}/${pageContext.currentPage +
    1}`.toString();
  const currentPage = pageContext.currentPage;
  const limit = pageContext.limit;
  const pagination = [];
  for (let i = 1; i <= pageContext.numPages; i++) {
    if (i === 1) {
      pagination.push(i);
    }
    if (i >= pageContext.currentPage - 2 && i <= pageContext.currentPage + 2) {
      if (!pagination.includes(i)) {
        pagination.push(i);
      }
    }
    if (i === pageContext.numPages) {
      if (!pagination.includes(i)) {
        pagination.push(i);
      }
    }
  }
  /* Add ellipses to pagination */
  let prevPointer = pagination[0];
  for (let i = 1; i < pagination.length; i++) {
    if (pagination[i] - prevPointer > 1) {
      pagination.splice(i, 0, "...");
    }
    prevPointer = pagination[i];
  }

  /* Data from pageContext object */
  const data = pageContext.devcon;
  const pagedData = data.filter(
    (video, index) =>
      index < currentPage * limit && index > (currentPage - 1) * limit - 1
  );
  const days = pageContext.days;
  const rooms = pageContext.rooms;

  return (
    <div className={css.videoPage}>
      {/* TODO Specify Devcon */}
      <SEO title="Devcon Videos" />
      <Header color="white" />
      <ArchiveHero
        number={pageContext.devconNum}
        location={pageContext.location}
        date={pageContext.conferenceDates}
      />
      <Navbar devcon={`devcon-${pageContext.devconNum}`} />
      <main>
        {/*<div className={css.filters}>
          <div>
            <span>Days: </span>
            <span>All </span>
            {days.map(day => (
              <span> | {day}</span>
            ))}
          </div>
          <div>
            <span>Rooms: </span>
            <span>All </span>
            {rooms.map(room => (
              <span> | {room}</span>
            ))}
          </div>
        </div> */}
          <div className={css.pagination}>
            {!isFirst && (
              <Link className={`${css.pageLink}`} to={prevPage} rel="prev">
                ← Previous Page
              </Link>
            )}

            {multiPages &&
              pagination.map(num => {
                return num === "..." ? (
                  <span>...</span>
                ) : (
                  <Link
                    className={`${css.pageLink} ${css.pages}`}
                    to={`${pageContext.slug}/${num}`}
                  >
                    {num}
                  </Link>
                );
              })}

            {!isLast && (
              <Link className={`${css.pageLink}`} to={nextPage} rel="next">
                Next Page →{" "}
              </Link>
            )}
          </div>
        <div className={css.videos}>
          <div className={css.videoGrid}>
            {pagedData.map((video, index) => (
              <div className={css.videoCard} key={index}>
                <div className={css.iframeContainer}>
                  <iframe
                    frameBorder="0"
                    src={video.url}
                    title={video.title}
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    allowFullScreen
                  />
                </div>
                <p className={css.title}>{video.title}</p>
                {video.speakers !== "N/A" && (
                  <p className={css.speakers}>By {video.speakers}</p>
                )}
              </div>
            ))}
          </div>
          <div className={css.pagination}>
            {!isFirst && (
              <Link className={`${css.pageLink}`} to={prevPage} rel="prev">
                ← Previous Page
              </Link>
            )}

            {multiPages &&
              pagination.map(num => {
                return num === "..." ? (
                  <span>...</span>
                ) : (
                  <Link
                    className={`${css.pageLink} ${css.pages}`}
                    to={`${pageContext.slug}/${num}`}
                  >
                    {num}
                  </Link>
                );
              })}

            {!isLast && (
              <Link className={`${css.pageLink}`} to={nextPage} rel="next">
                Next Page →{" "}
              </Link>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Videos;
