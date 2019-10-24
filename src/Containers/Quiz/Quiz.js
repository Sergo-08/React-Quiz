import React, {Component} from 'react';
import classes from './Quiz.module.scss';
import AciveQuiz from "../../Component/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
    state = {
        quiz: [
            {
                answers: [
                    {text: 'question 1'},
                    {text: 'question 2'},
                    {text: 'question 3'},
                    {text: 'question 4'}
                ]
            }
        ],
    };

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Answer all questions:</h1>
                    <AciveQuiz
                        answers={this.state.quiz[0].answers}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz;