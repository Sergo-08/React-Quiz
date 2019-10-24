import React from 'react';
import classes from './ActiveQuiz.module.scss';

const AciveQuiz = props => (
    <div className={classes.ActivQuiz}>
        <p className={classes.Question}>
            <span>
            <strong>2. </strong>
                How are you?
            </span>

            <small>4 of 12</small>
        </p>

        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </div>
)

export default AciveQuiz;