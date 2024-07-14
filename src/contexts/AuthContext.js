// AuthContext which allows us to share user authentication information across different parts of our app.
import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from '../firebase';

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

// We create a component called AuthProvider that will wrap around parts of our app that need access to the authentication info.
export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        // We use auth.onAuthStateChanged to keep track of whether the user is logged in or not.
        const unsubscribe = auth.onAuthStateChanged((user) => {
            // When the user's authentication state changes (e.g., they log in or log out), we update the user state and stop showing the loading state.
            setUser(user);
            setLoading(false);
            // If the user is logged in, we redirect them to the /chats page.
            if (user) {
                navigate('/chats');
            }
        });

        // Cleanup function to unsubscribe when component unmounts or dependencies change
        return unsubscribe;
    }, [user, navigate]);

    const value = { user }; // value is an object
    return (
        <AuthContext.Provider value={value}>
            {!loading && children} {/* We only render the children components if we're not loading anymore. */}
        </AuthContext.Provider>
    );
};
