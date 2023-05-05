import { useState } from "react";
import { useMutation } from "@apollo/client";

import Icon from "../Icon/Icon";
import Loader from "../Loader/Loader";
import EditCustomer from "../EditCustomer/EditCustomer";

import { DELETE_CUSTOMER_MUTATION } from "../../graphql/mutations/Customer.mutation";

import {
  CustomerItemActions,
  CustomerItemContainer,
  CustomerItemSpan,
  CustomerItemTitle,
} from "./Style";

export interface ICustomer {
  _id: string;
  name: string;
  email: string;
  phone: string;
}

export interface ICustomerItem {
  customer: ICustomer;
}

const CustomerItem = ({ customer }: ICustomerItem) => {
  const [shouldShow, setShouldShow] = useState(false);
  const { _id, name, email, phone } = customer;
  const [deleteCustomer, { loading }] = useMutation(DELETE_CUSTOMER_MUTATION, {
    onCompleted: (data, clientOptions) => {
      console.log(data);
      document.location.reload();
    },
    onError(error, clientOptions) {
      console.error(error);
    },
  });
  const icons = {
    edit: {
      icon: "https://www.svgrepo.com/show/509911/edit.svg",
      alt: "edit-icon",
      height: "25px",
      width: "25px",
      onClick: () => setShouldShow(true),
    },
    delete: {
      icon: "https://www.svgrepo.com/show/502608/delete-2.svg",
      alt: "delete-icon",
      height: "25px",
      width: "25px",
      onClick: () => deleteCustomer({ variables: { deleteCustomerId: _id } }),
    },
  };

  if (loading) return <Loader />;

  return (
    <>
      <CustomerItemContainer>
        <CustomerItemTitle>{name}</CustomerItemTitle>
        <CustomerItemSpan>{email}</CustomerItemSpan>
        <CustomerItemSpan>{phone}</CustomerItemSpan>
        <CustomerItemActions>
          <Icon {...icons.edit} />
          <Icon {...icons.delete} />
        </CustomerItemActions>
      </CustomerItemContainer>
      <EditCustomer
        shouldShow={shouldShow}
        onClose={() => setShouldShow(false)}
        customer={customer}
      />
    </>
  );
};

export default CustomerItem;
