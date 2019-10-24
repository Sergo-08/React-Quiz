import React, {Component} from 'react';
import classes from './Quiz.module.scss';
import AciveQuiz from "../../Component/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
    state ={
        quiz: [],
    };

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Quiz</h1>
                    <AciveQuiz />
                </div>
            </div>
        )
    }
}

export default Quiz;