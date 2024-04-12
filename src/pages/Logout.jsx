import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Store/Auth';

function Logout() {
    const { logout, userID } = useAuth();

    useEffect(() => {
        const handleLogout = async () => {
            try {
                const response = await fetch('http://localhost:5001/logout', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ userId: userID }),
                });

                if (!response.ok) {
                    throw new Error('Logout failed');
                }
            } catch (error) {
                console.error('Logout failed', error);
            }
        };

        console.log('Logout effect triggered');
        handleLogout();
    }, [userID]);

    return <Navigate to="/" />;
}

export default Logout;
