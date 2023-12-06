import {
    ChangeEventHandler, InputHTMLAttributes, useEffect, useState,
} from 'react';

import useDebounce from '../hooks/useDebounce';

interface EmailAddressProps extends InputHTMLAttributes<HTMLInputElement>{
    emailAddress: string,
    onChangeHandler: ChangeEventHandler<HTMLInputElement>,
    valid?: boolean,
}
const EmailAddress: React.FC<EmailAddressProps> = ({
    emailAddress, onChangeHandler, placeholder, ...props
}: EmailAddressProps) => {
    const debouncedEmailAddress = useDebounce(emailAddress, 500);
    const [isValid, setIsValid] = useState(true);

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    useEffect(() => {
        if (debouncedEmailAddress) {
            setIsValid(validateEmail(debouncedEmailAddress));
        }
    }, [debouncedEmailAddress]);

    return (
        <div>
            <input
                {...props}
                value={emailAddress}
                onChange={onChangeHandler}
                type='email'
                placeholder={placeholder || 'Your Email Address'}
                required
            />
            {!isValid && emailAddress && (
                <p style={{ color: 'red', marginTop: '5px' }}>Please enter a valid email address.</p>
            )}
        </div>
    );
};

export default EmailAddress;
