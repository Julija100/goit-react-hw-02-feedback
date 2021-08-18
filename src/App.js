import { render } from "@testing-library/react";
import "./App.css";
import Statistics from "./components/Statistics/Statistics";


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
}

static defaultProps = {};

static propTypes = {};

getOptionsValues = () => Object.keys(this.state);


onLeaveFeedback = (option) => {
  this.setState((prevState) => {
    return { [option]: prevState[option] + 1 };
  });
};

countTotalFeedback = () => {  //общеe количествo собранных отзывов из всех категорий
  let totalFeedback = Object.values(this.state).reduce((accumulator, currentValue) => accumulator + currentValue
  );
  return totalFeedback;
};

countPositiveFeedbackPercentage = () => {
  const { good } = this.state;
  let positiveFeedbackPercentage = Math.round(
    good / (this.countTotalFeedback() * 0.01)
  );
  return positiveFeedbackPercentage || 0;
};

render() {
  const { good, neutral, bad } = this.state;
  return (
    <h1> Our visitors feedback</h1>
   <Statistics>
      good ={good}
      neutral= {neutral}
      bad={bad}
      total={countTotalFeedback()}
      positiveFeedback= {countPositiveFeedbackPercentage()}
   </Statistics>
  )
}

export default App;
