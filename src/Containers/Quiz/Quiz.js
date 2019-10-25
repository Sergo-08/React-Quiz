import React, {Component} from 'react';
import classes from './Quiz.module.scss';
import AciveQuiz from "../../Component/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
    state = {
        quiz: [
            {
                question: 'Какого цвета небо?',
                rightAnswersId: 2,
                answers: [
                    {text: 'Черный', id: 1},
                    {text: 'Синий', id: 2},
                    {text: 'Красный', id: 3},
                    {text: 'Зеленный', id: 4}
                ]
            }
        ],
    };

    onAnswerClickHandler = (answerId) => {

    };

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Answer all questions:</h1>
                    <AciveQuiz
                        answers={this.state.quiz[0].answers}
                        question={this.state.quiz[0].question}
                        onAnswerClick={this.onAnswerClickHandler}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz;