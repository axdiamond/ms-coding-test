import React, { useState, useEffect } from 'react';
import GenderColumn from './GenderColumn'
import './App.css';
import maleImage from './img/male.svg'
import femaleImage from './img/female.svg'

function App() {
  const [femaleVotes, setFemaleVotes] = useState(0);
  const [maleVotes, setMaleVotes] = useState(0);
  const [loading, setLoading] = useState(true);

  const totalVotes = maleVotes + femaleVotes;

  function voteMale () {
    setMaleVotes(maleVotes + 1);

    fetch('/api/Votes/VoteMale', {
      method: 'POST'
    });
  }

  function voteFemale() {
    setFemaleVotes(femaleVotes + 1);

    fetch('/api/Votes/VoteFemale', {
      method: 'POST'
    });
  }

  useEffect(() => {
    fetch('/api/votes')
      .then(r=> r.json())
      .then(r => {
        setMaleVotes(r.maleScore);
        setFemaleVotes(r.femaleScore);
        setLoading(false);
      });
  }, []);

  return (
    <div className="gender-voter">
      <div className="ui segment">
        <div className="ui two column stackable center aligned grid">
          <div className="ui vertical divider">Or</div>
          <div className="middle aligned row">
            <GenderColumn
              className="ui column"
              title='Female'
              image={femaleImage}
              votes={femaleVotes}
              totalVotes={totalVotes}
              onClick={voteFemale}
              loading={loading} />
            <GenderColumn
              className="ui column"
              title='Male'
              image={maleImage}
              votes={maleVotes}
              totalVotes={totalVotes}
              onClick={voteMale}
              loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
