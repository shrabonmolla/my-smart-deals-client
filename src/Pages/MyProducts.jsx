import React from "react";
import Table from "../Component/Table";

export default function MyProducts() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center py-4">
        My Products: <span className="text-smart">10</span>
      </h1>
      <Table />
    </div>
  );
}
