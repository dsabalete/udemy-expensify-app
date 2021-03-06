import React from 'react';
import { connect } from 'react-redux';
import {
    startLoginGoogle,
    startLoginGithub,
    startLoginFacebook,
    startLoginTwitter
} from '../actions/auth';

export const LoginPage = ({
    startLoginGoogle,
    startLoginGithub,
    startLoginFacebook,
    startLoginTwitter
}) => (
        <div className="box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout__title">Expensify</h1>
                <p>It's time to get your expenses under control.</p>
                <button
                    id="buttonGoogle"
                    className="button"
                    onClick={startLoginGoogle}>
                    Login with <span className="google--icon"></span>
                </button>
                <button
                    id="buttonGithub"
                    className="button"
                    onClick={startLoginGithub}>
                    Login with <span className="github--icon"></span>
                </button>
                <button
                    id="buttonFacebook"
                    className="button"
                    onClick={startLoginFacebook}>
                    Login with <span className="facebook--icon"></span>
                </button>
                <button
                    id="buttonTwitter"
                    className="button"
                    onClick={startLoginTwitter}>
                    Login with <span className="twitter--icon"></span>
                </button>
            </div>
        </div>
    );

const mapDispatchToProps = (dispatch) => ({
    startLoginGoogle: () => dispatch(startLoginGoogle()),
    startLoginGithub: () => dispatch(startLoginGithub()),
    startLoginFacebook: () => dispatch(startLoginFacebook()),
    startLoginTwitter: () => dispatch(startLoginTwitter()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);