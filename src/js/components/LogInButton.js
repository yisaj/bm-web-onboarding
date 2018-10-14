// @flow

import * as React from 'react'
import Button from './Button.js'
import styled from 'styled-components'

const blue = 'dodgerblue';
const white = 'white';

function alertUser(text: string) {
    return (function (e) {
	window.alert(text);
    });
}

type Props = {
    isLoggedIn: boolean,
    override?: string
};

function LogInButton(props: Props) {
    let display_version = 'login';
    if (props.isLoggedIn) {
	display_version = 'logout';
    }
    if (props.override) {
	display_version = props.override;
    }
	
    let alerts = {'login': 'Logging you in...',
		  'logout': 'Logging you out...',
		  'signup': 'Signing you up...'};
    let bodies = {'login': 'Log In',
		  'logout': 'Log Out',
		  'signup': 'Sign Up'};

    return <Button primary onClick={ alertUser(alerts[display_version]) }>{ bodies[display_version] }</Button>;
    
}

export default LogInButton
