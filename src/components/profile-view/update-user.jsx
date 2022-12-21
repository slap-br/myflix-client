import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


function updateUser(handleSubmit, handleUpdate) {
    return(
        <div>
            <Form className="profile-form" onSubmit={(e) => handleSubmit(e)}>
                <Form.Group>
                    <h2>Want to change some info?</h2>
                        <Form.Label>Username:</Form.Label>
                            <Form.Control
                            type="text"
                            name="Username"
                            defaultValue={user.Username}
                            onChange={e => handleUpdate(e)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password:</Form.Label>
                        <Form.Control 
                        type="password"
                        name="password"
                        defaultValue={user.password}
                        onChange={e => handleUpdate(e)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email:</Form.Label>
                        <Form.Control 
                        type="email"
                        name="email"
                        defaultValue={user.email}
                        onChange={e => handleUpdate(e)} />
                </Form.Group>

                <Button variant="primary" type="submit"> Update </Button>
            </Form>
        </div>

    )
}

export default updateUser;