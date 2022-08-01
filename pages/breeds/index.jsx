import React from "react";
import Search from "../../components/Search";

function index() {
  const [data, setData] = React.useState([]);
  const [datatofetch, setDatatofetch] = React.useState(7);
  const [loaded, setLoaded] = React.useState(false);

  const getallBreeds = async () => {
    var call = await fetch(
      `https://api.thecatapi.com/v1/breeds?limit=${datatofetch}`
    );
    var response = await call.json();
    setData(response);
    console.log(response);
    setLoaded(true);
  };

  React.useEffect(() => {
    getallBreeds();
  }, []);

  return (
    <div>
      {loaded ? (
        <div>
          <div className="">
            <div className="font-bold text-2xl rounded-b-xl p-4 fixed w-full text-center top-0 bg-blue-500 w-f">
              <a
                className="underline underline-offset-4 decoration-4 decoration-blue-600"
                href="/"
              >
                The Wiki Meow
              </a>
            </div>
            {data.map((x) => {
              return (
                <a
                  href={`./breeds/${x.id}`}
                  className="flex flex-col-reverse  m-16  xl:flex-row  items-center xl:m-24 xl:hover:bg-black/10 rounded-2xl border-b-4"
                >
                  <img
                    className="w-56 h-56 rounded-2xl object-cover object-center"
                    src={x.image ? x.image.url : ""}
                    alt=""
                  />
                  <div className=" xl:mx-8">
                    <h1 className="font-bold text-3xl">{x.name}</h1>
                    <p className="">{x.description}</p>
                  </div>
                </a>
              );
            })}
          </div>

          {(datatofetch <= 67) ? (
            <button
              onClick={() => {
                setDatatofetch((datatofetch) => datatofetch + 7);
                getallBreeds();
              }}
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Load more
            </button>
          ) : (
            ""
          )}
        </div>
      ) : (
        "lol"
      )}
    </div>
  );
}

export default index;
