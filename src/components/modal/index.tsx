import React from "react";
import * as S from "./styles";
import Button from "../button";

type Props = {
  showOkButton?: boolean;
  showCancelButton?: boolean;

  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  onOk: () => void;
};

function Modal(props: Props) {
  const { children, isOpen, onClose, onOk } = props;

  if (!isOpen) return null;

  const isFooterVisible = props.showOkButton || props.showCancelButton;

  return (
    <S.Modal>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.ModalCloseButton onClick={onClose}>&times;</S.ModalCloseButton>
        <S.ModalChildren>{children}</S.ModalChildren>

        {isFooterVisible && (
          <S.ModalFooter>
            {props.showCancelButton && (
              <Button type="secondary" onClick={onClose}>
                Cancel
              </Button>
            )}
            {props.showOkButton && (
              <Button type="primary" onClick={onOk}>
                OK
              </Button>
            )}
          </S.ModalFooter>
        )}
      </S.ModalContent>
    </S.Modal>
  );
}

export default Modal;
