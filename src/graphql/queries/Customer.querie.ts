import { gql } from "@apollo/client";

export const GET_CUSTOMERS_QUERY = gql`
  {
    customers {
      _id
      name
      email
      phone
    }
  }
`;
