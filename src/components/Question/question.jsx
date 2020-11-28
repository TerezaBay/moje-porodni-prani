import React from 'react';
import QuestionCheckbox from '../QuestionCheckbox/questCheckbox.jsx';
import './style.css';

const Question = ({ quest }) => {
  const selectQuestionType = (quest) => {
    switch (quest.type) {
      case 'checkbox':
        return <QuestionCheckbox quest={quest} />;
      // case 'input':
      //   return <QuestionInput quest={quest} />;
    }
  };

  return (
    <div className="quest">
      <h3 className="quest_title">{quest.quest}</h3>
      {selectQuestionType(quest)}
    </div>
  );
};

export default Question;
