import React from "react";
import MyBidTable from "../Component/MyBidTable";

export default function MyBids() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center py-4">
        My Bids: <span className="text-smart">10</span>
      </h1>
      <MyBidTable />
    </div>
  );
}
