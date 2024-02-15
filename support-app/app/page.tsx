'use client'
import React from 'react'

// Import required modules and components
import { NextPage } from 'next';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Stack, Text, TextField, DefaultButton, PrimaryButton } from '@fluentui/react/';
import LoginPage from './components/LoginPage';

// Define interface for component props
interface SignInProps {}

// Define interface for form payload
    interface Payload {
    emailAdd: string;
    userPass: string;
    }

    // Create functional component using NextPage
    const SignIn: NextPage<SignInProps> = () => {
    // Local state for form payload
    const [payload, setPayload] = useState<Payload>({
        emailAdd: '',
        userPass: '',
    });

    // Redux hooks for accessing state and dispatch
    const dispatch = useDispatch();
    const loggedUser = useSelector((state: any) => state.loggedUser);

    // Form submission handler
    const signIn = () => {
        dispatch({ type: 'SIGN_IN', payload });
        localStorage.setItem('user', JSON.stringify(loggedUser));
    };

    // Render component
    return (
            <>
            {loggedUser ? (
                <Stack horizontalAlign="center" verticalAlign="center" verticalFill>
                <Stack>
                <Text variant="xLarge">Sign </Text>
                <Stack tokens={{ childrenGap: 15 }} horizontalAlign="center">
                <Stack styles={{ root: { width: 300 } }}>
                    <form onSubmit={(e) => { e.preventDefault(); signIn(); }}>
                    <Text className="signIn">Sign In {loggedUser?.firstName}</Text>
                    <TextField
                        label="Email Address"
                        type="email"
                        required
                        value={payload.emailAdd}
                        onChange={(e, newValue) => setPayload({ ...payload, emailAdd: newValue || '' })}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        required
                        value={payload.userPass}
                        onChange={(e, newValue) => setPayload({ ...payload, userPass: newValue || '' })}
                    />
                    <PrimaryButton type="submit" text="Submit" />
                    <LoginPage/>
                    </form>
                </Stack>
                </Stack>
            </Stack>
            </Stack>
        ) : (
            <div><h1>Welcome {loggedUser.firstName} {loggedUser.lastName}</h1></div>
        )}
        </>
    );
    };

    export default LoginPage;