import React, { useState, useEffect } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Button from "@mui/material/Button";
import dayjs from 'dayjs';



export default function Training(){

    const [trainings, setTrainings] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
      fetch("https://traineeapp.azurewebsites.net/gettrainings")
        .then((response) => response.json())
        .then((data) => setTrainings(data));
    };

    const deleteTraining = (link) => {
        if (window.confirm("Are you sure?")) {
          fetch(link, { method: "DELETE" })
            .then((res) => fetchData())
            .catch((err) => console.error(err));
        }
      };


      const columns = [
        {
            Header: "Date",
            accessor: "date" ,
            Cell: ({ value }) => dayjs(value).format('DD/MM/YYYY H:mm'),
          },
          {
            Header: "Duration",
            accessor: "duration",
          },
          {
            Header: "Activity",
            accessor: "activity",
          },
          
          {
            Header: "Customer first name",
            accessor: "customer.firstname", 
          },
          {
            Header: "Customer last name",
            accessor: "customer.lastname", 
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
                onClick={() => deleteTraining(row.value)}
              >
                Delete
              </Button>
            
          }
      ];

      

    return(
        <div>
            <h1>Training</h1>
           
            <ReactTable filterable={true} data={trainings} columns={columns} />
        </div>
    )
}