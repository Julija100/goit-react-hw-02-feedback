const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return options.map((option) => (
    <button
      key={option}
      type="button"
      className="button"
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>
  ));
};

export default FeedbackOptions;
