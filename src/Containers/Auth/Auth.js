import React, {Component} from 'react';
import classes from './Auth.module.scss'
import Button from "../../Component/UI/Button/Button";
import Input from "../../Component/UI/Input/Input";

class Auth extends Component {
    state = {
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Введите корректный email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Password',
                errorMessage: 'Введите корректный Password',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6,
                }
            },
        }
    };

    loginHandler = () => {

    };

    registerHandler = () => {

    };

    submitHandler = (event) => {
        event.preventDefault()
    };

    onchangeHandler = (event, controlName) => {
console.log(`${controlName}:`, event.target.value)
    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={event => this.onchangeHandler(event, controlName)}
                />
            )
        })
    }

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Авторизация</h1>

                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>

                        {this.renderInputs()}

                        <Button
                            type="success"
                            onClick={this.loginHandler}
                        >
                            Войти
                        </Button>

                        <Button
                            type="primary"
                            onClick={this.registerHandler}
                        >
                            Зарегестрироваться
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Auth;