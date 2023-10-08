import React from 'react';

class InternetArchiveEmbed extends React.Component {
  render() {
    const { url } = this.props;

    if (!url) {
      return <div>Please provide a URL to embed.</div>;
    }

    return (
      <div>
        <h2>Internet Archive Embed</h2>
        <iframe
          title="Internet Archive Embed"
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
  const archiveUrl = 'https://archive.org/details/audio_bookspoetry';

  return (
    <div className="App">
      <InternetArchiveEmbed url={archiveUrl} />
    </div>
  );
}

export default App;
