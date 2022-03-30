import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context';

import './Signin-Signup.css';

const SignUp = () => {
    const { signUpHandler } = useAuth();

    const [userInput, setUserInput] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    return (
        // <!-- Login body -->

        <div className="login-container">
            <div className="login">
                <p className="login-header">Sign Up</p>

                <form
                    className="login-input-form"
                    onSubmit={(event) => signUpHandler(event, userInput)}
                >
                    <div className="form-input">
                        <label for="login-firstName" className="input-label">
                            {' '}
                            First Name:{' '}
                        </label>
                        <input
                            type="text"
                            required
                            placeholder="Enter your email address"
                            name="login-firstName"
                            className="login-firstName input-form"
                            onChange={(event) =>
                                setUserInput({ ...userInput, firstName: event.target.value })
                            }
                        />
                    </div>

                    <div className="form-input">
                        <label for="login-lastName" className="input-label">
                            {' '}
                            Last Name:{' '}
                        </label>
                        <input
                            type="text"
                            required
                            placeholder="Enter your email address"
                            name="login-lastName"
                            className="login-lastName input-form"
                            onChange={(event) =>
                                setUserInput({ ...userInput, lastName: event.target.value })
                            }
                        />
                    </div>

                    <div className="form-input">
                        <label for="login-email" className="input-label">
                            {' '}
                            Email:{' '}
                        </label>
                        <input
                            type="text"
                            required
                            placeholder="Enter your email address"
                            name="login-email"
                            className="login-email input-form"
                            onChange={(event) =>
                                setUserInput({ ...userInput, email: event.target.value })
                            }
                        />
                    </div>

                    <div className="form-input">
                        <label for="login-password" className="input-label">
                            {' '}
                            Passsword:{' '}
                        </label>
                        <input
                            type="password"
                            required
                            placeholder="Enter your password"
                            name="login-password"
                            className="login-password input-form"
                            onChange={(event) =>
                                setUserInput({ ...userInput, password: event.target.value })
                            }
                        />
                    </div>

                    <div className="form-input checkbox-reset">
                        <div>
                            <input type="checkbox" name="form-checkbox" className="form-checkbox" />
                            <label for="form-checkbox" className="checkbox-label">
                                {' '}
                                I accept all Terms & Conditions{' '}
                            </label>
                        </div>
                    </div>
                    <div className="form-submit-btn">
                        <button type="submit" className="btn form-btn">
                            Create New Account
                        </button>
                    </div>
                </form>

                <div className="sign-up">
                    <Link to="/login" className="btn signup-cta">
                        I already have an account &#8594;
                    </Link>
                </div>
            </div>
        </div>

        // <!-- SignUp body ends -->
    );
};

export { SignUp };