import { useMutation } from "@apollo/client";
import { useForm, SubmitHandler } from "react-hook-form";

import InputText from "../InputText/InputText";
import { EMAIL_PATTERN, PHONE_PATTERN } from "../../util/regexs";
import { CREATE_CUSTOMER_MUTATION } from "../../graphql/mutations/Customer.mutation";

import {
  CustomerFormContainer,
  CustomerFormForm,
  CustomerFormSubmit,
  CustomerFormTitle,
} from "./Style";
import Loader from "../Loader/Loader";

export interface ICustomerInputs {
  name: string;
  email: string;
  phone: string;
}

const AddCustomer = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<ICustomerInputs>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const [createCustomer, { loading }] = useMutation(CREATE_CUSTOMER_MUTATION, {
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
    await createCustomer({
      variables: {
        name: getValues("name"),
        email: getValues("email"),
        phone: getValues("phone"),
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

  if (loading) return <Loader />;

  return (
    <CustomerFormContainer>
      <CustomerFormTitle>Customer Information</CustomerFormTitle>
      <CustomerFormForm onSubmit={handleSubmit(onSubmit)}>
        {inputs.map((input, i: number) => (
          <InputText key={i} {...input} />
        ))}
        <CustomerFormSubmit type="submit" value="Add Customer" />
      </CustomerFormForm>
    </CustomerFormContainer>
  );
};

export default AddCustomer;
