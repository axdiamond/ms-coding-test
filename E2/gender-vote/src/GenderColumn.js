import React from 'react';

const formatAsPercent = (val, demoninator) => {
    if (demoninator === 0)
      return '0%';

    return parseFloat((val / demoninator) * 100).toFixed(0) + "%";
  }

  function GenderColumn({ className, title, image, scoreStyle, votes, totalVotes, onClick }) {
    return (
      <div className={className}>
        <h2 className="ui header">
          {title}
        </h2>
        <div>
          <img src={image} className="gender-voter__image" />
        </div>
        <div className="gender-voter__score">
          <div style={scoreStyle} className="ui big label">
            {formatAsPercent(votes, totalVotes)}
          </div>
        </div>
        <button className="gender-voter__vote ui massive button green" type="button" onClick={() => onClick()}>
          Vote!
        </button>
      </div>
    );
  }

  export default GenderColumn;