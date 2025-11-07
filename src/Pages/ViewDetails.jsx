import React from "react";
import { Link } from "react-router";

const ViewDetails = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <button className="text-sm text-gray-600 hover:underline mb-6 flex items-center gap-2">
        ← Back To Products
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT COLUMN → Image + Product Description */}
        <div className="space-y-8">
          {/* Image */}
          <div className="w-full h-80 md:h-[420px] bg-gray-200 rounded-lg"></div>

          {/* Product Description */}
          <div className="p-5 bg-white border rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Product Description</h2>

            <div className="flex justify-between text-sm text-gray-700 mb-4">
              <p>
                <span className="font-semibold">Condition:</span> New
              </p>
              <p>
                <span className="font-semibold">Usage Time:</span> 3 Month
              </p>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed">
              It Is A Long Established Fact That A Reader Will Be Distracted By
              The Readable Content Of A Page When Looking At Its Layout...
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN → Info Flow */}
        <div className="space-y-6">
          {/* Title + Category */}
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold">
              Yamaha Fz Guitar For Sale
            </h1>
            <span className="inline-block mt-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
              Art and Hobbies
            </span>
          </div>

          {/* Price Section */}
          <div className="p-4 bg-white rounded-lg border shadow-sm">
            <p className="text-green-600 text-2xl font-semibold">$22.5 - 30</p>
            <p className="text-gray-500 text-sm">Price starts from</p>
          </div>

          {/* Product Details */}
          <div className="p-4 bg-white rounded-lg border shadow-sm">
            <h2 className="text-lg font-semibold mb-3">Product Details</h2>
            <p className="text-sm">
              <span className="font-semibold">Product ID:</span>{" "}
              6BF753aa2174ca3E58ec852f4
            </p>
            <p className="text-sm">
              <span className="font-semibold">Posted:</span> 10/19/2024
            </p>
          </div>

          {/* Seller Info */}
          <div className="p-4 bg-white rounded-lg border shadow-sm space-y-4">
            <h2 className="text-lg font-semibold">Seller Information</h2>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div>
                <p className="font-semibold">Sara Chen</p>
                <p className="text-gray-600 text-sm">crafts.by.sara@shop.net</p>
              </div>
            </div>

            <p className="text-sm">
              <span className="font-semibold">Location:</span> Los Angeles, CA
            </p>
            <p className="text-sm">
              <span className="font-semibold">Contact:</span> sara.chen_contact
            </p>

            <p className="text-sm">
              <span className="font-semibold">Status:</span>
              <span className="ml-2 px-2 py-1 rounded bg-yellow-100 text-yellow-600 text-xs">
                On Sale
              </span>
            </p>
          </div>

          {/* BUY BUTTON */}
          <Link to="/offeredprice" className="btn btn-primary w-full">
            I Want Buy This Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
