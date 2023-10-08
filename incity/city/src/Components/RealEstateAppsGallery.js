import React from 'react';

const appsUsedInIndia = [
  {
    name: 'Magicbricks',
    description:
      "Magicbricks is one of India's leading property portals, offering a wide range of residential and commercial property listings. The app provides detailed property information, including photos, videos, and locality insights.",
    imageSrc: 'https://img.staticmb.com/mbcontent/images/uploads/2018/2/Magic.jpg',
    websiteLink: 'https://www.magicbricks.com/',
  },
  {
    name: '99acres',
    description:
      '99acres is another popular real estate platform in India. The app allows users to search for properties, view floor plans, and connect with property owners and agents.',
    imageSrc: 'https://lh3.googleusercontent.com/Ha5rmtpYP6-JLOyD2uppgDvAISDv8HCSW6-dASDdX4tSFfC9Z7O6HeXb-4wgrhj56WSO=w300',
    websiteLink: 'https://www.99acres.com/',
  },
  {
    name: 'CommonFloor',
    description:
      'CommonFloor is known for its apartment and gated community listings. The app offers a range of property-related services, including property management solutions.',
    imageSrc: 'https://pbs.twimg.com/profile_images/891960933232164864/PXZjMloj.jpg',
    websiteLink: 'https://www.commonfloor.com/',
  },
  {
    name: 'Housing.com',
    description:
      "Housing.com is a real estate and rental marketplace with a user-friendly app. It provides verified property listings and neighborhood information.",
    imageSrc: 'https://th.bing.com/th/id/R.37511ed5098f2b9def5c5db1dbbfccd2?rik=myrpYuM%2fYqAPhw&riu=http%3a%2f%2ftollfreenum.in%2fwp-content%2fuploads%2f2018%2f08%2fhousing.jpg&ehk=fY4jVAO9cnVWXBuxdcavPfChrZ4CZ59SjGFIYxOaO2I%3d&risl=&pid=ImgRaw&r=0',
    websiteLink: 'https://www.housing.com/',
  },
  {
    name: 'NestAway',
    description:
      "If you're looking for rental properties, especially for shared accommodations, NestAway is a popular choice. It focuses on furnished homes and apartments for young professionals.",
    imageSrc: 'https://www.startupkhabar.com/wp-content/uploads/2020/02/nestaway_logo-2048x735.png',
    websiteLink: 'https://www.nestaway.com/',
  },
  {
    name: 'Makaan.com',
    description:
      'Makaan.com offers a variety of property listings, including residential, commercial, and agricultural properties. The app provides location-based property recommendations.',
    imageSrc: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/b1f8bc66054615.5b08fbd782f2e.png',
    websiteLink: 'https://www.makaan.com/',
  },
  {
    name: 'Square Yards',
    description:
      'Square Yards is a real estate and mortgage advisory platform. The app offers property listings, home loan options, and investment insights.',
    imageSrc: 'https://bayfrontcapitaladvisors.com/wp-content/uploads/2021/04/logo-1.png',
    websiteLink: 'https://www.squareyards.com/',
  },
  {
    name: 'NoBroker',
    description:
      'NoBroker is known for its no-brokerage model for rental properties. The app connects renters directly with property owners.',
    imageSrc: 'https://techstory.in/wp-content/uploads/2016/12/nobroker.png',
    websiteLink: 'https://www.nobroker.in/',
  },
  {
    name: 'PropTiger',
    description:
      'PropTiger offers a range of property services, including property search, virtual tours, and assistance with home loans.',
    imageSrc: 'https://th.bing.com/th/id/R.15f40a276d95a73745062b37ba3830fc?rik=VuyZ03QG1YF7%2fg&riu=http%3a%2f%2fstatic.dnaindia.com%2fsites%2fdefault%2ffiles%2f2014%2f11%2f26%2f287436-proptiger-logo.jpg&ehk=QRvzLCNdtGu6SpmnxKD6Tv2HMjSQ%2bXFGbZ%2fhFciyehs%3d&risl=&pid=ImgRaw&r=0',
    websiteLink: 'https://www.proptiger.com/',
  },
  
];

