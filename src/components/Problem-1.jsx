import React, { useState } from "react";

import Form1 from "./problem1/Form1";
import TabsTitle1 from "./problem1/TabsTitle1";
import TabsContent1 from "./problem1/TabsContent1";
import DataTable1 from "./problem1/DataTable1";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [formData, setFormData] = useState({ name: "", status: "" });
  const [data, setData] = useState([]);

  const handleClick = (val) => {
    setShow(val);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value.toLowerCase(),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setData((prevData) => [...prevData, formData]);
    console.log(data);
  };

  const order = { active: 1, completed: 2 };
  data.sort((a, b) => {
    const orderA = order[a.status] || 3;
    const orderB = order[b.status] || 3;
    return orderA - orderB;
  });

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <Form1
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <DataTable1 data={data} show={show} handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Problem1;
