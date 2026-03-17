import React, { useState } from 'react';
import { Maximize2, Bed, Coffee, Bath, Wifi, Car } from 'lucide-react';
import './Gallery.css';

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos', icon: <Maximize2 size={20} /> },
    { id: 'rooms', name: 'Rooms', icon: <Bed size={20} /> },
    { id: 'dining', name: 'Dining', icon: <Coffee size={20} /> },
    { id: 'amenities', name: 'Amenities', icon: <Bath size={20} /> }
  ];

  const galleryImages = [
    { 
      id: 1, 
      category: 'rooms', 
      title: 'Presidential Suite', 
      description: 'Luxurious presidential suite with city view',
      imageUrl: 'https://media.istockphoto.com/id/645682526/photo/interior-of-exclusive-apartment-in-modern-style.jpg?s=612x612&w=0&k=20&c=SXMyojykVoFvldjdJ7ve0pv8AIfPqKZmVIByKZQu-gk='
    },
    { 
      id: 2, 
      category: 'dining', 
      title: 'Fine Dining Restaurant', 
      description: 'Elegant dining experience with gourmet cuisine',
      imageUrl: 'https://media.istockphoto.com/id/645682526/photo/interior-of-exclusive-apartment-in-modern-style.jpg?s=612x612&w=0&k=20&c=SXMyojykVoFvldjdJ7ve0pv8AIfPqKZmVIByKZQu-gk='
    },
    { 
      id: 3, 
      category: 'amenities', 
      title: 'Spa & Wellness', 
      description: 'Rejuvenating spa treatments and therapies',
      imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/f1/4c/c2/samai-thai-spa-wellness.jpg?w=900&h=500&s=1'
    },
    { 
      id: 4, 
      category: 'rooms', 
      title: 'Deluxe Room', 
      description: 'Comfortable deluxe room with modern amenities',
      imageUrl: 'https://hotelmiramar.in/images/product/deluxe/d1.jpg'
    },
    { 
      id: 5, 
      category: 'dining', 
      title: 'Rooftop Bar', 
      description: 'Stunning rooftop bar with panoramic views',
      imageUrl: 'https://cdn.prod.website-files.com/67dd745951568f040910678e/68095872cf1bf9f6b12c4560_Azul%20East%20night%20shot%20(1).webp'
    },
    { 
      id: 6, 
      category: 'amenities', 
      title: 'Swimming Pool', 
      description: 'Olympic-sized pool with poolside service',
      imageUrl: 'https://www.thespruce.com/thmb/ilhEy20ji-A2Ymp5a31GhNGjz7o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Familyswimmingpool-GettyImages-155377305-599caa23d088c00010862071.jpg'
    },
    { 
      id: 7, 
      category: 'rooms', 
      title: 'Executive Suite', 
      description: 'Spacious executive suite for business travelers',
      imageUrl: 'https://assets.oakshotels.com/image/upload/q_auto,f_auto,c_limit,w_756/media/minor/oaks/images/uae/liwa-executive/800x385/oaks-liwa-executive-suites-deluxe-superior-suite-bedroom.jpg'
    },
    { 
      id: 8, 
      category: 'dining', 
      title: 'Coffee House', 
      description: 'Cozy coffee house with artisanal blends',
      imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      id: 9, 
      category: 'amenities', 
      title: 'Fitness Center', 
      description: 'State-of-the-art fitness equipment',
      imageUrl: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const handleCategoryChange = (categoryId: string) => {
    console.log('Filter changed to:', categoryId);
    setSelectedCategory(categoryId);
  };

  return (
    <section className="gallery-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Experience Luxury Through Our Lens</h2>
          <p className="section-subtitle">
            Take a virtual tour of our world-class facilities and elegant spaces
          </p>
        </div>

        <div className="gallery-categories">
          {categories.map((category) => {
            const count = category.id === 'all' 
              ? galleryImages.length 
              : galleryImages.filter(img => img.category === category.id).length;
            return (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category.id)}
                aria-label={`Filter by ${category.name}`}
                aria-pressed={selectedCategory === category.id}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-name">{category.name}</span>
                <span className="category-count">({count})</span>
              </button>
            );
          })}
        </div>

        <div className="gallery-grid">
          {filteredImages.length > 0 ? (
            filteredImages.map((image, index) => (
              <div key={image.id} className="gallery-item" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="gallery-image">
                  <img src={image.imageUrl} alt={image.title} loading="lazy" />
                </div>
                <div className="gallery-overlay">
                  <div className="overlay-content">
                    <h4>{image.title}</h4>
                    <p>{image.description}</p>
                    <button className="view-btn">View Details</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <div className="no-results-content">
                <h3>No images found</h3>
                <p>Try selecting a different category to view more images.</p>
              </div>
            </div>
          )}
        </div>

        <div className="gallery-features">
          <div className="feature-row">
            <div className="feature-item">
              <Bed size={24} />
              <div>
                <h4>Luxury Rooms</h4>
                <p>500+ elegantly designed rooms</p>
              </div>
            </div>
            <div className="feature-item">
              <Coffee size={24} />
              <div>
                <h4>Multiple Restaurants</h4>
                <p>6 dining venues to choose from</p>
              </div>
            </div>
            <div className="feature-item">
              <Wifi size={24} />
              <div>
                <h4>Modern Amenities</h4>
                <p>World-class facilities</p>
              </div>
            </div>
            <div className="feature-item">
              <Car size={24} />
              <div>
                <h4>Convenient Location</h4>
                <p>Heart of New Delhi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
