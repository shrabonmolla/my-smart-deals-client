import React from "react";

export default function OfferedPrice() {
  return (
    <div className="max-w-4xl mx-auto p-6 border border-dashed border-blue-400 rounded-xl my-3 bg-white">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Give Seller Your Offered Price
      </h2>

      <form className="space-y-6">
        {/* Title + Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-1">
              Buyer Name
            </label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="e.g. Yamaha Fz Guitar for Sale"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-1">
              Buyer Email
            </label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="e.g. Yamaha Fz Guitar for Sale"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* image url */}
        <div>
          <label htmlFor="location" className="block text-sm font-medium mb-1">
            Buyer Image Url
          </label>
          <input
            id="location"
            name="location"
            type="text"
            placeholder="City, Country"
            className="input input-bordered w-full"
          />
        </div>
        {/* place your price */}
        <div>
          <label htmlFor="location" className="block text-sm font-medium mb-1">
            Place Your Price
          </label>
          <input
            id="location"
            name="location"
            type="text"
            placeholder="City, Country"
            className="input input-bordered w-full"
          />
        </div>
        {/* Contact Info */}
        <div>
          <label htmlFor="location" className="block text-sm font-medium mb-1">
            Contact Info
          </label>
          <input
            id="location"
            name="location"
            type="text"
            placeholder="City, Country"
            className="input input-bordered w-full"
          />
        </div>

        {/* Submit Button */}
        <div className="flex gap-4  items-end">
          <button className="btn btn-error btn-outline">Cancel</button>
          <button type="submit" className="btn bg-smart text-white">
            Create A Product
          </button>
        </div>
      </form>
    </div>
  );
}
