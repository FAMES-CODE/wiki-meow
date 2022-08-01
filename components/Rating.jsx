import React from "react";

function Rating({ index }) {
  if (index == 1)
    return (
      <div class="w-1/4 bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
          style={{ width: "20%" }}
        >
          20%
        </div>
      </div>
    );
  if (index == 2)
    return (
      <div class="w-1/4 bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
          style={{ width: "40%" }}
        >
          40%
        </div>
      </div>
    );
  if (index == 3)
    return (
      <div class="w-1/4 bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
          style={{ width: "60%" }}
        >
          60%
        </div>
      </div>
    );
  if (index == 4)
    return (
      <div class="w-1/4 bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
          style={{ width: "80%" }}
        >
          80%
        </div>
      </div>
    );
  if (index == 5)
    return (
      <div class="w-1/4 bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
          style={{ width: "100%" }}
        >
          100%
        </div>
      </div>
    );
}

export default Rating;
