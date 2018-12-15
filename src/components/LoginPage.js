import React from 'react';
import { connect } from 'react-redux';
import { startLoginGoogle, startLoginGithub } from '../actions/auth';

export const LoginPage = ({
    startLoginGoogle,
    startLoginGithub
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
            </div>
        </div>
    );

const mapDispatchToProps = (dispatch) => ({
    startLoginGoogle: () => dispatch(startLoginGoogle()),
    startLoginGithub: () => dispatch(startLoginGithub()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);