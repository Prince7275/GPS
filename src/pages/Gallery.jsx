import "./Gallery.css";
import React, { useEffect, useState } from "react";

import { 
  Search, 
  Filter, 
  X, 
  Maximize2, 
  ChevronLeft, 
  ChevronRight,
  Calendar,
  Users,
  MapPin,
  Heart,
  Share2,
  Download
} from 'lucide-react';

const galleryImages = [
  { 
    id: 1,
    src: "images/acd.jpeg", 
    title: "Orientation Program 2025",
    category: "Academic",
    date: "July 10, 2025",
    description: "Welcome ceremony for new students with faculty introductions and campus tour.",
    likes: 245,
    featured: true
  },
  { 
    id: 2,
    src: "images/acd2.jpeg", 
    title: "Republic Day Celebration",
    category: "Cultural",
    date: "January 26, 2026",
    description: "Flag hoisting ceremony followed by patriotic performances and cultural events.",
    likes: 312,
    featured: true
  },
  { 
    id: 3,
    src: "images/acd3.jpeg", 
    title: "Teacher’s Day Tribute",
    category: "Cultural",
    date: "September 5, 2025",
    description: "Students honor teachers with performances, speeches, and awards ceremony.",
    likes: 189
  },
  { 
    id: 4,
    src: "images/tech.jpg", 
    title: "Tech Innovation Workshop",
    category: "Technical",
    date: "September 18, 2025",
    description: "Hands-on workshop on emerging technologies and innovation methodologies.",
    likes: 278
  },
  { 
    id: 5,
    src: "images/mdmeet.jpg", 
    title: "CSC MD Visit",
    category: "Academic",
    date: "October 2, 2025",
    description: "Visit by Chief Secretary of the state to inspect college facilities and programs.",
    likes: 421
  },
  { 
    id: 6,
    src: "images/group.jpeg", 
    title: "Emotional Intelligence Workshop",
    category: "Mental Health",
    date: "October 20, 2025",
    description: "Three-day cultural festival with music, dance, drama and art exhibitions.",
    likes: 567,
    featured: true
  },
  { 
    id: 7,
    src: "images/ind.jpg", 
    title: "Industrial Visit",
    category: "Academic",
    date: "November 5, 2025",
    description: "Visit to leading industries for practical exposure and industry interaction.",
    likes: 198
  },
  { 
    id: 8,
    src: "images/sar1.jpeg", 
    title: "Saroswati Pooja & Cultural Fest",
    category: "Cultural",
    date: "January 13, 2026",
    description: "Cultural festival with Saraswati Pooja, music, dance and art exhibitions.",
    likes: 312
  },
  { 
    id: 9,
    src: "images/sar2.jpeg", 
    title: "Saroswati Pooja & Cultural Fest",
    category: "Cultural",
    date: "January 13, 2026",
    description: "Cultural festival with Saraswati Pooja, music, dance and art exhibitions.",
    likes: 342
  },
  { 
    id: 10,
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
    title: "Science Exhibition",
    category: "Academic",
    date: "January 15, 2026",
    description: "Innovative science projects and experiments showcase by students.",
    likes: 234
  },
  { 
    id: 11,
    src: "images/inde.jpg", 
    title: "Independence Day Celebration",
    category: "Cultural",
    date: "August 15, 2025",
    description: "Flag hoisting ceremony followed by patriotic performances and cultural events.",
    likes: 167
  },
  { 
    id: 12,
    src: "images/about.png", 
    title: "Campus Orientation Program",
    category: "Academic",
    date: "July 22, 2025",
    description: "Orientation program for new students with campus tours and academic guidance.",
    likes: 345
  },
   { 
    id: 13,
    src: "images/akb.jpg", 
    title: "Seminar on Artificial Intelligence",
    category: "Academic",
    date: "January 26, 2026",
    description: "Seminar on AI with industry experts and interactive sessions.",
    likes: 312,
    featured: true
  }
  ,
   { 
    id: 14,
    src: "images/acd5.jpeg", 
    title: "Republic Day Celebration",
    category: "Cultural",
    date: "January 26, 2026",
    description: "Flag hoisting ceremony followed by patriotic performances and cultural events.",
    likes: 312,
    featured: true
  }

];

