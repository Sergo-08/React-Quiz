import React from 'react';
import classes from './ActiveQuiz.module.scss';
import AnswersList from "./AnswersList/AnswersList";

const AciveQuiz = props => (
    <div className={classes.ActivQuiz}>
        <p className={classes.Question}>
            <span>
            <strong>2. </strong>
                {props.question}
            </span>

            <small>4 of 12</small>
        </p>

        <AnswersList
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
        />
    </div>
);

export default AciveQuiz;