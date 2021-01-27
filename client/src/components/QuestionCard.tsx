import React from 'react';

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNum: number;
    totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({question, answer, callback, userAnswer, questionNum, totalQuestions}) => (
    <div>
        <p className="number">
            Question: {questionNum} / {totalQuestions}
        </p>
    </div>
)

export default QuestionCard;
