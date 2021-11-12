import { useState, useEffect } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signOut,
} from "firebase/auth";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import axios from "axios";

// initialize firebase app
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);

    const auth = getAuth();

    // create an user
    const registerUser = (email, password, name, history) => {
        setError("");
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = userCredential.user;
                newUser["displayName"] = name;
                setUser(newUser);

                // save user to the database
                saveUser(email, name);

                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name,
                })
                    .then(() => {})
                    .catch((error) => {});
                history.push("/");
            })
            .catch((error) => {
                setError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    };

    // login to website
    const loginUser = (email, password, location, history) => {
        setError("");
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || "/";
                history.replace(destination);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setIsAdmin(false);
        fetch(
            `https://enigmatic-refuge-60972.herokuapp.com/users/${user.email}`
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.role === "admin") {
                    setIsAdmin(true);
                }
            })
            .catch((err) => {});
    }, [user.email]);

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
            })
            .finally(() => setIsLoading(false));
    };

    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        axios
            .post("https://enigmatic-refuge-60972.herokuapp.com/users", user)
            .then((res) => {})
            .catch((err) => {});
    };

    return {
        user,
        isAdmin,
        isLoading,
        error,
        setError,
        registerUser,
        loginUser,
        logOut,
    };
};

export default useFirebase;
