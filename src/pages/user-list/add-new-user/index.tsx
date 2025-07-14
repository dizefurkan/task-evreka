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
    if (isParamsModalOpen == "true") {
      setIsModalOpen(true);
    }
  }, []);

  useEffect(() => {
    setSearchParams((searchParams) => {
      searchParams.set("isModalOpen", "" + isModalOpen);
      return searchParams;
    });
  }, [isModalOpen]);

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
                refreshUserList();
              }}
            />
          </Modal>,
          document.body
        )}
    </>
  );
};

export default AddNewUserButton;
