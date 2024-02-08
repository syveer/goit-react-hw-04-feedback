import React, { useState, useEffect } from 'react';
import Notification from './Notification/Notification.jsx';
import Section from './Section/Section.jsx';
import FeedbackOptions from './FeedbackOption/FeedbackOption.jsx';
import Statistics from './Statistics/Statistics.jsx';
import styles from './App.module.css';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = type => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  const totalFeedback = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  useEffect(() => {
    document.title = `Feedback App - Total: ${totalFeedback}`;
  }, [totalFeedback]);

  return (
    <div className={styles.appContainer}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      {totalFeedback > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};

export default App;
