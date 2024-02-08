import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOption.module.css';

const FeedbackOptions = ({ good, neutral, bad, onLeaveFeedback }) => {
  return (
    <div className={styles.container}>
      <button
        className={`${styles.feedbackButton} ${styles.positive}`}
        onClick={() => onLeaveFeedback('good')}
      >
        Good
      </button>
      <button
        className={`${styles.feedbackButton} ${styles.neutral}`}
        onClick={() => onLeaveFeedback('neutral')}
      >
        Neutral
      </button>
      <button
        className={`${styles.feedbackButton} ${styles.negative}`}
        onClick={() => onLeaveFeedback('bad')}
      >
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
