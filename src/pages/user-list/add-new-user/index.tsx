import { useState } from "react";
import { createPortal } from "react-dom";

import NewUserForm from "./form";
import Modal from "../../../components/modal";
import Button from "../../../components/button";
import { LS_USERS, type Users } from "../useUserList";

const AddNewUserButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>Add New User</Button>
      {isModalOpen &&
        createPortal(
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <NewUserForm
              onSubmit={(user) => {
                const lsSavedUsers = localStorage.getItem(LS_USERS);
                let savedUsers: Users = [];

                if (lsSavedUsers) {
                  savedUsers = JSON.parse(lsSavedUsers);
                }

                const newData = savedUsers.concat(user);
                localStorage.setItem(LS_USERS, JSON.stringify(newData));

                setIsModalOpen(false);
              }}
            />
          </Modal>,
          document.body
        )}
    </>
  );
};

export default AddNewUserButton;
