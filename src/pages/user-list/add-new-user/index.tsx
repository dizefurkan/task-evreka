import { useState } from "react";
import { createPortal } from "react-dom";

import NewUserForm from "./form";
import Modal from "../../../components/modal";
import Button from "../../../components/button";

const AddNewUserButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>Add New User</Button>
      {isModalOpen &&
        createPortal(
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onOk={() => {}}
          >
            <NewUserForm onSubmit={() => {}} />
          </Modal>,
          document.body
        )}
    </>
  );
};

export default AddNewUserButton;
