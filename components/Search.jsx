import React from "react";

function Search({ index }) {
  const [search, setSearch] = React.useState("");

  return (
    <div>
      <div class="">
        <div class="mb-3 w-48 xl:w-72">
          <div className="">
            <div class=" input-group relative flex items-stretch w-full mb-4">
              <input
                type="search"
                class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Search for a breed"
                aria-label="Search for a breed"
                aria-describedby="button-addon2"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
             
            </div>
            {search ? (
              <div className="h-max max-h-52 w-full overflow-y-auto rounded-lg border-solid border-4 border-blue-600 bg-white">
                {index.map((item) => {
                  if (search == "") {
                    return "";
                  } else if (
                    item.name.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return (
                      <a
                        href={`./breeds/${item.id}`}
                        className=" text-black capitalize  "
                      >
                        <h1 className="p-2 w-full   hover:bg-black hover:bg-opacity-5">
                          {" "}
                          {item.name.toLowerCase()}{" "}
                        </h1>
                      </a>
                    );
                  }
                })}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
