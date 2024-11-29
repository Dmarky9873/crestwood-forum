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

    authMessage = () => {
        if (this.state.activeUser.username === "") {
            alert("Username is blank")
        } else if (this.state.activeUser.password === "") {
            alert("Password is blank")
        } else {
            console.log(this.state.activeUser)
            axios.post("/authenticate-login/", this.state.activeUser)
                .then((res) => {
                    if (res.data === "Success") {
                        alert("Success")
                    } else {
                        alert("Failure")
                    }
                })
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
                    onClick={this.authMessage}
                >
                    Save
                </Button>
            </main>
        );
    }
}

export default SignUp;