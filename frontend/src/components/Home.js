import React, { Component } from "react";
import { Navigate, redirect } from 'react-router-dom';


class Home extends Component {
    state = {
        redirectToSignup: false,
        redirectToMessaging: false,
    };

    redirectSignup = () => {
        this.setState({ redirectToSignup: true });
    };

    redirectMessaging = () => {
        this.setState({ redirectToMessaging: true });
    }

    redirectLogin = () => {
        this.setState({ redirectLogin: true });
    }

    render() {
        if (this.state.redirectToSignup) {
            return <Navigate to="/signup" />;
        } else if (this.state.redirectToMessaging) {
            return <Navigate to="/messaging" />;
        } else if (this.state.redirectLogin) {
            return <Navigate to="/login" />;
        }
        return (
            <main className="container">
                <h1 className="text-uppercase text-center my-4">Crestwood-Forum Home</h1>
                <button
                    className="btn btn-primary"
                    onClick={this.nav}
                >
                    Sign Up
                </button>
                <button
                    className="btn btn-primary"
                    onClick={this.redirectMessaging}
                >
                    Messaging
                </button>
                <button
                    className="btn btn-primary"
                    onClick={this.redirectLogin}
                >
                    Log In
                </button>

            </main >
        );
    }
}

export default Home;