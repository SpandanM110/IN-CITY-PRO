import React, { useState } from 'react';

const MyHealthFinderWidget = () => {
  const iframeStyle = {
    border: 'none',
    height: '250px',
    width: '178px',
    marginHeight: '0',
    marginWidth: '0',
  };

  return (
    <div>
      <iframe
        src="https://www.health.gov/myhealthfinder?badge=true"
        name="myhealthfinderframe"
        frameBorder="0"
        id="myhealthfinderframe"
        scrolling="yes"
        title="myhealthfinder widget"
        style={iframeStyle}
      >
        <p>Your browser does not support iframes.</p>
      </iframe>
    </div>
  );
};

const App = () => {
  const [showWidget, setShowWidget] = useState(false);

  const handleGetResultsClick = () => {
    setShowWidget(true);
  };

  return (
    <div>
      <button onClick={handleGetResultsClick}>Get Health Blogs</button>
      {showWidget && <MyHealthFinderWidget />}
    </div>
  );
};

export default App;
