import React, { Component } from "react";
import axios from "axios";
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
} from "reactstrap";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeUser: {
                username: "",
                password: "",
            },
        };
    }
    createUser = () => {
        const user = { username: "", password: "" };

        this.setState({ activeUser: user });
    }

    componentDidMount() {
        this.createUser();
    }

    handleChange = (e) => {
        let { name, value } = e.target;

        const user = { ...this.state.activeUser, [name]: value };

        this.setState({ activeUser: user });
    };

    signIn = () => {
        if (this.state.activeUser.username === "") {
            alert("Username is blank")
        } else if (this.state.activeUser.password === "") {
            alert("Password is blank")
        } else {
            axios.post("/accounts/login/", this.state.activeUser)
                .then((res) => {
                    if (res.status === 200) {
                        alert("Signed in");
                    }
                })
                .catch((error) => {
                    if (error.response) {
                        if (error.response.status === 401) {
                            alert("Wrong username or password.");
                        } else {
                            alert(`Error: ${error.response.status} - ${error.response.data.error}`);
                        }
                    } else if (error.request) {
                        // No response was received
                        alert("No response from the server. Please try again later.");
                    } else {
                        // Error setting up the request
                        alert(`Error: ${error.message}`);
                    }
                });

        }
    }

    render() {
        return (
            <main className="container">
                <h1 className="text-white text-uppercase text-center my-4">SignUp</h1>
                <Form>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input
                            type="text"
                            id="username"
                            name="username"
                            value={this.state.activeUser.username}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                            type="text"
                            id="password"
                            name="password"
                            value={this.state.activeUser.password}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                </Form>
                <Button
                    color="success"
                    onClick={this.signIn}
                >
                    Save
                </Button>
            </main>
        );
    }
}

export default SignUp;