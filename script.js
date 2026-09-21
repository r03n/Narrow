// Data source for all properties
const propertiesData = [
  {
    id: 1,
    badge: "House & Lot",
    image: "images/house1.png",
    title: "Sleek Modern House near Clark",
    location: "Angeles City, Pampanga",
    city: "Angeles City",
    price: 6500000,
    beds: 3,
    baths: 2,
    floorArea: 120,
    lotArea: 150,
    type: "House & Lot"
  },
  {
    id: 2,
    badge: "Condominium",
    image: "images/house2.png",
    title: "Mid<span class=\"sans-hyphen\">-</span>Rise Studio Apartment",
    location: "City of San Fernando, Pampanga",
    city: "San Fernando",
    price: 3200000,
    beds: 1,
    baths: 1,
    floorArea: 35,
    lotArea: null,
    type: "Condominium"
  },
  {
    id: 3,
    badge: "Townhouse",
    image: "images/house3.png",
    title: "Contemporary Townhouse",
    location: "Mabalacat, Pampanga",
    city: "Mabalacat",
    price: 4100000,
    beds: 3,
    baths: 2,
    floorArea: 85,
    lotArea: 60,
    type: "Townhouse"
  },
  {
    id: 4,
    badge: "House & Lot",
    image: "images/house4.png",
    title: "Spacious Family Home",
    location: "Mexico, Pampanga",
    city: "Mexico",
    price: 5800000,
    beds: 4,
    baths: 3,
    floorArea: 180,
    lotArea: null,
    type: "House & Lot"
  },
  {
    id: 5,
    badge: "Lot",
    image: "images/house5.png",
    title: "Prime Residential Lot",
    location: "Porac, Pampanga",
    city: "Porac",
    price: 1500000,
    beds: null,
    baths: null,
    floorArea: null,
    lotArea: 200,
    type: "Lot"
  },
  {
    id: 6,
    badge: "House & Lot",
    image: "images/house6.png",
    title: "Bungalow Retreat",
    location: "Bacolor, Pampanga",
    city: "Bacolor",
    price: 4800000,
    beds: 3,
    baths: 2,
    floorArea: 110,
    lotArea: null,
    type: "House & Lot"
  }
];

const formatPrice = (price) => '₱ ' + price.toLocaleString('en-US');

const renderProperties = (properties, container, pageType) => {
  container.innerHTML = '';

  if (properties.length === 0) {
    container.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; padding: 40px; font-size: 18px;">No properties match your search criteria.</p>';
    return;
  }

  properties.forEach(prop => {
    const badgeHtml = prop.badge ? `<span class="badge">${prop.badge}</span>` : '';
    let statsHtml = '';

    // Different stat formats based on the page type to match the original designs
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
          <img src="${prop.image}" alt="${prop.title.replace(/<[^>]*>?/gm, '')}">
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
          <a href="#" class="btn-view">View Property</a>
        </div>
      </div>
    `;

    container.insertAdjacentHTML('beforeend', cardHtml);
  });
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

  // Home Page Rendering
  const homeGrid = document.getElementById('home-properties-grid');
  if (homeGrid) {
    renderProperties(propertiesData.slice(0, 3), homeGrid, 'home');
  }

  // Properties Page Rendering & Search Filter
  const propertiesGrid = document.getElementById('properties-page-grid');
  if (propertiesGrid) {
    // Initial Render
    renderProperties(propertiesData, propertiesGrid, 'properties');

    const btnSearch = document.getElementById('btn-search');
    if (btnSearch) {
      btnSearch.addEventListener('click', () => {
        const locVal = document.getElementById('filter-location').value;
        const typeVal = document.getElementById('filter-type').value;
        const priceVal = document.getElementById('filter-price').value;
        const bedsVal = document.getElementById('filter-beds').value;

        const filtered = propertiesData.filter(prop => {
          // Location Filter
          if (locVal !== 'All' && prop.city !== locVal) return false;
          
          // Property Type Filter
          if (typeVal !== 'All Types' && prop.type !== typeVal) return false;
          
          // Max Price Filter
          if (priceVal !== 'Any Price' && prop.price > parseInt(priceVal)) return false;
          
          // Bedrooms Filter
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
});