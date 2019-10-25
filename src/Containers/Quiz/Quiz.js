import React, {Component} from 'react';
import classes from './Quiz.module.scss';
import AciveQuiz from "../../Component/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        quiz: [
            {
                question: 'Какого цвета небо?',
                rightAnswersId: 2,
                id: 1,
                answers: [
                    {text: 'Черный', id: 1},
                    {text: 'Синий', id: 2},
                    {text: 'Красный', id: 3},
                    {text: 'Зеленный', id: 4}
                ]
            },
            {
                question: 'В каком году основали Санкт-Питербург?',
                rightAnswersId: 3,
                id: 2,
                answers: [
                    {text: '1700', id: 1},
                    {text: '1702', id: 2},
                    {text: '1705', id: 3},
                    {text: '1803', id: 4}
                ]
            }
        ],
    };

    onAnswerClickHandler = (answerId) => {
this.setState({
    activeQuestion: this.state.activeQuestion +1
})
    };

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Answer all questions:</h1>
                    <AciveQuiz
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLenght={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz;