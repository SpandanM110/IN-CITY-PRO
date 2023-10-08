import React from 'react';

const TravelAppGallery = () => {
  const appStyles = {
    flex: '0 0 25%',
    padding: '10px',
    textAlign: 'center',
    marginBottom: '20px',
  };

  const linkStyles = {
    color: '#007bff',
    textDecoration: 'none',
    marginTop: '10px',
    display: 'inline-block',
    transition: 'color 0.3s',
  };

  return (
    <div className="travel-app-gallery" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {/* Google Maps */}
      <div className="app-card" style={appStyles}>
        <img
          src="https://th.bing.com/th/id/OIP.6RsAe7prtWDQEaz-ujoZjQHaHa?pid=ImgDet&rs=1"
          alt="Google Maps"
          style={{ width: '100%', height: 'auto' }}
        />
        <h3 style={{ fontSize: '1.5rem', margin: '10px 0' }}>Google Maps</h3>
        <p style={{ fontSize: '1rem' }}>
          Offers maps, navigation, and real-time traffic updates.
        </p>
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyles}
        >
          Visit Website
        </a>
      </div>

      {/* Uber */}
      <div className="app-card" style={appStyles}>
        <img
          src="https://www.webdesignerdepot.com/cdn-origin/uploads/2018/09/uber_logo.png"
          alt="Uber"
          style={{ width: '100%', height: 'auto' }}
        />
        <h3 style={{ fontSize: '1.5rem', margin: '10px 0' }}>Uber</h3>
        <p style={{ fontSize: '1rem' }}>
          Provides ride-sharing and taxi booking services.
        </p>
        <a
          href="https://www.uber.com"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyles}
        >
          Visit Website
        </a>
      </div>

      {/* Lyft */}
      <div className="app-card" style={appStyles}>
        <img
          src="https://1000logos.net/wp-content/uploads/2017/11/symbol-Lyft.jpg"
          alt="Lyft"
          style={{ width: '100%', height: 'auto' }}
        />
        <h3 style={{ fontSize: '1.5rem', margin: '10px 0' }}>Lyft</h3>
        <p style={{ fontSize: '1rem' }}>
          Offers ride-sharing services similar to Uber.
        </p>
        <a
          href="https://www.lyft.com"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyles}
        >
          Visit Website
        </a>
      </div>

      {/* Booking.com */}
      <div className="app-card" style={appStyles}>
        <img
          src="https://besthotelshome.com/wp-content/uploads/2020/02/Booking.com-Logo.jpg"
          alt="Booking.com"
          style={{ width: '100%', height: 'auto' }}
        />
        <h3 style={{ fontSize: '1.5rem', margin: '10px 0' }}>Booking.com</h3>
        <p style={{ fontSize: '1rem' }}>
          Allows users to book accommodations, flights, and car rentals.
        </p>
        <a
          href="https://www.booking.com"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyles}
        >
          Visit Website
        </a>
      </div>

      {/* Expedia */}
      <div className="app-card" style={appStyles}>
        <img
          src="https://th.bing.com/th/id/OIP.IIDSpN1bkBHvPSwMDt5cPgHaEx?pid=ImgDet&rs=1"
          alt="Expedia"
          style={{ width: '100%', height: 'auto' }}
        />
        <h3 style={{ fontSize: '1.5rem', margin: '10px 0' }}>Expedia</h3>
        <p style={{ fontSize: '1rem' }}>
          Offers a wide range of travel services, including booking hotels,
          flights, and vacation packages.
        </p>
        <a
          href="https://www.expedia.com"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyles}
        >
          Visit Website
        </a>
      </div>

      {/* Airbnb */}
      <div className="app-card" style={appStyles}>
        <img
          src="https://th.bing.com/th/id/OIP.rGem3zNHL4QuQd26Hdu9ZAHaHa?pid=ImgDet&rs=1"
          alt="Airbnb"
          style={{ width: '100%', height: 'auto' }}
        />
        <h3 style={{ fontSize: '1.5rem', margin: '10px 0' }}>Airbnb</h3>
        <p style={{ fontSize: '1rem' }}>
          Allows travelers to book unique accommodations and experiences.
        </p>
        <a
          href="https://www.airbnb.com"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyles}
        >
          Visit Website
        </a>
      </div>

      {/* TripAdvisor */}
      <div className="app-card" style={appStyles}>
        <img
          src="https://logodownload.org/wp-content/uploads/2015/12/tripadvisor-logo-5.png"
          alt="TripAdvisor"
          style={{ width: '100%', height: 'auto' }}
        />
        <h3 style={{ fontSize: '1.5rem', margin: '10px 0' }}>TripAdvisor</h3>
        <p style={{ fontSize: '1rem' }}>
          Provides reviews, ratings, and recommendations for hotels,
          restaurants, and attractions.
        </p>
        <a
          href="https://www.tripadvisor.com"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyles}
        >
          Visit Website
        </a>
      </div>

      {/* Skyscanner */}
      <div className="app-card" style={appStyles}>
        <img
          src="https://download.logo.wine/logo/Skyscanner/Skyscanner-Logo.wine.png"
          alt="Skyscanner"
          style={{ width: '100%', height: 'auto' }}
        />
        <h3 style={{ fontSize: '1.5rem', margin: '10px 0' }}>Skyscanner</h3>
        <p style={{ fontSize: '1rem' }}>
          Helps users find and compare flights, hotels, and car rentals.
        </p>
        <a
          href="https://www.skyscanner.com"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyles}
        >
          Visit Website
        </a>
      </div>

      {/* Kayak */}
      <div className="app-card" style={appStyles}>
        <img
          src="https://th.bing.com/th/id/OIP.EqPn0dM4LMe9PrO_SWiWdgHaEK?pid=ImgDet&rs=1"
          alt="Kayak"
          style={{ width: '100%', height: 'auto' }}
        />
        <h3 style={{ fontSize: '1.5rem', margin: '10px 0' }}>Kayak</h3>
        <p style={{ fontSize: '1rem' }}>
          Offers travel search and booking services for flights, hotels, and more.
        </p>
        <a
          href="https://www.kayak.com"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyles}
        >
          Visit Website
        </a>
      </div>

      {/* Travelocity */}
      <div className="app-card" style={appStyles}>
        <img
          src="https://th.bing.com/th/id/OIP.7tius7gX7Vrvo--IHncOhgHaE8?pid=ImgDet&rs=1"
          alt="Travelocity"
          style={{ width: '100%', height: 'auto' }}
        />
        <h3 style={{ fontSize: '1.5rem', margin: '10px 0' }}>Travelocity</h3>
        <p style={{ fontSize: '1rem' }}>
          Provides booking options for flights, hotels, and vacation packages.
        </p>
        <a
          href="https://www.travelocity.com"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyles}
        >
          Visit Website
        </a>
      </div>
      {/* Hotels.com */}
      <div className="app-card" style={appStyles}>
        <img
          src="https://th.bing.com/th/id/OIP.BX3_bAMjPs0pZ-bMeNPgnwHaHa?pid=ImgDet&rs=1"
          alt="Hotels.com"
          style={{ width: '100%', height: 'auto' }}
        />
        <h3 style={{ fontSize: '1.5rem', margin: '10px 0' }}>Hotels.com</h3>
        <p style={{ fontSize: '1rem' }}>
          Specializes in hotel bookings and offers rewards for frequent travelers.
        </p>
        <a
          href="https://www.hotels.com"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyles}
        >
          Visit Website
        </a>
      </div>
      {/* Hostelworld */}
      <div className="app-card" style={appStyles}>
        <img
          src="https://th.bing.com/th/id/R.a6679aaef7270c59332c81d81998486e?rik=M86YNNCLRJV5%2fQ&riu=http%3a%2f%2fwww.roundtheworldmagazine.com%2fwp-content%2fuploads%2f2017%2f08%2fhostelworld_logo_mobile-1024x939.png&ehk=poPzQoYx%2b2I5BGCjjOxQBnH8o80BlreLoe2GE71AQC4%3d&risl=&pid=ImgRaw&r=0"
          alt="Hostelworld"
          style={{ width: '100%', height: 'auto' }}
        />
        <h3 style={{ fontSize: '1.5rem', margin: '10px 0' }}>Hostelworld</h3>
        <p style={{ fontSize: '1rem' }}>
          Focuses on booking hostels and budget accommodations.
        </p>
        <a
          href="https://www.hostelworld.com"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyles}
        >
          Visit Website
        </a>
      </div>
      {/* Hopper */}
      <div className="app-card" style={appStyles}>
        <img
          src="https://www.thetravelinstitute.com/wp-content/uploads/2021/08/hopper-logo.png"
          alt="Hopper"
          style={{ width: '100%', height: 'auto' }}
        />
        <h3 style={{ fontSize: '1.5rem', margin: '10px 0' }}>Hopper</h3>
        <p style={{ fontSize: '1rem' }}>
          Predicts and tracks flight and hotel prices, helping users find the best deals.
        </p>
        <a
          href="https://www.hopper.com"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyles}
        >
          Visit Website
        </a>
      </div>
      {/* Priceline */}
      <div className="app-card" style={appStyles}>
        <img
          src="https://skift.com/wp-content/uploads/2018/05/priceline-e1525714984153.png"
          alt="Priceline"
          style={{ width: '100%', height: 'auto' }}
        />
        <h3 style={{ fontSize: '1.5rem', margin: '10px 0' }}>Priceline</h3>
        <p style={{ fontSize: '1rem' }}>
          Offers discounts on hotels, flights, and rental cars through its Name Your Own Price feature.
        </p>
        <a
          href="https://www.priceline.com"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyles}
        >
          Visit Website
        </a>
      </div>
      {/* Couchsurfing */}
      <div className="app-card" style={appStyles}>
        <img
          src="https://logowik.com/content/uploads/images/couchsurfing6751.jpg"
          alt="Couchsurfing"
          style={{ width: '100%', height: 'auto' }}
        />
        <h3 style={{ fontSize: '1.5rem', margin: '10px 0' }}>Couchsurfing</h3>
        <p style={{ fontSize: '1rem' }}>
          Connects travelers with hosts who offer free accommodations.
        </p>
        <a
          href="https://www.couchsurfing.com"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyles}
        >
          Visit Website
        </a>
      </div>
      {/* Rome2rio */}
      <div className="app-card" style={appStyles}>
        <img
          src="https://s3-eu-west-1.amazonaws.com/tpd/logos/5535560c0000ff00057ee438/0x0.png"
          alt="Rome2rio"
          style={{ width: '100%', height: 'auto' }}
        />
        <h3 style={{ fontSize: '1.5rem', margin: '10px 0' }}>Rome2rio</h3>
        <p style={{ fontSize: '1rem' }}>
          Provides comprehensive travel itineraries by combining various modes of transportation.
        </p>
        <a
          href="https://www.rome2rio.com"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyles}
        >
          Visit Website
        </a>
      </div>
      {/* Roadtrippers */}
      <div className="app-card" style={appStyles}>
        <img
          src="https://seekvectorlogo.com/wp-content/uploads/2018/05/roadtrippers-vector-logo.png"
          alt="Roadtrippers"
          style={{ width: '100%', height: 'auto' }}
        />
        <h3 style={{ fontSize: '1.5rem', margin: '10px 0' }}>Roadtrippers</h3>
        <p style={{ fontSize: '1rem' }}>
          Helps plan road trips by suggesting attractions, accommodations, and food stops along the way.
        </p>
        <a
          href="https://www.roadtrippers.com"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyles}
        >
          Visit Website
        </a>
      </div>
      {/* Yelp */}
      <div className="app-card" style={appStyles}>
        <img
          src="https://logos-world.net/wp-content/uploads/2020/11/Yelp-Logo.png"
          alt="Yelp"
          style={{ width: '100%', height: 'auto' }}
        />
        <h3 style={{ fontSize: '1.5rem', margin: '10px 0' }}>Yelp</h3>
        <p style={{ fontSize: '1rem' }}>
          Offers reviews and recommendations for restaurants and local businesses.
        </p>
        <a
          href="https://www.yelp.com"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyles}
        >
          Visit Website
        </a>
      </div>
      {/* XE Currency */}
      <div className="app-card" style={appStyles}>
        <img
          src="https://www.thecurrencyshop.com.au/wp-content/uploads/2018/12/Xe-Logo-png-full.png"
          alt="XE Currency"
          style={{ width: '100%', height: 'auto' }}
        />
        <h3 style={{ fontSize: '1.5rem', margin: '10px 0' }}>XE Currency</h3>
        <p style={{ fontSize: '1rem' }}>
          Provides live exchange rates and currency conversion.
        </p>
        <a
          href="https://www.xe.com"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyles}
        >
          Visit Website
        </a>
      </div>
      {/* Google Translate */}
      <div className="app-card" style={appStyles}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/2048px-Google_Translate_logo.svg.png"
          alt="Google Translate"
          style={{ width: '100%', height: 'auto' }}
        />
        <h3 style={{ fontSize: '1.5rem', margin: '10px 0' }}>Google Translate</h3>
        <p style={{ fontSize: '1rem' }}>
          Translates text and speech into different languages.
        </p>
        <a
          href="https://translate.google.com"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyles}
        >
          Visit Website
        </a>
      </div>
      {/* Duolingo */}
      <div className="app-card" style={appStyles}>
        <img
          src="https://cdn2.hubspot.net/hubfs/2249672/Imported_Blog_Media/duolingo_logo_highres_1.jpg"
          alt="Duolingo"
          style={{ width: '100%', height: 'auto' }}
        />
        <h3 style={{ fontSize: '1.5rem', margin: '10px 0' }}>Duolingo</h3>
        <p style={{ fontSize: '1rem' }}>
          Helps users learn new languages for travel.
        </p>
        <a
          href="https://www.duolingo.com"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyles}
        >
          Visit Website
        </a>
      </div>
      {/* Maps.me */}
      <div className="app-card" style={appStyles}>
        <img
          src="https://th.bing.com/th/id/OIP.zAqVey6IifIsPh4IqOOtyAHaCy?pid=ImgDet&rs=1"
          alt="Maps.me"
          style={{ width: '100%', height: 'auto' }}
        />
        <h3 style={{ fontSize: '1.5rem', margin: '10px 0' }}>Maps.me</h3>
        <p style={{ fontSize: '1rem' }}>
          Offers detailed offline maps for navigation without an internet connection.
        </p>
        <a
          href="https://maps.me"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyles}
        >
          Visit Website
        </a>
      </div>
      {/* Trail Wallet */}
      <div className="app-card" style={appStyles}>
        <img
          src="https://i.pinimg.com/originals/03/85/6f/03856f1455e68a094eb903e96c42519d.jpg"
          alt="Trail Wallet"
          style={{ width: '100%', height: 'auto' }}
        />
        <h3 style={{ fontSize: '1.5rem', margin: '10px 0' }}>Trail Wallet</h3>
        <p style={{ fontSize: '1rem' }}>
          Helps travelers track their expenses and budgets.
        </p>
        <a
          href="https://www.trailwallet.com"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyles}
        >
          Visit Website
        </a>
      </div>
      {/* TripIt */}
      <div className="app-card" style={appStyles}>
        <img
          src="https://logos-download.com/wp-content/uploads/2019/01/TripIt_Travel-Itinerary_Logo.png"
          alt="TripIt"
          style={{ width: '100%', height: 'auto' }}
        />
        <h3 style={{ fontSize: '1.5rem', margin: '10px 0' }}>TripIt</h3>
        <p style={{ fontSize: '1rem' }}>
          Organizes travel itineraries and reservations in one place.
        </p>
        <a
          href="https://www.tripit.com"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyles}
        >
          Visit Website
        </a>
      </div>
      {/* AllTrails */}
      <div className="app-card" style={appStyles}>
        <img
          src="https://th.bing.com/th/id/OIP.khfGyypG8kyGBDctVjYWrwHaGL?pid=ImgDet&rs=1"
          alt="AllTrails"
          style={{ width: '100%', height: 'auto' }}
        />
        <h3 style={{ fontSize: '1.5rem', margin: '10px 0' }}>AllTrails</h3>
        <p style={{ fontSize: '1rem' }}>
          Provides trail maps and hiking guides for outdoor enthusiasts.
        </p>
        <a
          href="https://www.alltrails.com"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyles}
        >
          Visit Website
        </a>
      </div>
    </div>
  );
};

export default TravelAppGallery;
