import React from "react"
import { Link } from "gatsby"

const DevconList = ({ pageContext }) => {
  const isFirst = pageContext.currentPage === 1;
  const isLast = pageContext.currentPage === pageContext.numPages;
  const prevPage =
    pageContext.currentPage - 1 === 1
      ? pageContext.slug
      : (`${pageContext.slug}/${pageContext.currentPage - 1}`).toString();
  const nextPage = (`${pageContext.slug}/${pageContext.currentPage + 1}`).toString();
  const hello = () => console.log(pageContext);
  const data = pageContext.devcon;
  const currentPage = pageContext.currentPage;
  const limit = pageContext.limit;
  const pagedData = data.filter((video, index) => index < currentPage * limit && index > ((currentPage - 1) * limit) - 1);

  return (
    <div>
      <p>Hello world</p>
      {hello()}
      <ol>
        {pagedData.map((video) => (
          <li>{video.title}</li>
        ))}
      </ol>
      <div>
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
  )
}

export default DevconList
