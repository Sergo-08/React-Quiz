import React from 'react';
import classes from './ActiveQuiz.module.scss';
import AnswersList from "./AnswersList/AnswersList";

const AciveQuiz = props => (
    <div className={classes.ActivQuiz}>
        <p className={classes.Question}>
            <span>
            <strong>{ props.answerNumber }. </strong>
                {props.question}
            </span>

            <small>{ props.answerNumber } из { props.quizLenght }</small>
        </p>

        <AnswersList
            state={props.state}
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
        />
    </div>
);

export default AciveQuiz;