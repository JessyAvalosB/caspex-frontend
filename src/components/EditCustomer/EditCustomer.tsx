import { useMutation } from "@apollo/client";
import { SubmitHandler, useForm } from "react-hook-form";

import Modal from "../../layouts/Modal/Modal";
import InputText from "../InputText/InputText";

import { EditCustomerContainer } from "./Style";
import { ModalProps } from "../../interfaces/Modal/Modal";
import { ICustomerInputs } from "../AddCustomer/AddCustomer";
import { EMAIL_PATTERN, PHONE_PATTERN } from "../../util/regexs";
import { CustomerFormForm, CustomerFormTitle } from "../AddCustomer/Style";
import { UPDATE_CUSTOMER_MUTATION } from "../../graphql/mutations/Customer.mutation";

const EditCustomer = (props: any) => {
  const { shouldShow, onClose, customer } = props;
  const {
    register,
    handleSubmit,
    getValues,
    resetField,
    formState: { errors },
  } = useForm<ICustomerInputs>({
    defaultValues: {
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
    },
  });

  const [updateCustomer] = useMutation(UPDATE_CUSTOMER_MUTATION, {
    onCompleted: (data, clientOptions) => {
      console.log(data);
      document.location.reload();
    },
    onError(error, clientOptions) {
      console.error(error);
    },
  });

  const onSubmit: SubmitHandler<ICustomerInputs> = async (
    data: ICustomerInputs,
    event
  ) => {
    console.log("Submitted");
    console.table(data);
    await updateCustomer({
      variables: {
        updateCustomerId: customer._id,
        updateCustomerName: getValues("name"),
        updateCustomerEmail: getValues("email"),
        updateCustomerPhone: getValues("phone"),
      },
    });
  };

  const inputs = [
    {
      label: "Name",
      placeholder: "Axel Rose",
      errorMessage: errors.name?.message,
      ...register("name", {
        required: { value: true, message: "Customer's Name is require" },
      }),
    },
    {
      label: "Email",
      placeholder: "example@example.com",
      errorMessage: errors.email?.message,
      ...register("email", {
        required: { value: true, message: "Customer's Email is require" },
        pattern: { value: EMAIL_PATTERN, message: "Invalid Email" },
      }),
    },
    {
      label: "Phone Number",
      placeholder: "xxx-xxx-xxxx",
      errorMessage: errors.phone?.message,
      ...register("phone", {
        required: { value: true, message: "Customer's Phone is require" },
        pattern: {
          value: PHONE_PATTERN,
          message: "Invalid Phone Number",
        },
        maxLength: {
          value: 10,
          message: "Phone number must be 10 digits",
        },
        minLength: {
          value: 10,
          message: "Phone number must be 10 digits",
        },
      }),
    },
  ];

  const modalConfig: ModalProps = {
    title: "Edit User",
    shouldShow,
    onClose: () => {
      resetField("name");
      resetField("email");
      resetField("phone");
      onClose();
    },
    onSubmit: handleSubmit(onSubmit),
    disableSubmit: Object.keys(errors).length !== 0,
  };

  return (
    <Modal {...modalConfig}>
      <EditCustomerContainer>
        <CustomerFormTitle>Customer Information</CustomerFormTitle>
        <CustomerFormForm onSubmit={handleSubmit(onSubmit)}>
          {inputs.map((input, i: number) => (
            <InputText key={i} {...input} />
          ))}
        </CustomerFormForm>
      </EditCustomerContainer>
    </Modal>
  );
};

export default EditCustomer;
