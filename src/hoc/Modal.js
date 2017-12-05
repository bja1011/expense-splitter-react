import React from 'react';
import {Modal, ModalBody} from "reactstrap";

const WithModal = (props) => (
  <Modal isOpen={true} >
    <ModalBody>
      {props.children}
    </ModalBody>
    {/*<ModalFooter>*/}
      {/*<Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}*/}
      {/*<Button color="secondary" onClick={this.toggle}>Cancel</Button>*/}
    {/*</ModalFooter>*/}
  </Modal>
)

export default WithModal;