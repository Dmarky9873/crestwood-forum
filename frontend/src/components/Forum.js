import React, { Component } from "react";
import Modal from "./Modal";
import axios from "axios";

var isEditing = false;

class Forum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messagesList: [],
            modal: false,
            activeItem: {
                title: "",
                body: "",
            },
        };
    }

    componentDidMount() {
        this.refreshList()
        isEditing = false;
    }

    refreshList = () => {
        axios
            .get("/api/chat/")
            .then((res) => this.setState({ messagesList: res.data }))
            .catch((err) => console.log(err));
        axios
            .get("/api/chat/")
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    }

    toggle = () => {
        this.setState({ modal: !this.state.modal });
        isEditing = false;
    };

    handleSubmit = (item) => {
        if (isEditing) {
            axios
                .put(`/api/chat/${item.id}/`, item)
                .then((res) => this.refreshList());
        }
        else {
            axios
                .post("/api/chat/", item)
                .then((res) => this.refreshList());
        }
        this.toggle();
    };

    handleDelete = (item) => {
        axios
            .delete(`/api/chat/${item.id}/`)
            .then((res) => this.refreshList());
    };

    createItem = () => {
        var username = "Username not found";
        axios.get("/accounts/api/username/").then((res) => {
            username = res.data.username;
            const item = { author: username, id: crypto.randomUUID(), title: "", body: "" };

            this.setState({ activeItem: item, modal: !this.state.modal });
        });
    };

    editItem = (item) => {
        this.setState({ activeItem: item, modal: !this.state.modal });
        isEditing = true;
    };

    renderItems = () => {
        const newItems = this.state.messagesList;

        return newItems.map((item) => (
            <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
            >
                <span className={`title`}>
                    {item.author} says:
                </span>
                <span
                    className={`title mr-2 : ""}`}
                >
                    Title: {item.title}
                </span>
                <br />
                <span className={`title mr-2 : ""}`}>{item.body}</span>
                <span>
                    <button
                        className="btn btn-secondary mr-2"
                        onClick={() => this.editItem(item)}
                    >
                        Edit
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={() => this.handleDelete(item)}
                    >
                        Delete
                    </button>

                </span>
            </li >
        ));
    };

    render() {
        return (
            <main className="container">
                <h1 className="text-white text-uppercase text-center my-4">Messages</h1>
                <div className="row">
                    <div className="col-md-6 col-sm-10 mx-auto p-0">
                        <div className="card p-3">
                            <div className="mb-4">
                                <button
                                    className="btn btn-primary"
                                    onClick={this.createItem}
                                >
                                    Send message
                                </button>
                            </div>
                            <ul className="list-group list-group-flush border-top-0">
                                {this.renderItems()}
                            </ul>
                        </div>
                    </div>
                </div>
                {this.state.modal ? (
                    <Modal
                        activeItem={this.state.activeItem}
                        toggle={this.toggle}
                        onSave={this.handleSubmit}
                    />
                ) : null}
            </main>
        );
    }
}

export default Forum;