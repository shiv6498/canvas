import React, { useState, useEffect } from 'react';
import '../App.css';

function TrendingImages() {
  const [trendingImages, setTrendingImages] = useState([]);
  const [loading, setLoading] = useState(true); // Initially loading
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingImages = async () => {
      setLoading(true);
      setError(null); // Reset error state before fetching

      try {
        const response = await fetch(
          `https://api.pexels.com/v1/curated?page=${page}&per_page=30`,
          {
            headers: {
              Authorization: process.env.REACT_APP_SECRET_KEY, // Ensure this is set
            },
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch trending images');
        }

        const data = await response.json();

        // Avoid duplicate images
        setTrendingImages((prevImages) => {
          const ids = new Set(prevImages.map((image) => image.id));
          const uniqueImages = data.photos.filter((image) => !ids.has(image.id));
          return [...prevImages, ...uniqueImages];
        });
      } catch (err) {
        setError(err.message); // Set error message
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingImages();
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1); // Increment page to load more
  };

  return (
    <div>
      <h1 id="ht1">Latest Wallpapers</h1>
      <h2 id="ht2">Trending Images</h2>

      {/* Display error message if there is one */}
      {error && <p className="error-message">Error: {error}</p>}

      {/* Display images */}
      <div className="image-grid">
        {trendingImages.map((image, index) => (
          <div key={`${image.id}-${index}`} className="image-card">
            <img src={image.src.medium} alt={image.photographer} />
          </div>
        ))}
      </div>

      {/* Display load more button */}
      {!loading && !error && trendingImages.length > 0 && (
        <button
          onClick={loadMore}
          disabled={loading}
          className="load-more-btn"
        >
          Load More
        </button>
      )}

      {/* Fallback for no data */}
      {!loading && !error && trendingImages.length === 0 && (
        <p>No trending images found.</p>
      )}
    </div>
  );
}

export default TrendingImages;
