import React from 'react';

class PodcastEmbed extends React.Component {
  render() {
    const { url } = this.props;

    if (!url) {
      return <div>Please provide a URL to embed.</div>;
    }

    return (
      <div>
        <h2>Podcast Embed</h2>
        <iframe
          title="Podcast Embed"
          src={url}
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="yes"
        ></iframe>
      </div>
    );
  }
}

function App() {
  const podcastUrl = 'https://archive.org/details/podcasts';

  return (
    <div className="App">
      <PodcastEmbed url={podcastUrl} />
    </div>
  );
}

export default App;
