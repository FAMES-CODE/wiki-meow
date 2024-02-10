import React, { useState } from "react";
import Head from "next/head";
import Footer from "../../components/Footer";

function index() {
  const [data, setData] = React.useState([]);
  const [datatofetch, setDatatofetch] = React.useState(7);
  const [loaded, setLoaded] = React.useState(false);
  const [breedImgUrls, setBreedImgUrls] = React.useState([]);
  const getallBreeds = async (numberOfContent) => {
    var call = await fetch(
      `https://api.thecatapi.com/v1/breeds?limit=${numberOfContent}`
    );
    var response = await call.json();
    setData(response);
    console.log(response);
    setLoaded(true);
  };

  React.useEffect(() => {
    getallBreeds(datatofetch);
  }, []);

  const getBreedImages = async () => {
    const promises = data.map(async (x) => {
      const call = await fetch(
        `https://api.thecatapi.com/v1/images/${x.reference_image_id}`
      );
      const response = await call.json();
      return response.url;
    });

    const urls = await Promise.all(promises);
    setBreedImgUrls(urls);
  };

  React.useEffect(() => {
    if (data.length > 0) {
      getBreedImages();
    }
  }, [data]);

  return (
    <div>
      <Head>
        <title>Wiki Meow | Breeds</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {loaded ? (
        <div>
          <div className="">
            <div className="flex items-center font-bold justify-center text-4xl ">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="cat"
                class="w-8 h-8"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M290.59 192c-20.18 0-106.82 1.98-162.59 85.95V192c0-52.94-43.06-96-96-96-17.67 0-32 14.33-32 32s14.33 32 32 32c17.64 0 32 14.36 32 32v256c0 35.3 28.7 64 64 64h176c8.84 0 16-7.16 16-16v-16c0-17.67-14.33-32-32-32h-32l128-96v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V289.86c-10.29 2.67-20.89 4.54-32 4.54-61.81 0-113.52-44.05-125.41-102.4zM448 96h-64l-64-64v134.4c0 53.02 42.98 96 96 96s96-42.98 96-96V32l-64 64zm-72 80c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zm80 0c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z"
                ></path>
              </svg>

              <a
                className="underline underline-offset-4 decoration-4 decoration-blue-600"
                href="/"
              >
                The Wiki Meow
              </a>
            </div>
            {data.map((x, index) => {
              return (
                <a
                  key={x.id}
                  href={`./breeds/${x.id}`}
                  className="flex flex-col-reverse  m-16  xl:flex-row  items-center xl:m-24 xl:hover:bg-black/10 rounded-2xl border-b-4"
                >
                  <img
                    className="w-56 h-56 rounded-2xl object-cover object-center"
                    src={breedImgUrls[index] || ""}
                    alt=""
                  />
                  <div className=" xl:mx-8">
                    <h1 className="font-bold text-3xl">{x.name}</h1>
                    <p className="">{x.description}</p>
                  </div>
                </a>
              );
            })}
            {datatofetch <= 67 ? (
              <button
                onClick={() => {
                  getallBreeds(datatofetch + 7);
                  setDatatofetch(datatofetch + 7);
                }}
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="flex justify-center items-center w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Load more
              </button>
            ) : (
              ""
            )}
          </div>
          <Footer />
        </div>
      ) : (
        <div className="flex justify-center items-center h-96" role="status">
          <svg
            aria-hidden="true"
            class="mr-2 w-24 h-24 text-gray-200 animate-spin dark:text-gray-900 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            ></path>
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            ></path>
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      )}
    </div>
  );
}

export default index;
