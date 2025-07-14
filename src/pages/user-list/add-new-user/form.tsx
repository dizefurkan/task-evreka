import { faker } from "@faker-js/faker";

import { roles, Roles, type Role, type User } from "../useUserList";
import Button from "../../../components/button";
import Checkbox from "../../../components/checkbox";
import Form from "../../../components/form";
import Input from "../../../components/input";
import Select from "../../../components/select";
import { validations } from "../../../helpers/validation";
import { useForm } from "../../../hooks/useForm";

type NewUserFormProps = {
  onSubmit: (data: User) => void;
};

const useNewUserForm = (props: NewUserFormProps) => {
  const { values, errors, handleChange, validateAll, clearValues } = useForm({
    startValidation: false,
    initialValues: {
      name: "",
      email: "",
      password: "",
      role: Roles.User,
      active: false,
    },
    schema: {
      name: [validations.required()],
      role: [validations.required()],
      email: [validations.required(), validations.email()],
      password: [validations.required(), validations.minLength(6)],
    },
  });

  const onSubmit = () => {
    const hasError = validateAll();
    if (hasError) return;
    props.onSubmit({
      index: -1,
      id: faker.string.uuid(),
      name: values.name,
      email: values.email,
      role: values.role as Role,
      createdAt: new Date(Date.now()).toISOString(),
      coordinates: {
        latitude: faker.location.latitude(),
        longitude: faker.location.longitude(),
      },
    });
    clearValues();
  };

  return {
    values,
    errors,
    handleChange,
    onSubmit,
  };
};

const NewUserForm: React.FC<NewUserFormProps> = (props) => {
  const { values, errors, handleChange, onSubmit } = useNewUserForm(props);

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <Form.Item
        label="Name"
        help={errors.name.message}
        status={errors.name.isValid ? undefined : "error"}
      >
        <Input
          type="text"
          status={errors.name.isValid ? undefined : "error"}
          placeholder="Enter name"
          value={values.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </Form.Item>
      <Form.Item
        label="Email"
        help={errors.email.message}
        status={errors.email.isValid ? undefined : "error"}
      >
        <Input
          value={values.email}
          onChange={(e) => handleChange("email", e.target.value)}
          status={errors.email.isValid ? undefined : "error"}
          type="email"
          placeholder="Enter email"
        />
      </Form.Item>
      <Form.Item
        label="Password"
        help={errors.password.message}
        status={errors.password.isValid ? undefined : "error"}
      >
        <Input
          status={errors.password.isValid ? undefined : "error"}
          value={values.password}
          onChange={(e) => handleChange("password", e.target.value)}
          type="password"
          placeholder="Enter password"
        />
      </Form.Item>
      <Form.Item label="Role">
        <Select
          required
          value={values.role}
          onChange={(e) => handleChange("role", e.target.value)}
        >
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="Active">
        <Checkbox
          checked={values.active}
          onChange={(e) => handleChange("active", e.target.checked)}
        />
      </Form.Item>
      <Button htmlType="submit">Submit</Button>
    </Form>
  );
};

export default NewUserForm;
