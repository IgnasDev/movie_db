import React from 'react';

import Anchor from '../anchor/Anchor.component.jsx';
import './SignInUp.style.css';

const SignInUp = () => {
    return (
        <div className="sign-in-up">
            <Anchor className="sign-in-up__anchor" name="LOGIN"/>
            <Anchor className="sign-in-up__anchor" name="SIGN UP"/>
        </div>
    )
}

export default SignInUp;
