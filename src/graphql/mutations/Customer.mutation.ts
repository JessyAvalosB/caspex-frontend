import { gql } from "@apollo/client";

export const CREATE_CUSTOMER_MUTATION = gql`
  mutation AddCustomer($name: String!, $email: String!, $phone: String!) {
    addCustomer(name: $name, email: $email, phone: $phone) {
      _id
      name
      email
      phone
    }
  }
`;

export const UPDATE_CUSTOMER_MUTATION = gql`
  mutation UpdateCustomer(
    $updateCustomerId: String!
    $updateCustomerName: String!
    $updateCustomerEmail: String!
    $updateCustomerPhone: String!
  ) {
    updateCustomer(
      id: $updateCustomerId
      name: $updateCustomerName
      email: $updateCustomerEmail
      phone: $updateCustomerPhone
    )
  }
`;

export const DELETE_CUSTOMER_MUTATION = gql`
  mutation DeleteCustomer($deleteCustomerId: String!) {
    deleteCustomer(id: $deleteCustomerId)
  }
`;
