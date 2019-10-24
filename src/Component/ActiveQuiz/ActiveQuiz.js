import React from 'react';
import classes from './ActiveQuiz.module.scss';
import AnswersList from "./AnswersList/AnswersList";

const AciveQuiz = (props) => (
    <div className={classes.ActivQuiz}>
        <p className={classes.Question}>
            <span>
            <strong>2. </strong>
                How are you?
            </span>

            <small>4 of 12</small>
        </p>

        <AnswersList
            answers={props.answers}
        />
    </div>
)

export default AciveQuiz;