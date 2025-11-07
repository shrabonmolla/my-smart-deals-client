import React from "react";

const CardCreate = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 border border-dashed border-blue-400 rounded-xl bg-white">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Create A Product
      </h2>

      <form className="space-y-6">
        {/* Title + Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-1">
              Title
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
            <label
              htmlFor="category"
              className="block text-sm font-medium mb-1"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              className="select select-bordered w-full"
            >
              <option value="" disabled defaultValue="">
                Select a Category
              </option>
              <option>Electronics</option>
              <option>Furniture</option>
              <option>Vehicles</option>
              <option>Fashion</option>
            </select>
          </div>
        </div>

        {/* Min Price + Max Price */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="minPrice"
              className="block text-sm font-medium mb-1"
            >
              Min Price You want to Sale ($)
            </label>
            <input
              id="minPrice"
              name="minPrice"
              type="number"
              placeholder="e.g. 18.5"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label
              htmlFor="maxPrice"
              className="block text-sm font-medium mb-1"
            >
              Max Price You want to Sale ($)
            </label>
            <input
              id="maxPrice"
              name="maxPrice"
              type="number"
              placeholder="Optional (default = Min Price)"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* Product Condition + Usage */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          <fieldset className="border-0 p-0 m-0">
            <legend className="block text-sm font-medium mb-2">
              Product Condition
            </legend>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  id="condition-new"
                  type="radio"
                  name="condition"
                  className="radio radio-primary"
                  defaultChecked
                />
                <span>Brand New</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  id="condition-used"
                  type="radio"
                  name="condition"
                  className="radio"
                />
                <span>Used</span>
              </label>
            </div>
          </fieldset>

          <div>
            <label
              htmlFor="usageTime"
              className="block text-sm font-medium mb-1"
            >
              Product Usage time
            </label>
            <input
              id="usageTime"
              name="usageTime"
              type="text"
              placeholder="e.g. 1 year 3 month"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* Product Image */}
        <div>
          <label
            htmlFor="productImage"
            className="block text-sm font-medium mb-1"
          >
            Your Product Image URL
          </label>
          <input
            id="productImage"
            name="productImage"
            type="url"
            placeholder="https://..."
            className="input input-bordered w-full"
          />
        </div>

        {/* Seller Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="sellerName"
              className="block text-sm font-medium mb-1"
            >
              Seller Name
            </label>
            <input
              id="sellerName"
              name="sellerName"
              type="text"
              placeholder="e.g. Artisan Roasters"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label
              htmlFor="sellerEmail"
              className="block text-sm font-medium mb-1"
            >
              Seller Email
            </label>
            <input
              id="sellerEmail"
              name="sellerEmail"
              type="email"
              placeholder="e.g. you@example.com"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="sellerContact"
              className="block text-sm font-medium mb-1"
            >
              Seller Contact
            </label>
            <input
              id="sellerContact"
              name="sellerContact"
              type="text"
              placeholder="e.g. +1-555-1234"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label
              htmlFor="sellerImage"
              className="block text-sm font-medium mb-1"
            >
              Seller Image URL
            </label>
            <input
              id="sellerImage"
              name="sellerImage"
              type="url"
              placeholder="https://..."
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* Location */}
        <div>
          <label htmlFor="location" className="block text-sm font-medium mb-1">
            Location
          </label>
          <input
            id="location"
            name="location"
            type="text"
            placeholder="City, Country"
            className="input input-bordered w-full"
          />
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium mb-1"
          >
            Simple Description about your Product
          </label>
          <textarea
            id="description"
            name="description"
            className="textarea textarea-bordered w-full"
            rows="4"
            placeholder="e.g. I bought this product 3 month ago. did not use more than 1/2 time..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-full">
          Create A Product
        </button>
      </form>
    </div>
  );
};

export default CardCreate;
