import React, {
    ChangeEventHandler, InputHTMLAttributes, useEffect, useState,
} from 'react';

import useDebounce from '../hooks/useDebounce';

interface PasswordStrengthMeterProps extends InputHTMLAttributes<HTMLInputElement> {
  password: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

interface PasswordStrengthPanelProps {
  strength: number;
}
interface StrengthConfig {
  [key: number]: string;
}

const strengthConfig: {
  colors: StrengthConfig;
  labels: StrengthConfig;
} = {
    colors: {
        0: 'red',
        1: 'orange',
        2: 'yellow',
        3: 'green',
        4: 'darkgreen',
    },
    labels: {
        0: 'Very Weak',
        1: 'Weak',
        2: 'Moderate',
        3: 'Strong',
        4: 'Very Strong',
    },
};

const getStrengthColor = (strength: number): string => strengthConfig.colors[strength] || '';
const getStrengthLabel = (strength: number): string => strengthConfig.labels[strength] || '';

const PasswordStrengthPanel: React.FC<PasswordStrengthPanelProps> = ({ strength }) => (
    <div className='password-strength-panel'>
        <p>
            Password Strength:
            {' '}
            {getStrengthLabel(strength)}
        </p>
        <div className='strength-meter'>
            <div className='strength-fill' style={{ width: `${(strength / 4) * 100}%`, backgroundColor: getStrengthColor(strength) }} />
        </div>
        <p>Password should contain at least 8 characters including uppercase, lowercase, and numbers.</p>
    </div>
);

const PasswordStrengthMeter: React.FC<PasswordStrengthMeterProps> = ({
    password,
    onChangeHandler,
    placeholder,
    ...props
}: PasswordStrengthMeterProps) => {
    const debouncedPassword = useDebounce(password, 500);
    const [strength, setStrength] = useState(0);
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    const calculatePasswordStrength = (password: string): number => {
        const lengthStrength = Math.min(password.length, 8) >= 8 ? 1 : 0;
        const hasNumber = /\d/.test(password) ? 1 : 0;
        const hasCapital = /[A-Z]/.test(password) ? 1 : 0;
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password) ? 1 : 0;
        const totalStrength = lengthStrength + hasNumber + hasCapital + hasSpecialChar;
        return Math.min(totalStrength, 4);
    };

    useEffect(() => {
        if (debouncedPassword) {
            const passwordStrength = calculatePasswordStrength(debouncedPassword);
            setStrength(passwordStrength);
        }
    }, [debouncedPassword]);

    return (
        <div className='password-strength-meter'>
            <input
                {...props}
                value={password}
                onChange={onChangeHandler}
                onFocus={handleFocus}
                onBlur={handleBlur}
                type='password'
                placeholder={placeholder || '**********'}
                required
            />
            {isFocused && debouncedPassword && (
                <PasswordStrengthPanel strength={strength} />
            )}
        </div>
    );
};

export default PasswordStrengthMeter;
