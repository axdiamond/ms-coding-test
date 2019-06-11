import React from 'react';
import loadingIcon from './img/loading-icon.svg'

const formatAsPercent = (val, demoninator) => {
  if (demoninator === 0)
    return '0%';

  return parseFloat((val / demoninator) * 100).toFixed(0) + "%";
}

function renderLoading() {
  return <img src={loadingIcon} className="gender-voter__loading-icon" alt="loading..." />;
}

function renderScore(votes, totalVotes) {
  return (
    <div className="ui big label">
      {formatAsPercent(votes, totalVotes)}
    </div>
  );
}

function GenderColumn({ className, title, image, scoreStyle, votes, totalVotes, onClick, loading }) {
  return (
    <div className={className}>
      <h2 className="ui header">
        {title}
      </h2>
      <div>
        <img src={image} alt={title} className="gender-voter__image" />
      </div>
      <div className="gender-voter__score">
        {loading ? renderLoading() : renderScore(votes, totalVotes)}
      </div>
      <button className="gender-voter__vote ui massive button green" type="button" onClick={() => onClick()}>
        Vote!
      </button>
    </div>
  );
}

export default GenderColumn;