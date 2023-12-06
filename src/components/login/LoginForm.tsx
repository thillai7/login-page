import React, { useState } from 'react';

import { LoginInitialValues } from '../../constant/InitialValues';
import { labels } from '../../constant/Label';
import { LoginParams } from '../../interfaces/LoginPageType';
import EmailAddress from '../../shared/EmailAddressWrapper';
import PasswordStrengthMeter from '../../shared/PasswordWrapper';

const LoginForm = () => {
    const [params, setParams] = useState<LoginParams>(LoginInitialValues);

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParams((prev) => ({ ...prev, password: e.target.value, isPasswordValid: false }));
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParams((prev) => ({ ...prev, emailAddress: e.target.value, isEmailValid: false }));
    };

    const handleUserNameClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParams((prev) => ({ ...prev, rememberUserName: e.target.checked }));
    };
    return (
        <>
            <EmailAddress emailAddress={params.emailAddress} onChangeHandler={handleEmailChange} className='input-style' />
            <PasswordStrengthMeter password={params.password} onChangeHandler={handlePasswordChange} className='input-style' />
            <div className='checkbox-container'>
                <input type='checkbox' id='rememberUsername' checked={params.rememberUserName} onChange={handleUserNameClick} />
                <label htmlFor='rememberUsername'>{labels.rememberUserName}</label>
            </div>
            <button type='button' title='hi' id='kin' className='login-button-style'>
                {labels.loginButton}
            </button>
            <span className='forgot-password'>{labels.forgotPassword}</span>
        </>
    );
};

export default LoginForm;
