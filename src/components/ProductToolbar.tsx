import { Card, CardContent, CardHeader } from "./ui/card";
import type React from "react";

type productCategoryProp = {
  categories:  { name: string }[];
  selectedCategory: string[];
  setSelectedCategory: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function ProductToolbar({ categories, selectedCategory, setSelectedCategory }: productCategoryProp) {

  function handleCategory(categoryName: string) {
    setSelectedCategory((prev) =>
      prev.includes(categoryName) ?
        prev.filter(c => c !== categoryName) :
        [...prev, categoryName]
    )
  }

  console.log(selectedCategory)

  return (
    <Card className="w-full max-w-xs rounded-xl border bg-white">
      {/* Header */}
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <h1 className="text-lg font-semibold">Filters</h1>
        <button
          // onClick={() => setIsSelected('')}
          className="text-sm text-blue-600 cursor-pointer">
          Clear all
        </button>
      </CardHeader>

      {/* Body */}
      <CardContent className="space-y-4">
        <h2 className="text-sm font-medium text-gray-700">Categories</h2>

        <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
          {categories.map((category) => (
            <label
              key={category.name}
              className="flex items-center gap-3 cursor-pointer rounded-md 
                         px-2 py-1 hover:bg-gray-100 transition"
            >
              <input
                checked={selectedCategory.includes(category.name)}
                onChange={() => handleCategory(category.name)}
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 
                           text-black focus:ring-black"
              />
              <span className="text-sm text-gray-800">
                {category.name}
              </span>
            </label>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

