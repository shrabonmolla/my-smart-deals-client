import React from "react";

export default function MyBidTable() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="overflow-x-auto ">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>SL No </th>
                <th>Product Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>

                    <div className="font-bold">Product Name</div>
                  </div>
                </td>
                <td>Category</td>
                <td>Price</td>
                <td>
                  <div className="badge badge-warning rounded-full">
                    Pending
                  </div>
                </td>
                <th className="flex flex-row-reverse gap-3 ">
                  <button className="btn btn-outline  btn-error">
                    Remove Bid
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
