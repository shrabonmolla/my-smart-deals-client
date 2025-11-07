import React from "react";
import CardCreate from "../Component/CardCreate";

export default function CreateProducts() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center py-4">
        Create: <span className="text-smart">A Product</span>
      </h1>
      <CardCreate />
    </div>
  );
}
