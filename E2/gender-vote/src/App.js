import React, { useState, useEffect } from 'react';
import GenderColumn from './GenderColumn'
import './App.css';
import maleImage from './img/male.svg'
import femaleImage from './img/female.svg'

const getColor = (value) => {
  var hue = ((value) * 120).toString(10);
  return "hsl(" + hue + ", 100%, 50%)";
}



function App() {
  const [femaleVotes, setFemaleVotes] = useState(0);
  const [maleVotes, setMaleVotes] = useState(0);

  const totalVotes = maleVotes + femaleVotes;

  const voteMale = () =>
    fetch('/api/Votes/VoteMale', {
      method: 'POST'
    }).then(() => {
      setMaleVotes(maleVotes++);
    });

  const voteFemale = () =>
    fetch('/api/Votes/VoteFemale', {
      method: 'POST'
    }).then(() => {
      setFemaleVotes(femaleVotes++);
    });

  useEffect(async () => {
    fetch('/api/votes')
      .then(r=> r.json())
      .then(r => {
        setMaleVotes(r.maleScore);
        setFemaleVotes(r.femaleScore);
      });

  }, [maleVotes]);

  const maleScoreStyle = {
    'background-color': getColor(maleVotes / totalVotes)
  }

  const femaleScoreStyle = {
    'background-color': getColor(femaleVotes / totalVotes)
  }

  return (
    <div className="gender-voter">
      <div className="ui placeholder segment">
        <div className="ui two column stackable center aligned grid">
          <div className="ui vertical divider">Or</div>
          <div className="middle aligned row">
            <GenderColumn
              className="ui column"
              title='Female'
              image={femaleImage}
              scoreStyle={femaleScoreStyle}
              votes={femaleVotes}
              totalVotes={totalVotes}
              onClick={voteFemale} />
            <GenderColumn
              className="ui column"
              title='Male'
              image={maleImage}
              scoreStyle={maleScoreStyle}
              votes={maleVotes}
              totalVotes={totalVotes}
              onClick={voteMale} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
