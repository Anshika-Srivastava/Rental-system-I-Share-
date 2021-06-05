import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import renderFormGroupField from "../../helpers/renderFormGroupField";
import { required, maxLength20, minLength8 } from "../../helpers/validation";
import { ReactComponent as IconShieldLockFill } from "bootstrap-icons/icons/shield-lock-fill.svg";
import { ReactComponent as IconKeyFill } from "bootstrap-icons/icons/key-fill.svg";

const ChangePasswordForm = (props) => {
  const { handleSubmit, submitting, onSubmit, submitFailed } = props;
  return (
    <div className="card border-info">
      <h6 className="card-header bg-info text-white">
        <IconKeyFill /> Change Password
      </h6>
      <div className="card-body">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`needs-validation ${submitFailed ? "was-validated" : ""}`}
          noValidate
        >
          <Field
            name="currentPassword"
            type="password"
            label="Current Password"
            component={renderFormGroupField}
            placeholder="******"
            icon={IconShieldLockFill}
            validate={[required, maxLength20, minLength8]}
            required={true}
            maxLength="20"
            minLength="8"
            className="mb-3"
          />
          <Field
            name="password"
            type="password"
            label="New Password"
            component={renderFormGroupField}
            placeholder="******"
            icon={IconShieldLockFill}
            validate={[required, maxLength20, minLength8]}
            required={true}
            maxLength="20"
            minLength="8"
            className="mb-3"
          />
          <Field
            name="confirmPassword"
            type="password"
            label="Confirm New password"
            component={renderFormGroupField}
            placeholder="******"
            icon={IconShieldLockFill}
            validate={[required, maxLength20, minLength8]}
            required={true}
            maxLength="20"
            minLength="8"
            className="mb-3"
          />
          <button
            type="submit"
            className="btn btn-info btn-block"
            disabled={submitting}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default compose(
  reduxForm({
    form: "changepassword",
  })
)(ChangePasswordForm);
