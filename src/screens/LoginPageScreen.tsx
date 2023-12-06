import React, { useEffect } from 'react';

import LoginForm from '../components/login/LoginForm';
import { labels } from '../constant/Label';
import EllipseBG from '../images/Ellipse 12.png';
import BaseBackDrop from '../images/Image.png';
import GroupPic from '../images/Mask group.png';
import Logo from '../images/Mazenet Logo PNG 1.png';
import RectangleBG from '../images/Rectangle 99.png';

const LoginPageScreen: React.FC = () => {
    useEffect(() => {
        document.title = 'Login';
    }, []);

    return (
        <div className='container'>
            <img src={BaseBackDrop} alt='backdrop' className='image' />
            <img src={EllipseBG} alt='ellipse' className='ellipse' />
            <img src={RectangleBG} alt='rectangle' className='rectangle' />
            <div className='white-container'>
                <div className='centered-container' style={{ position: 'relative', textAlign: 'center' }}>
                    <img src={Logo} alt='logo' className='logo' />
                    <h1>{labels.loginToAccount}</h1>
                    <LoginForm />
                </div>
                <div style={{ position: 'relative', textAlign: 'center' }} className='group-pic'>
                    <img src={GroupPic} alt='group-pic' style={{ width: '100%', height: 'auto', display: 'block' }} />
                    <div className='custom-overlay'>
                        <h2 className='overlay-title'>{labels.overlayTitle}</h2>
                        <span className='overlay-subtitle'>{labels.overyLayText}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPageScreen;
