import React from 'react';
import Head from 'next/head';

const AuthLayout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Login/Signup</title>
            </Head>
            <div className="auth-layout">
                <div className="auth-content">{children}</div>
            </div>
        </>
    );
};

export default AuthLayout;
