import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { createPortal } from "react-dom";

import NewUserForm from "./form";
import Modal from "../../../components/modal";
import Button from "../../../components/button";
import { LS_USERS, type Users } from "../useUserList";
import { UserListContext } from "../context";

const AddNewUserButton = () => {
  const { refreshUserList } = useContext(UserListContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const isParamsModalOpen = searchParams.get("isModalOpen");
    if (isParamsModalOpen == "true") setIsModalOpen(true);
  }, []);

  return (
    <>
      <Button onClick={() => toggleModal(true)}>Add User</Button>
      {isModalOpen &&
        createPortal(
          <Modal isOpen={isModalOpen} onClose={() => toggleModal(false)}>
            <NewUserForm
              onSubmit={(user) => {
                const lsSavedUsers = localStorage.getItem(LS_USERS);
                let savedUsers: Users = [];

                if (lsSavedUsers) {
                  savedUsers = JSON.parse(lsSavedUsers);
                }

                const newData = savedUsers.concat(user);
                localStorage.setItem(LS_USERS, JSON.stringify(newData));

                toggleModal(false);
                refreshUserList();
              }}
            />
          </Modal>,
          document.body
        )}
    </>
  );

  function toggleModal(open: boolean) {
    if (!open) {
      setSearchParams((searchParams) => {
        searchParams.delete("isModalOpen");
        return searchParams;
      });
    } else {
      setSearchParams((searchParams) => {
        searchParams.set("isModalOpen", "" + true);
        return searchParams;
      });
    }

    setIsModalOpen(open);
  }
};

export default AddNewUserButton;
