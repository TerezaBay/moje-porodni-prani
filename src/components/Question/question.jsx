import React from 'react';
import QuestionCheckbox from '../QuestionCheckbox/questCheckbox.jsx';
import QuestionInput from '../QuestionInput/questInput.jsx';
import QuestionTextArea from '../QuestionTextArea/QuestionTextArea.jsx';
import QuestionLongTextArea from '../QuestionLongTextArea/QuestionLongTextArea.jsx';
import QuestionRadioButton from '../QuestionRadioButton/questRadioButton.jsx';
import './style.css';

const Question = ({ quest }) => {
  const selectQuestionType = (quest) => {
    switch (quest.type) {
      case 'checkbox':
        return <QuestionCheckbox quest={quest} />;
      case 'input':
        return <QuestionInput quest={quest} />;
      case 'textArea':
        return <QuestionTextArea quest={quest} />;
      case 'longTextArea':
        return <QuestionLongTextArea quest={quest} />;
      case 'radioButton':
        return <QuestionRadioButton quest={quest} />;
    }
  };

  return (
    <div className="quest">
      <h3 className="quest_title">{`${quest.id + 1}) ${quest.quest}`}</h3>
      {quest.disclaimer ? (
        <p className="disclaimer">{quest.disclaimer}</p>
      ) : null}

      {selectQuestionType(quest)}
    </div>
  );
};

export default Question;
