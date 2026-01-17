"use client";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddGadgetForms = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      availability: "in-stock",
      isDeleted: false,
    },
  });

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("image", data.image[0]);

      // 1️⃣ Upload image
      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!uploadRes.ok) {
        const err = await uploadRes.json();
        throw new Error(err.error || "Image upload failed");
      }

      const { url } = await uploadRes.json();

      // 2️⃣ Save gadget
      const gadgetData = {
        ...data,
        image: url,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const saveRes = await fetch("/api/gadgets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(gadgetData),
      });

      if (!saveRes.ok) {
        throw new Error("Failed to save gadget");
      }

      toast.success("Gadget added successfully ✅");
      reset();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Name */}
      <div>
        <label className="label">Gadget Name</label>
        <input
          {...register("name", {
            required: "Gadget name is required",
            minLength: { value: 3, message: "Minimum 3 characters" },
          })}
          className="input input-bordered w-full"
          placeholder="iPhone 15 Pro"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      {/* Category */}
      <div>
        <label className="label">Category</label>
        <select
          {...register("category", { required: "Category is required" })}
          className="select select-bordered w-full"
        >
          <option value="">Select category</option>
          <option>Smartphone</option>
          <option>Laptop</option>
          <option>Headphone</option>
          <option>Smartwatch</option>
          <option>Monitor</option>
          <option>Keyboard</option>
          <option>Mouse</option>
          <option>Accessory</option>
        </select>
        {errors.category && (
          <p className="text-red-500 text-sm">{errors.category.message}</p>
        )}
      </div>

      {/* Image */}
      <div>
        <label className="label">Image URL</label>
        <input
          type="file"
          accept="image/*"
          {...register("image", { required: "Image is required" })}
          className="file-input file-input-bordered w-full"
        />

        {errors.image && (
          <p className="text-red-500 text-sm">{errors.image.message}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <label className="label">Description</label>
        <textarea
          {...register("description", {
            required: "Description is required",
            minLength: { value: 10, message: "Minimum 10 characters" },
          })}
          className="textarea textarea-bordered w-full"
          placeholder="Write gadget details..."
        />
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description.message}</p>
        )}
      </div>

      {/* Price */}
      <div>
        <label className="label">Price</label>
        <input
          type="number"
          {...register("price", {
            required: "Price is required",
            min: { value: 1, message: "Price must be greater than 0" },
          })}
          className="input input-bordered w-full"
          placeholder="145000"
        />
        {errors.price && (
          <p className="text-red-500 text-sm">{errors.price.message}</p>
        )}
      </div>

      {/* Stock Quantity */}
      <div>
        <label className="label">Stock Quantity</label>
        <input
          type="number"
          {...register("stockQuantity", {
            required: "Stock quantity is required",
            min: { value: 0, message: "Cannot be negative" },
          })}
          className="input input-bordered w-full"
          placeholder="25"
        />
        {errors.stockQuantity && (
          <p className="text-red-500 text-sm">{errors.stockQuantity.message}</p>
        )}
      </div>

      {/* Availability */}
      <div>
        <label className="label">Availability</label>
        <select
          {...register("availability", {
            required: "Availability is required",
          })}
          className="select select-bordered w-full"
        >
          <option value="in-stock">In Stock</option>
          <option value="out-of-stock">Out of Stock</option>
          <option value="pre-order">Pre Order</option>
        </select>
      </div>

      {/* Hidden isDeleted */}
      <input type="hidden" {...register("isDeleted")} />

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary w-full"
      >
        {isSubmitting ? "Adding..." : "Add Gadget"}
      </button>
    </form>
  );
};

export default AddGadgetForms;
