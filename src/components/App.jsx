import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layot } from './Layot.styled';

import { Section } from './section/Section';
import { FeedbackOptions } from './feadbackButtons/FeedbackOptions';
import { Statistics } from './statistics/Statistics';
import { Notifications } from './notifications/Notifications';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };

  total() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  positivePercentage() {
    const { good } = this.state;
    return Math.round((good / this.total()) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Layot>
        <Section title="Please leave feadback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.total() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.total()}
              positivePercentage={this.positivePercentage()}
            />
          ) : (
            <Notifications message="There is no feedback" />
          )}
        </Section>
        <GlobalStyle />
      </Layot>
    );
  }
}
