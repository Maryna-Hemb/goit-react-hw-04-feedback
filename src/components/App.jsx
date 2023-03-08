import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layot } from './Layot.styled';

import { Section } from './section/Section';
import { FeedbackOptions } from './feadbackButtons/FeedbackOptions';
import { Statistics } from './statistics/Statistics';
import { Notifications } from './notifications/Notifications';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  const onLeaveFeedback = state => {
    switch (state) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;
      default:
        return;
    }
  };

  const total = () => {
    return good + neutral + bad;
  };

  const positivePercentage = () => {
    return Math.round((good / total()) * 100);
  };

  return (
    <Layot>
      <Section title="Please leave feadback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total()}
            positivePercentage={positivePercentage()}
          />
        ) : (
          <Notifications message="There is no feedback" />
        )}
      </Section>
      <GlobalStyle />
    </Layot>
  );
};
