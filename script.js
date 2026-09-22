// Data source for all properties
const propertiesData = [
  {
    id: 1,
    badge: "House & Lot",
    mls: "MLS #240983",
    yearBuilt: 2024,
    images: [
      "https://images.unsplash.com/photo-1613490908836-9b1db1eb47b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ],
    title: "Sleek Modern House near Clark",
    location: "Angeles City, Pampanga",
    city: "Angeles City",
    price: 6500000,
    beds: 3,
    baths: 2,
    floorArea: 120,
    lotArea: 150,
    type: "House & Lot",
    description: `
      <p>Welcome to this brand new, meticulously designed modern minimalist home located just minutes away from the Clark Freeport Zone. Perfectly tailored for young professionals and growing families, this house blends contemporary aesthetics with practical everyday living.</p>
      <p>The open-concept ground floor maximizes natural light, featuring a spacious living area that seamlessly transitions into a sleek, modular kitchen. Upstairs, the master bedroom boasts an en-suite bathroom and a private balcony overlooking the quiet neighborhood.</p>
      <p>Situated in a secure, flood-free subdivision in Angeles City, you'll enjoy quick access to major expressways (NLEX/SCTEX), top-tier schools, shopping malls, and lifestyle hubs. Finding a place to call your own in Pampanga doesn't get much better than this.</p>
    `,
    features: [
      "1-Car Garage", "Modular Kitchen", "Spacious Living Area", "Landscaped Garden",
      "24/7 Security", "Balcony", "Built-in Cabinets", "Proximity to Clark",
      "Clubhouse Access", "Flood-Free Area"
    ],
    neighborhood: "Premium Subdivision, Angeles City",
    locationContext: "This property is strategically located 10 minutes away from Clark International Airport and SM City Clark. It offers immediate access to the MacArthur Highway, making commutes to San Fernando or Mabalacat straightforward and convenient.",
    agent: { name: "Raquel Rivera", initials: "RR", title: "Listing Agent" }
  },
  {
    id: 2,
    badge: "Condominium",
    mls: "MLS #882103",
    yearBuilt: 2022,
    images: ["images/house2.png", "images/house3.png", "images/house4.png"],
    title: "Mid<span class=\"sans-hyphen\">-</span>Rise Studio Apartment",
    location: "City of San Fernando, Pampanga",
    city: "San Fernando",
    price: 3200000,
    beds: 1,
    baths: 1,
    floorArea: 35,
    lotArea: null,
    type: "Condominium",
    description: "<p>A beautiful mid-rise studio apartment perfect for young professionals.</p>",
    features: ["Swimming Pool", "Gym", "24/7 Security", "Balcony"],
    neighborhood: "City Center, San Fernando",
    locationContext: "Located right in the heart of San Fernando.",
    agent: { name: "Raquel Rivera", initials: "RR", title: "Listing Agent" }
  },
  {
    id: 3,
    badge: "Townhouse",
    mls: "MLS #449212",
    yearBuilt: 2023,
    images: ["images/house3.png", "images/house1.png", "images/house2.png"],
    title: "Contemporary Townhouse",
    location: "Mabalacat, Pampanga",
    city: "Mabalacat",
    price: 4100000,
    beds: 3,
    baths: 2,
    floorArea: 85,
    lotArea: 60,
    type: "Townhouse",
    description: "<p>A contemporary townhouse offering great value and space for growing families.</p>",
    features: ["1-Car Garage", "Gated Community", "Modern Design"],
    neighborhood: "Quiet Suburb, Mabalacat",
    locationContext: "Easy access to NLEX.",
    agent: { name: "Raquel Rivera", initials: "RR", title: "Listing Agent" }
  },
  {
    id: 4,
    badge: "House & Lot",
    mls: "MLS #112094",
    yearBuilt: 2021,
    images: ["images/house4.png", "images/house5.png", "images/house6.png"],
    title: "Spacious Family Home",
    location: "Mexico, Pampanga",
    city: "Mexico",
    price: 5800000,
    beds: 4,
    baths: 3,
    floorArea: 180,
    lotArea: 200,
    type: "House & Lot",
    description: "<p>A large family home with massive yard space.</p>",
    features: ["2-Car Garage", "Large Garden", "Spacious Kitchen"],
    neighborhood: "Family Village, Mexico",
    locationContext: "Close to local markets and schools.",
    agent: { name: "Raquel Rivera", initials: "RR", title: "Listing Agent" }
  },
  {
    id: 5,
    badge: "Lot",
    mls: "MLS #774391",
    yearBuilt: "N/A",
    images: ["images/house5.png", "images/house1.png", "images/house3.png"],
    title: "Prime Residential Lot",
    location: "Porac, Pampanga",
    city: "Porac",
    price: 1500000,
    beds: null,
    baths: null,
    floorArea: null,
    lotArea: 200,
    type: "Lot",
    description: "<p>A prime residential lot ready for your dream home construction.</p>",
    features: ["Corner Lot", "Clubhouse Access", "Secured Area"],
    neighborhood: "Exclusive Estate, Porac",
    locationContext: "Near the new development zones in Porac.",
    agent: { name: "Raquel Rivera", initials: "RR", title: "Listing Agent" }
  },
  {
    id: 6,
    badge: "House & Lot",
    mls: "MLS #558291",
    yearBuilt: 2020,
    images: ["images/house6.png", "images/house2.png", "images/house4.png"],
    title: "Bungalow Retreat",
    location: "Bacolor, Pampanga",
    city: "Bacolor",
    price: 4800000,
    beds: 3,
    baths: 2,
    floorArea: 110,
    lotArea: 150,
    type: "House & Lot",
    description: "<p>A cozy bungalow retreat perfect for retirees or small families.</p>",
    features: ["Single Story", "Patio", "Renovated"],
    neighborhood: "Heritage Suburb, Bacolor",
    locationContext: "Peaceful environment rich in local history.",
    agent: { name: "Raquel Rivera", initials: "RR", title: "Listing Agent" }
  }
];

const formatPrice = (price) => '₱' + price.toLocaleString('en-US');

// Reusable card renderer for Home, Properties, and Similar grids
const renderProperties = (properties, container, pageType) => {
  container.innerHTML = '';

  if (properties.length === 0) {
    container.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; padding: 40px; font-size: 18px;">No properties match your search criteria.</p>';
    return;
  }

  properties.forEach(prop => {
    const badgeHtml = prop.badge ? `<span class="badge">${prop.badge}</span>` : '';
    const mainImg = prop.images && prop.images.length > 0 ? prop.images[0] : prop.image;
    let statsHtml = '';

    if (pageType === 'home') {
      statsHtml = `
        <div class="stat-item"><span>${prop.beds || 'N/A'}</span> Beds</div>
        <div class="stat-item"><span>${prop.baths || 'N/A'}</span> Baths</div>
        <div class="stat-item"><span>${prop.floorArea || 'N/A'}</span> sqm Floor</div>
        <div class="stat-item"><span>${prop.lotArea || 'N/A'}</span> sqm Lot</div>
      `;
    } else {
      statsHtml = `
        <div class="stat-item"><span>${prop.beds || 'N/A'}</span> BEDS</div>
        <div class="stat-item"><span>${prop.baths || 'N/A'}</span> BATHS</div>
        <div class="stat-item"><span>${prop.floorArea ? prop.floorArea + ' sqm' : 'N/A'}</span> FLOOR AREA</div>
        ${prop.lotArea ? `<div class="stat-item"><span>${prop.lotArea} sqm</span> LOT AREA</div>` : ''}
      `;
    }

    const cardHtml = `
      <div class="property-card">
        <div class="property-img-container">
          ${badgeHtml}
          <img src="${mainImg}" alt="${prop.title.replace(/<[^>]*>?/gm, '')}">
        </div>
        <div class="property-info">
          <h3>${prop.title}</h3>
          <div class="location">
            <span class="icon">📍</span> ${prop.location}
          </div>
          <div class="price">${formatPrice(prop.price)}</div>
          <div class="stats">
            ${statsHtml}
          </div>
          <a href="property-detail.html?id=${prop.id}" class="btn-view">View Property</a>
        </div>
      </div>
    `;

    container.insertAdjacentHTML('beforeend', cardHtml);
  });
};

// Detail Page Renderer
const renderPropertyDetail = (container) => {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id')) || 1; // Default to ID 1 if no param
  const prop = propertiesData.find(p => p.id === id);

  if (!prop) {
    container.innerHTML = '<div class="container" style="padding: 100px 0; text-align:center;"><h2>Property not found.</h2><a href="properties.html">Back to Properties</a></div>';
    return;
  }

  const featuresList = prop.features.map(f => `<li>${f}</li>`).join('');
  const imgData = JSON.stringify(prop.images); // Store images for JS slider

  const detailHtml = `
    <div class="container">
      <div class="back-link">
        <a href="properties.html">← Back to Properties</a>
      </div>

      <div class="detail-header-row">
        <div class="detail-header-left">
          <div class="detail-badges">
            <span class="badge-sale">FOR SALE</span>
            <span class="badge-mls">${prop.mls}</span>
          </div>
          <h1 id="detail-title">${prop.title}</h1>
          <div class="detail-location">
            <span class="icon">📍</span> ${prop.location}
          </div>
        </div>
        <div class="detail-header-right">
          <div class="asking-price-label">Asking Price</div>
          <div class="detail-price">${formatPrice(prop.price)}</div>
        </div>
      </div>

      <!-- Main Carousel -->
      <div class="detail-gallery">
        <button class="gallery-nav gallery-prev" onclick="changeSlide(-1)">&#10094;</button>
        <img src="${prop.images[0]}" alt="Property View" class="gallery-img" id="main-gallery-img" onclick="openModal()">
        <button class="gallery-nav gallery-next" onclick="changeSlide(1)">&#10095;</button>
      </div>

      <!-- Fullscreen Modal -->
      <div id="galleryModal" class="gallery-modal">
        <button class="modal-close" onclick="closeModal()">&times;</button>
        <div class="modal-content-wrapper">
          <button class="modal-nav modal-prev" onclick="changeSlide(-1)">&#10094;</button>
          <img src="${prop.images[0]}" class="modal-img" id="modal-gallery-img" alt="Fullscreen Property View">
          <button class="modal-nav modal-next" onclick="changeSlide(1)">&#10095;</button>
        </div>
      </div>

      <div class="detail-content-grid">
        <div class="detail-main-col">
          
          <div class="detail-box detail-stats">
            <div class="stat-block"><div class="stat-val">${prop.beds || 'N/A'}</div><div class="stat-lbl">Bedrooms</div></div>
            <div class="stat-block"><div class="stat-val">${prop.baths || 'N/A'}</div><div class="stat-lbl">Bathrooms</div></div>
            <div class="stat-block"><div class="stat-val">${prop.floorArea ? prop.floorArea + ' sqm' : 'N/A'}</div><div class="stat-lbl">Floor Area</div></div>
            <div class="stat-block"><div class="stat-val">${prop.lotArea ? prop.lotArea + ' sqm' : 'N/A'}</div><div class="stat-lbl">Lot Area</div></div>
            <div class="stat-block"><div class="stat-val">${prop.type}</div><div class="stat-lbl">Property Type</div></div>
            <div class="stat-block"><div class="stat-val">${prop.yearBuilt}</div><div class="stat-lbl">Year Built</div></div>
          </div>

          <div class="detail-box">
            <h3>Property Description</h3>
            ${prop.description}
          </div>

          <div class="detail-box">
            <h3>Features & Amenities</h3>
            <ul class="features-list">
              ${featuresList}
            </ul>
          </div>

          <div class="detail-box">
            <h3>Location Context</h3>
            <div class="loc-context-inner">
              <p><strong>Neighborhood:</strong> ${prop.neighborhood}</p>
              <br>
              <p>${prop.locationContext}</p>
            </div>
          </div>

        </div>

        <aside class="detail-sidebar">
          <div class="detail-box">
            <div class="agent-header">
              <div class="agent-avatar">${prop.agent.initials}</div>
              <div>
                <div class="agent-name">${prop.agent.name}</div>
                <div class="agent-title">${prop.agent.title}</div>
              </div>
            </div>
            
            <form class="inquiry-form" onsubmit="event.preventDefault(); alert('Inquiry Sent!');">
              <h3>Inquire About This Property</h3>
              <div class="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Juan Dela Cruz" required>
              </div>
              <div class="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="juan@narrowrealestate.ph" required>
              </div>
              <div class="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="0917 123 4567" required>
              </div>
              <div class="form-group">
                <label>Message</label>
                <textarea required>I am interested in the ${prop.title.replace(/<[^>]*>?/gm, '')}. Please contact me with more information.</textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-submit">Send Inquiry</button>
            </form>
          </div>
        </aside>
      </div>

      <section class="similar-properties">
        <h2>Similar Properties</h2>
        <div class="similar-grid" id="similar-properties-grid"></div>
      </section>

    </div>
  `;

  container.innerHTML = detailHtml;

  // Carousel logic attached directly to window for inline onclick execution
  let currentSlide = 0;
  const images = prop.images;

  window.changeSlide = function(direction) {
    currentSlide += direction;
    
    // Circular logic
    if (currentSlide >= images.length) {
      currentSlide = 0;
    } else if (currentSlide < 0) {
      currentSlide = images.length - 1;
    }

    document.getElementById('main-gallery-img').src = images[currentSlide];
    document.getElementById('modal-gallery-img').src = images[currentSlide];
  };

  window.openModal = function() {
    document.getElementById('galleryModal').classList.add('active');
  };

  window.closeModal = function() {
    document.getElementById('galleryModal').classList.remove('active');
  };

  // Render 2 similar properties (excluding the current one)
  const similarGrid = document.getElementById('similar-properties-grid');
  const similarProps = propertiesData.filter(p => p.id !== id && p.type === prop.type).slice(0, 2);
  
  if(similarProps.length < 2) {
      const fallback = propertiesData.filter(p => p.id !== id && !similarProps.includes(p));
      similarProps.push(...fallback.slice(0, 2 - similarProps.length));
  }

  renderProperties(similarProps, similarGrid, 'properties');
};

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Burger Menu
  const burgerMenu = document.querySelector('.burger-menu');
  const navLinks = document.querySelector('.nav-links');

  if (burgerMenu && navLinks) {
    burgerMenu.addEventListener('click', () => {
      burgerMenu.classList.toggle('active-burger');
      navLinks.classList.toggle('active-menu');
    });
  }

  // Route: Home Page
  const homeGrid = document.getElementById('home-properties-grid');
  if (homeGrid) {
    renderProperties(propertiesData.slice(0, 3), homeGrid, 'home');
  }

  // Route: Properties Page
  const propertiesGrid = document.getElementById('properties-page-grid');
  if (propertiesGrid) {
    renderProperties(propertiesData, propertiesGrid, 'properties');

    const btnSearch = document.getElementById('btn-search');
    if (btnSearch) {
      btnSearch.addEventListener('click', () => {
        const locVal = document.getElementById('filter-location').value;
        const typeVal = document.getElementById('filter-type').value;
        const priceVal = document.getElementById('filter-price').value;
        const bedsVal = document.getElementById('filter-beds').value;

        const filtered = propertiesData.filter(prop => {
          if (locVal !== 'All' && prop.city !== locVal) return false;
          if (typeVal !== 'All Types' && prop.type !== typeVal) return false;
          if (priceVal !== 'Any Price' && prop.price > parseInt(priceVal)) return false;
          if (bedsVal !== 'Any') {
            const minBeds = parseInt(bedsVal);
            if (!prop.beds || prop.beds < minBeds) return false;
          }
          return true;
        });

        renderProperties(filtered, propertiesGrid, 'properties');
      });
    }
  }

  // Route: Property Detail Page
  const detailContainer = document.getElementById('property-detail-container');
  if (detailContainer) {
    renderPropertyDetail(detailContainer);
  }
});