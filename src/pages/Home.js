import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

function Home({ data, loading, loadMorePhotos, hasMore, handleLink, searchTerm }) {
  return (
    <div>
      {loading && <h1>Fetching...</h1>}
      <div className="Description">
        <div className='descrip'>
        <h1 className='heading'>Free Wallpapers For Your Devices By <i>Canvas</i></h1>
        <p className='heading2'>Welcome to Canvas Discover a world of stunning wallpapers 
          at your fingertips. Whether you're looking to elevate your desktop, 
          refresh your smartphone, or find inspiration, Canvas offers a curated collection 
          of high-quality wallpapers to match every style.
         Explore. Download. Transform your screen.
         </p> {/* Changed <text> to <p> */}
        <nav>
          <Link to="/popular" onClick={() => handleLink("/popular")}>
            <button className="Popular" id='H-P'>
              Latest Wallpaper
            </button>
          </Link>
        </nav>
        </div>
      </div>
      <h1 className='SearchTerm'>{searchTerm}</h1>
      <div className='image-container'>
        {data.length > 0 ? (
          data.map((item, index) => (
            <div className="box" key={index}>
              <img src={item.src.large} alt={item.photographer} />
            </div>
          ))
        ) : (
          !loading && <h2>No images found</h2>
        )}
      </div>
      {hasMore && !loading && (
        <button onClick={loadMorePhotos} className="load-more-btn">
          Load More
        </button>
      )}
    </div>
  );
}

export default Home;
