import React, { Component } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label,
} from "reactstrap";

export default class CustomModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem,
        };
    }

    handleChange = (e) => {
        let { name, value } = e.target;

        if (e.target.type === "checkbox") {
            value = e.target.checked;
        }

        const activeItem = { ...this.state.activeItem, [name]: value };

        this.setState({ activeItem });
    };


    render() {
        const { toggle, onSave } = this.props;

        function authMessage(item) {
            if (item.title === "") {
                alert("Message title is blank")
            } else if (item.body === "") {
                alert("Message body is blank")
            } else {
                onSave(item)
            }
        }

        return (
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}>Message</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input
                                type="text"
                                id="title"
                                name="title"
                                value={this.state.activeItem.title}
                                onChange={this.handleChange}
                                placeholder="Enter Message Title"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="body">Body</Label>
                            <Input
                                type="text"
                                id="body"
                                name="body"
                                value={this.state.activeItem.body}
                                onChange={this.handleChange}
                                placeholder="Enter Message Body"
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="success"
                        onClick={() => authMessage(this.state.activeItem)}
                    >
                        Save
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}