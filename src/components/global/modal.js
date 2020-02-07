import React from 'react'
import Modal from 'react-bootstrap/Modal'

export const ShowModal = props => {
    return (
        <div>
            <Modal show={ props.show } onHide={ props.onHide } size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body> { props.children }  </Modal.Body>
                <Modal.Footer>This is the footer</Modal.Footer>
            </Modal>
        </div>
    );
};