const appsUsedWorldwide = [
  {
    name: 'Zillow',
    description:
      'Zillow is a popular real estate app that provides access to a vast database of homes and rentals. It offers features like property search, mortgage calculators, and home value estimates.',
    imageSrc: 'https://logos-download.com/wp-content/uploads/2016/12/Zillow_logo_blue.png',
    websiteLink: 'https://www.zillow.com/',
  },
  {
    name: 'Realtor.com',
    description:
      'Realtor.com is another comprehensive real estate app that allows users to search for homes, apartments, and rentals. It provides detailed property listings and local market insights.',
    imageSrc: 'https://th.bing.com/th/id/OIP.MaN2nvuieA0OnJ39WCM0pAHaHa?pid=ImgDet&rs=1',
    websiteLink: 'https://www.realtor.com/',
  },
  {
    name: 'Trulia',
    description:
      'Trulia, owned by Zillow Group, offers real estate listings and neighborhood information. Users can find homes, apartments, and rental properties along with crime maps and school information.',
    imageSrc: 'https://logos-download.com/wp-content/uploads/2021/01/Trulia_Logo_old-2048x532.png',
    websiteLink: 'https://www.trulia.com/',
  },
  {
    name: 'Redfin',
    description:
      'Redfin is known for its low-cost real estate services, but its app is also a powerful tool for finding homes and rentals. It provides access to MLS listings and offers virtual property tours.',
    imageSrc: 'https://th.bing.com/th/id/OIP.PquYvT3EPkrfeOL9d0fWJAHaHa?pid=ImgDet&rs=1',
    websiteLink: 'https://www.redfin.com/',
  },
  {
    name: 'Apartments.com',
    description:
      "If you're specifically looking for apartments, Apartments.com is a dedicated platform. It offers a wide range of rental listings and has tools to help you find the right apartment.",
    imageSrc: 'https://th.bing.com/th/id/OIP.qyEh_nLXZJivQgUnc3AS9wAAAA?pid=ImgDet&rs=1',
    websiteLink: 'https://www.apartments.com/',
  },
  {
    name: 'Rent.com',
    description:
      'Rent.com is another popular rental app that focuses on helping users find apartments, condos, and houses for rent. It also provides valuable resources for renters.',
    imageSrc: 'https://www.rent.com.au/blog/wp-content/uploads/2017/10/Rent-Logo-1.png',
    websiteLink: 'https://www.rent.com/',
  },
  {
    name: 'HotPads',
    description:
      'HotPads is a map-based rental and real estate marketplace. It offers detailed listings, interactive maps, and the ability to search for apartments and homes by commute time.',
    imageSrc: 'https://th.bing.com/th/id/OIP.JNidqvi2P4akWKneBMos9QHaFX?pid=ImgDet&rs=1',
    websiteLink: 'https://hotpads.com/',
  },
  {
    name: 'Homesnap',
    description:
      'Homesnap is a real estate app that offers real-time MLS data and allows users to take photos of homes to access property details instantly. It\'s great for on-the-go house hunting.',
    imageSrc: 'https://th.bing.com/th/id/OIP.nJi3tmABhiHPMrerjGwvswHaFa?pid=ImgDet&rs=1',
    websiteLink: 'https://www.homesnap.com/',
  },
  {
    name: 'LoopNet',
    description:
      'LoopNet is a commercial real estate app, ideal for those interested in buying or leasing commercial properties. It offers listings for office spaces, industrial properties, and more.',
    imageSrc: 'https://th.bing.com/th/id/OIP.efYZhq3utalnB-_620ux3AHaFQ?pid=ImgDet&rs=1',
    websiteLink: 'https://www.loopnet.com/',
  },
];

const galleryStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
};

const cardStyles = {
  width: '300px',
  margin: '16px',
  padding: '16px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  textAlign: 'center',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const linkStyles = {
  marginTop: '16px',
  display: 'block',
  color: '#007BFF',
  textDecoration: 'none',
};

const RealEstateAppsGallery = () => {
  return (
    <div>
      <h2>Apps Used in India</h2>
      <div style={galleryStyles}>
        {appsUsedInIndia.map((app, index) => (
          <div key={index} style={cardStyles}>
            <img
              src={app.imageSrc}
              alt={`${app.name} Logo`}
              style={{ maxWidth: '100%', maxHeight: '150px' }}
            />
            <h3>{app.name}</h3>
            <p>{app.description}</p>
            <a
              href={app.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyles}
            >
              Visit Website
            </a>
          </div>
        ))}
      </div>

      <h2>Apps Used Worldwide</h2>
      <div style={galleryStyles}>
        {appsUsedWorldwide.map((app, index) => (
          <div key={index} style={cardStyles}>
            <img
              src={app.imageSrc}
              alt={`${app.name} Logo`}
              style={{ maxWidth: '100%', maxHeight: '150px' }}
            />
            <h3>{app.name}</h3>
            <p>{app.description}</p>
            <a
              href={app.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyles}
            >
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </div>
  
  );
};

export default RealEstateAppsGallery;
