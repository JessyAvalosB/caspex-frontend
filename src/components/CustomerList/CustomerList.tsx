import { useQuery } from "@apollo/client";

import Loader from "../Loader/Loader";
import RegularList from "../RegularList/RegularList";
import CustomerItem from "../CustomerItem/CustomerItem";

import { GET_CUSTOMERS_QUERY } from "../../graphql/queries/Customer.querie";

const CustomerList = () => {
  const { data, loading } = useQuery(GET_CUSTOMERS_QUERY);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {data && (
        <RegularList
          items={data.customers}
          resouceName="customer"
          itemComponent={CustomerItem}
        />
      )}

      {data.customers.length === 0 && (
        <span style={{ textAlign: "center" }}>Add New Customer</span>
      )}
    </>
  );
};

export default CustomerList;
