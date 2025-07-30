import React, { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Instagram API configuratie
  const INSTAGRAM_USERNAME = 'premiumcarworks.eu';
  const INSTAGRAM_ACCESS_TOKEN = process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN;

  useEffect(() => {
    fetchInstagramPosts();
    
    // Auto-refresh elke 5 minuten voor nieuwe posts
    const interval = setInterval(fetchInstagramPosts, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  const fetchInstagramPosts = async () => {
    try {
      setLoading(true);
      
      if (!INSTAGRAM_ACCESS_TOKEN) {
        // Fallback naar mock data als geen access token beschikbaar is
        console.warn('Instagram access token niet gevonden, gebruik mock data');
        setImages(getMockInstagramData());
        setLoading(false);
        return;
      }

      // Haal Instagram user ID op
      const userResponse = await fetch(
        `https://graph.instagram.com/me?fields=id,username&access_token=${INSTAGRAM_ACCESS_TOKEN}`
      );
      
      if (!userResponse.ok) {
        throw new Error('Kon Instagram gebruiker niet ophalen');
      }
      
      const userData = await userResponse.json();
      
      // Haal recente posts op
      const postsResponse = await fetch(
        `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,like_count,comments_count&access_token=${INSTAGRAM_ACCESS_TOKEN}&limit=12`
      );
      
      if (!postsResponse.ok) {
        throw new Error('Kon Instagram posts niet ophalen');
      }
      
      const postsData = await postsResponse.json();
      
      // Verwerk de posts
      const processedPosts = postsData.data
        .filter(post => post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM')
        .map(post => ({
          id: post.id,
          image: post.media_url || post.thumbnail_url,
          caption: post.caption || 'Premium Car Works project',
          likes: post.like_count || 0,
          comments: post.comments_count || 0,
          timestamp: new Date(post.timestamp),
          permalink: post.permalink
        }));
      
      setImages(processedPosts);
      setError(null);
    } catch (err) {
      console.error('Fout bij ophalen Instagram posts:', err);
      setError('Kon Instagram posts niet laden. Probeer het later opnieuw.');
      // Fallback naar mock data
      setImages(getMockInstagramData());
    } finally {
      setLoading(false);
    }
  };

  const getMockInstagramData = () => [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      likes: 1247,
      comments: 89,
      caption: 'Porsche 911 na keramische coating behandeling #premiumcarworks #detailing',
      timestamp: new Date('2024-01-15T10:30:00'),
      permalink: 'https://instagram.com/p/example1'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      likes: 892,
      comments: 45,
      caption: 'BMW M3 interieur reiniging #interior #detailing',
      timestamp: new Date('2024-01-14T15:45:00'),
      permalink: 'https://instagram.com/p/example2'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      likes: 1567,
      comments: 123,
      caption: 'Audi RS6 voor en na behandeling #beforeafter #premiumcarworks',
      timestamp: new Date('2024-01-13T09:15:00'),
      permalink: 'https://instagram.com/p/example3'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      likes: 743,
      comments: 67,
      caption: 'Mercedes AMG GT detailing #luxury #detailing',
      timestamp: new Date('2024-01-12T14:20:00'),
      permalink: 'https://instagram.com/p/example4'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      likes: 1102,
      comments: 78,
      caption: 'Ferrari 488 lakcorrectie #ferrari #paintcorrection',
      timestamp: new Date('2024-01-11T11:30:00'),
      permalink: 'https://instagram.com/p/example5'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      likes: 934,
      comments: 56,
      caption: 'Lamborghini Huracan keramische coating #lamborghini #ceramiccoating',
      timestamp: new Date('2024-01-10T16:45:00'),
      permalink: 'https://instagram.com/p/example6'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      likes: 678,
      comments: 34,
      caption: 'Porsche Cayenne interieur behandeling #porsche #interior',
      timestamp: new Date('2024-01-09T13:15:00'),
      permalink: 'https://instagram.com/p/example7'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      likes: 1456,
      comments: 112,
      caption: 'BMW M4 complete detailing #bmw #m4 #detailing',
      timestamp: new Date('2024-01-08T10:30:00'),
      permalink: 'https://instagram.com/p/example8'
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      likes: 823,
      comments: 47,
      caption: 'Audi R8 voorbereiding voor keramische coating #audir8 #premiumcarworks',
      timestamp: new Date('2024-01-07T15:20:00'),
      permalink: 'https://instagram.com/p/example9'
    }
  ];

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const diffInHours = Math.floor((now - timestamp) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Nu';
    if (diffInHours < 24) return `${diffInHours}u geleden`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d geleden`;
    const diffInWeeks = Math.floor(diffInDays / 7);
    if (diffInWeeks < 4) return `${diffInWeeks}w geleden`;
    const diffInMonths = Math.floor(diffInDays / 30);
    return `${diffInMonths}m geleden`;
  };

  const handleImageClick = (permalink) => {
    window.open(permalink, '_blank', 'noopener,noreferrer');
  };

  if (loading) {
    return (
      <section className="gallery-page">
        <div className="container">
          <div className="page-header">
            <h1>GALLERIJ</h1>
            <h2>Bekijk onze laatste projecten</h2>
            <p>Volg ons op Instagram voor meer updates en projecten</p>
          </div>
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Instagram galerij laden...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="gallery-page">
      <div className="container">
        <div className="page-header">
          <h1>GALLERIJ</h1>
          <h2>Bekijk onze laatste projecten</h2>
          <p>Volg ons op Instagram voor meer updates en projecten</p>
          <a 
            href="https://instagram.com/premiumcarworks.eu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="instagram-link"
          >
            <i className="fab fa-instagram"></i>
            Volg ons op Instagram
          </a>
        </div>

        {error && (
          <div className="error-message">
            <p>{error}</p>
            <button onClick={fetchInstagramPosts} className="retry-btn">
              <i className="fas fa-sync-alt"></i>
              Opnieuw proberen
            </button>
          </div>
        )}

        <div className="gallery-grid">
          {images.map((image) => (
            <div key={image.id} className="gallery-item" onClick={() => handleImageClick(image.permalink)}>
              <div className="image-container">
                <img src={image.image} alt={image.caption} loading="lazy" />
                <div className="image-overlay">
                  <div className="instagram-stats">
                    <div className="stat">
                      <i className="fas fa-heart"></i>
                      <span>{formatNumber(image.likes)}</span>
                    </div>
                    <div className="stat">
                      <i className="fas fa-comment"></i>
                      <span>{formatNumber(image.comments)}</span>
                    </div>
                  </div>
                  <div className="image-timestamp">
                    {formatTimeAgo(image.timestamp)}
                  </div>
                </div>
              </div>
              <div className="image-caption">
                <p>{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="live-updates">
          <p>
            <i className="fas fa-sync-alt"></i>
            Live updates - Nieuwe posts worden automatisch toegevoegd
          </p>
          <p className="update-info">
            Laatste update: {new Date().toLocaleTimeString('nl-NL')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery; 