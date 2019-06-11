import React from 'react';
import loadingIcon from './img/loading-icon.svg'

function renderLoading() {
  return <img src={loadingIcon} className="gender-voter__loading-icon" alt="loading..." />;
}

function renderScore(votes, totalVotes) {
  let ratio = ((votes / totalVotes) * 100);
  let color = "black";

  if (totalVotes === 0) {
    ratio = 0;
  } else if (ratio > 50) {
    color = "green";
    ratio = Math.ceil(ratio);
  } else if (ratio < 50) {
    ratio = Math.floor(ratio);
    color = "red";
  }

  const style = { color: color };
  return (
    <div className="ui big label" style={style}>
      {ratio}%
    </div>
  );
}

function GenderColumn({ className, title, image, votes, totalVotes, onClick, loading }) {
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