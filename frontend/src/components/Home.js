import axios from "axios";
import React, { Component } from "react";
import { Navigate } from 'react-router-dom';


class Home extends Component {
    state = {
        redirectToSignup: false,
        redirectToMessaging: false,
        first_name: "",
        username: "",
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

    getUsername = () => {
        axios.get("/accounts/api/username/")
            .then((response) => {
                this.setState({ username: response.data.username }); // Update state
            })
            .catch((error) => {
                console.error("Error fetching username:", error);
            });
    }

    getUserAttr = (attr) => {
        axios.get(`/accounts/api/${attr}/`).then((response) => {
            this.setState({ [attr]: response.data[attr] });
        }).catch((error) => {
            console.error(`Error fetching ${attr}:`, error);
        });
    }

    componentDidMount() {
        this.setState({ firstName: this.getUserAttr("first_name") });
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
                <h2 className="text-uppercase text-center my-4">Welcome, {this.state.first_name}</h2>
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