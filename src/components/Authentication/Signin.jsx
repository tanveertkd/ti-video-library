import { useState } from 'react';
// import { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context';

import './Signin-Signup.css';

const SignIn = () => {
    const { signInHandler } = useAuth();

    const [userInput, setUserInput] = useState({
        email: "",
        password: "",
    });

    return (
        // <!-- Login body -->

        <div className="login-container">
            <div className="login">
                <p className="login-header">Sign In</p>

                <form
                    className="login-input-form"
                    onSubmit={(event) => signInHandler(event, userInput)}
                >
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
                            value={userInput.email}
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
                            value={userInput.password}
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
                                Remember me{' '}
                            </label>
                        </div>
                        <div className="password-reset">Forgot Passsword?</div>
                    </div>
                    <div className="form-submit-btn">
                        <button type="submit" className="btn form-btn">
                            Sign In
                        </button>
                        <button
                            className="btn form-btn"
                            type="submit"
                            onClick={() =>
                                setUserInput({
                                    email: 'adarshbalika@gmail.com',
                                    password: 'adarshBalika123',
                                })
                            }
                        >
                            Sign In With Test Credentails
                        </button>
                    </div>
                </form>

                <div className="sign-up">
                    <Link to="/signup" className="btn signup-cta">
                        Sign Up &#8594;
                    </Link>
                </div>
            </div>
            
            {/* <Toaster /> */}
        </div>

        // <!-- Login body ends -->
    );
};

export { SignIn };