import React from "react";

export default function TabsContent1({ data, show }) {
  return (
    <>
      <div className="tab-content"></div>
      <table className="table table-striped ">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((listItem) => {
              if (show === "active") {
                return listItem.status === "active";
              } else if (show === "completed") {
                return listItem.status === "completed";
              } else {
                return true;
              }
            })
            .map((listItem, index) => {
              return (
                <tr key={index}>
                  <td scope="col">{listItem.name}</td>
                  <td scope="col">{listItem.status}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}
