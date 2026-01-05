import { Card, CardContent, CardHeader } from "./ui/card";
import type React from "react";

type productCategoryProp = {
  categories: { name: string }[];
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  maxPrice: number;
  minPrice: number;
  range: number;
  setRange: React.Dispatch<React.SetStateAction<number>>;
}

export default function ProductToolbar({ categories, selectedCategory, setSelectedCategory, maxPrice, minPrice, range, setRange }: productCategoryProp) {

  function handleCategory(categoryName: string) {
    setSelectedCategory(categoryName);
  }

  return (
    <Card className="w-full max-w-xs rounded-xl border bg-white">
      {/* Header */}
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <h1 className="text-lg font-semibold">Filters</h1>
      </CardHeader>

      {/* Body */}
      <CardContent className="space-y-4">
        <h2 className="text-sm font-medium text-gray-700">Categories</h2>

        <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
          {categories.map((category) => (
            <label
              key={category.name}
              className="flex items-center gap-3 cursor-pointer rounded-md px-2 py-1 hover:bg-gray-100 transition"
            >
              <input
                checked={selectedCategory.includes(category.name)}
                onChange={() => handleCategory(category.name)}
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
              />
              <span className="text-sm text-gray-800">
                {category.name}
              </span>
            </label>
          ))}
        </div>

        {/* Sort price */}
        <div className="w-full px-1">
          <div className="relative w-full">
            {/* Slider */}
            <input
              type="range"
              min={minPrice}
              max={maxPrice}
              value={range}
              onChange={(e) => setRange(Number(e.target.value))}
              className="w-full h-2 appearance-none rounded-lg bg-gray-200 accent-gray-950 cursor-pointer"/>

            {/* Value */}
            <div
              className="absolute -top-8 text-xs font-medium text-gray-950 bg-gray-200 px-2 py-1 rounded shadow"
              style={{
                left: `${((range - minPrice) / (maxPrice - minPrice)) * 100}%`,
                transform: "translateX(-50%)",
              }}
            >
              ₹{range}
            </div>
          </div>

          {/* Min / Max */}
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>₹{minPrice}</span>
            <span>₹{maxPrice}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

