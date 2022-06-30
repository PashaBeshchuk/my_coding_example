import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { Button } from "components/_wrappers";

const ModalInfo = ({
  title,
  handleClose,
  handleAction,
  // optional props:
  text,
  buttonText,
  isButtonDisabled,
  children,
}) => {
  const handleConfirmation = useCallback(() => {
    handleAction();
    handleClose();
  }, [handleAction, handleClose]);

  return (
    <div>
      <div>{title}</div>

      <div>
        {text && <p>{text}</p>}
        {children}
      </div>

      <div>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={handleConfirmation}
          color="secondary"
          disabled={isButtonDisabled}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

ModalInfo.propTypes = {
  title: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleAction: PropTypes.func.isRequired,
  // optional props:
  text: PropTypes.string,
  buttonText: PropTypes.string,
  isButtonDisabled: PropTypes.bool,
  children: PropTypes.node,
};

ModalInfo.defaultProps = {
  text: "",
  buttonText: "Confirm",
  isButtonDisabled: false,
  children: null,
};

export default ConfirmDialog;
