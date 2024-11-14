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
                id: "",
                username: "",
                password: "",
                email: "",
                firstName: "",
                lastName: "",
            },
        };
    }
    createUser = () => {
        const user = { id: crypto.randomUUID(), username: "", password: "", email: "", firstName: "", lastName: "" };

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

    authMessage = () => {
        if (this.state.activeUser.username === "") {
            alert("Username is blank")
        } else if (this.state.activeUser.password === "") {
            alert("Password is blank")
        } else if (this.state.activeUser.email === "") {
            alert("Email is blank")
        } else if (this.state.activeUser.firstName === "") {
            alert("First Name is blank")
        } else if (this.state.activeUser.lastName === "") {
            alert("Last Name is blank")
        } else {
            console.log(this.state.activeUser)
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
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            type="text"
                            id="email"
                            name="email"
                            value={this.state.activeUser.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="firstName">First Name</Label>
                        <Input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={this.state.activeUser.firstName}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastName">Last Name</Label>
                        <Input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={this.state.activeUser.lastName}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                </Form>
                <Button
                    color="success"
                    onClick={this.authMessage}
                >
                    Save
                </Button>
            </main>
        );
    }
}

export default SignUp;