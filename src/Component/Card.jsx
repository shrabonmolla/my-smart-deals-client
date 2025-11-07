import React from "react";
import { Link } from "react-router";

export default function Card() {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm py-2">
        <figure className="px-4 pt-4">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="text-start px-4 pt-4 space-y-3">
          <div className="badge badge-soft badge-primary  ">On Sale</div>

          <h2 className="card-title">Card Title</h2>
          <p className="text-smart font-bold text-xl ">$ 55.99- 75</p>

          <div className="card-actions w-full  ">
            <Link
              to="/viewdetails"
              className="btn btn-outline btn-primary  w-full"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