const categories = ["All", "Featured", "Academic", "Cultural", "Technical", "Sports"];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [likedImages, setLikedImages] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = filter === "All" || 
      (filter === "Featured" ? image.featured : image.category === filter);
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  const toggleLike = (id) => {
    setLikedImages(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <div className="gallery-page">
      {/* Header */}
      <div className="gallery-header">
        <div className="header-content">
          <h1 className="title-gradient">College Gallery</h1>
          <p className="subtitle">
            Capturing Moments of Excellence & Achievement
          </p>
          <div className="header-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-dot"></div>
            <div className="decoration-line"></div>
          </div>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="controls-section">
        <div className="search-bar">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search events, categories, or descriptions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button className="clear-search" onClick={() => setSearchTerm("")}>
              <X size={18} />
            </button>
          )}
        </div>

        <div className="filter-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-tab ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              <Filter size={16} />
              {category}
            </button>
          ))}
        </div>

        <div className="stats">
          <span className="stat-item">
            {filteredImages.length} Photos
          </span>
          <span className="stat-item">
            {Object.values(likedImages).filter(Boolean).length} Liked
          </span>
        </div>
      </div>

      {/* Featured Gallery */}
      {filter === "All" && (
        <section className="featured-section">
          <h3 className="section-title">
            <span className="title-icon">🌟</span>
            Featured Events
          </h3>
          <div className="featured-grid">
            {galleryImages
              .filter(img => img.featured)
              .map((image) => (
                <div 
                  className="featured-card" 
                  key={image.id}
                  onClick={() => openLightbox(image, galleryImages.indexOf(image))}
                >
                  <div className="featured-image">
                    <img src={image.src} alt={image.title} />
                    <div className="featured-overlay">
                      <span className="featured-badge">Featured</span>
                    </div>
                  </div>
                  <div className="featured-content">
                    <h4>{image.title}</h4>
                    <div className="featured-meta">
                      <span className="meta-item">
                        <Calendar size={14} />
                        {image.date}
                      </span>
                      <span className="meta-item">
                        <Users size={14} />
                        {image.likes} likes
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
      )}

      {/* Main Gallery Grid */}
      <div className="gallery-grid">
        {filteredImages.map((image, index) => (
          <div 
            className="gallery-card" 
            key={image.id}
            onClick={() => openLightbox(image, index)}
          >
            <div className="card-image">
              <img src={image.src} alt={image.title} loading="lazy" />
              <div className="image-overlay">
                <button 
                  className="like-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(image.id);
                  }}
                >
                  <Heart 
                    size={20} 
                    fill={likedImages[image.id] ? "#ff4757" : "none"}
                    color={likedImages[image.id] ? "#ff4757" : "#fff"}
                  />
                </button>
                <button className="zoom-btn">
                  <Maximize2 size={20} />
                </button>
              </div>
              <div className="category-badge">{image.category}</div>
            </div>
            
            <div className="card-content">
              <h3 className="card-title">{image.title}</h3>
              <p className="card-description">{image.description}</p>
              
              <div className="card-meta">
                <div className="meta-item">
                  <Calendar size={14} />
                  <span>{image.date}</span>
                </div>
                <div className="meta-item">
                  <Heart size={14} fill={likedImages[image.id] ? "#ff4757" : "none"} />
                  <span>{image.likes + (likedImages[image.id] ? 1 : 0)}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-lightbox" onClick={closeLightbox}>
              <X size={24} />
            </button>
            
            <div className="lightbox-navigation">
              <button className="nav-btn prev" onClick={prevImage}>
                <ChevronLeft size={32} />
              </button>
              
              <div className="lightbox-image-container">
                <img src={selectedImage.src} alt={selectedImage.title} />
                <div className="lightbox-actions">
                  <button className="action-btn" onClick={() => toggleLike(selectedImage.id)}>
                    <Heart 
                      size={20} 
                      fill={likedImages[selectedImage.id] ? "#ff4757" : "none"}
                      color={likedImages[selectedImage.id] ? "#ff4757" : "#fff"}
                    />
                    Like
                  </button>
                  <button className="action-btn">
                    <Share2 size={20} />
                    Share
                  </button>
                  <button className="action-btn">
                    <Download size={20} />
                    Download
                  </button>
                </div>
              </div>
              
              <button className="nav-btn next" onClick={nextImage}>
                <ChevronRight size={32} />
              </button>
            </div>
            
            <div className="lightbox-info">
              <div className="info-header">
                <h2>{selectedImage.title}</h2>
                <div className="info-category">{selectedImage.category}</div>
              </div>
              <p className="info-description">{selectedImage.description}</p>
              
              <div className="info-meta">
                <div className="meta-item">
                  <Calendar size={16} />
                  <span>{selectedImage.date}</span>
                </div>
                <div className="meta-item">
                  <Heart size={16} />
                  <span>{selectedImage.likes + (likedImages[selectedImage.id] ? 1 : 0)} likes</span>
                </div>
                <div className="meta-item">
                  <Users size={16} />
                  <span>Featured Event</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      
    </div>
  );
};

export default Gallery;