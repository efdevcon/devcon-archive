import React from "react";
import { Link } from "gatsby";

/* CSS */
import css from "./devcon_videos.module.css";
import "../index.css";

/* Components */
import ArchiveHero from "../components/archive_hero";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";

const Videos = ({ pageContext }) => {
  /* Pagination logic */
  const isFirst = pageContext.currentPage === 1;
  const isLast = pageContext.currentPage === pageContext.numPages;
  const prevPage =
    pageContext.currentPage - 1 === 1
      ? pageContext.slug
      : `${pageContext.slug}/${pageContext.currentPage - 1}`.toString();
  const nextPage = `${pageContext.slug}/${pageContext.currentPage +
    1}`.toString();
  const currentPage = pageContext.currentPage;
  const limit = pageContext.limit;

  /* Data from pageContext object */
  const data = pageContext.devcon;
  const pagedData = data.filter(
    (video, index) =>
      index < currentPage * limit && index > (currentPage - 1) * limit - 1
  );

  return (
    <div>
      <Header />
      <ArchiveHero
        number="placeholder"
        location="placeholder"
        date="placeholder"
      />
      <Navbar devcon={`placeholder`} />
      <main>
        {/* TODO Implement filters <div className={css.filters}>
          All | Main Stage | Second Stage | Breakout Rooms
        </div> */}
        <div className={css.videos}>
          <div className={css.videoGrid}>
            {pagedData.map((video, index) => (
              <div className={css.videoCard} key={index}>
                <iframe
                  frameborder="0"
                  src={video.url}
                  title={video.title}
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                  allowfullscreen
                />
                <p className={css.title}>{video.title}</p>
                <p className={css.speakers}>By {video.speakers}</p>
              </div>
            ))}
          </div>
          <div className={css.pagination}>
            {!isFirst && (
              <Link to={prevPage} rel="prev">
                ← Previous Page
              </Link>
            )}

            {!isLast && (
              <Link to={nextPage} rel="next">
                Next Page →
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
