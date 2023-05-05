import classNames from "classnames";
import { useEffect } from "react";

import Button, { ButtonVariant } from "../../components/Button/Button";

import { ModalProps } from "../../interfaces/Modal/Modal";
import {
  ModalBackground,
  ModalBody,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "./Style";

const Modal = ({
  title,
  onClose,
  onSubmit,
  children,
  shouldShow,
  disableSubmit = false,
}: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = shouldShow ? "hidden" : "unset";
  }, [shouldShow]);

  return (
    <ModalBackground className={classNames({ show: shouldShow })}>
      <ModalContainer className={classNames("modal-container")}>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button variant={ButtonVariant.secondary} onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant={ButtonVariant.primary}
            disabled={disableSubmit}
            onClick={onSubmit}
          >
            Generate
          </Button>
        </ModalFooter>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
