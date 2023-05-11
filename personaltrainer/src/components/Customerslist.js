import React, { useState, useEffect } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Button from "@mui/material/Button";

export default function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => fetchData(), []);

  const fetchData = () => {
    fetch("http://traineeapp.azurewebsites.net/api/customers")
      .then((response) => response.json())
      .then((data) => setCustomers(data.content));
  };

  const deleteCustomer = (link) => {
    if (window.confirm("Are you sure?")) {
      fetch(link, { method: "DELETE" })
        .then((res) => fetchData())
        .catch((err) => console.error(err));
    }
  };

  const columns = [
    {
      Header: "Firstname",
      accessor: "firstname",
    },
    {
      Header: "Lastname",
      accessor: "lastname",
    },
    {
      Header: "Streetaddress",
      accessor: "streetaddress",
    },
    {
      Header: "Postcode",
      accessor: "postcode",
    },
    {
      Header: "City",
      accessor: "city",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Phone",
      accessor: "phone",
    },
    {
      sortable: false,
      filterable: false,
      width: 100,
      accessor: "links.href",
      Cell: (row) => 
        <Button
          size="small"
          color="error"
          onClick={() => deleteCustomer(row.value)}
        >
          Delete
        </Button>
      
    }
  ];

  return (
    <div>
      <h1>Customers</h1>
      <ReactTable filterable={true} data={customers} columns={columns} />
    </div>
  );
}
