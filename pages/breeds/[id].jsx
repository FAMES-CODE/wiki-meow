import React from "react";
import { useRouter } from "next/router";
import Rating from "../../components/Rating";

function Breed() {
  const [breed, setBreed] = React.useState([]);
  const [breedimgurl, setBreedimgurl] = React.useState([]);
  const [breedimgs, setBreedimgs] = React.useState([]);
  const [loaded, setLoaded] = React.useState(false);
  const [showmore, setShowmore] = React.useState(false);

  const router = useRouter();
  var { id } = router.query;

  const getBreed = async () => {
    var call = await fetch(`https://api.thecatapi.com/v1/breeds/${id}`);
    var response = await call.json();
    var callimg = await fetch(
      `https://api.thecatapi.com/v1/images/${response.reference_image_id}`
    );
    var responseimg = await callimg.json();
    var callimgs = await fetch(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${id}&limit=8`
    );
    var responseimgs = await callimgs.json();
    setBreed(response);
    setBreedimgurl(responseimg);
    setBreedimgs(responseimgs);
    setLoaded(true);
    console.log(response);
  };

  React.useEffect(() => {
    if (!router.isReady) return;
    getBreed();
  }, [router]);

  return (
    <div className="m-2 xl:m-14">
      {loaded ? (
        <div className="flex flex-col justify-around items-start">
          <div className="flex flex-col xl:flex-row  justify-around items-start">
            <div className="xl:w-3/6 xl:mx-16">
              <a
                className="underline underline-offset-4 decoration-4 decoration-blue-600"
                href="/"
              >
                The Wiki Meow
              </a>
               
                <img className="my-6" src={ breedimgurl.url ? breedimgurl.url : ""} alt="Error" />
           
            </div>

            <div className="w-full">
              <h1 className="text-4xl font-bold mb-6">{breed.name}</h1>
              <p className="xl:w-4/6">{breed.description}</p>

              <div>
                <ul className="text-right">
                  <li className="my-4 flex justify-between items-center">
                    <span className="font-bold">Origin :</span> {breed.origin}
                  </li>
                  <li className="my-4 flex justify-between items-start">
                    <span className="font-bold">Temperament :</span>{" "}
                    {breed.temperament.split(",").length > 1 ? (
                      <ul>
                        {breed.temperament.split(",").map((x) => {
                          return <li>{x}</li>;
                        })}
                      </ul>
                    ) : (
                      breed.temperament
                    )}
                  </li>
                  <li className="my-4 flex justify-between items-center">
                    <span className="font-bold">Life Span :</span>{" "}
                    {breed.life_span} Years
                  </li>
                  <li className="my-4 flex justify-between items-center">
                    <span className="font-bold">Weight :</span>{" "}
                    <div className="flex flex-col">
                      <span>{breed.weight.imperial} Pounds (lbs)</span>
                      <span>{breed.weight.metric} Kilogram (Kg)</span>
                    </div>
                  </li>
                  {breed.adaptability ? (
                    <li className="my-4 flex justify-between items-center">
                      <span className="font-bold">Adaptability :</span>{" "}
                      <Rating index={breed.adaptability} />{" "}
                    </li>
                  ) : (
                    ""
                  )}

                  {breed.affection_level ? (
                    <li className="my-4 flex justify-between items-center">
                      <span className="font-bold">Affection Level :</span>{" "}
                      <Rating index={breed.affection_level} />{" "}
                    </li>
                  ) : (
                    ""
                  )}
                  {breed.child_friendly ? (
                    <li className="my-4 flex justify-between items-center">
                      <span className="font-bold">Child Friendly :</span>{" "}
                      <Rating index={breed.child_friendly} />{" "}
                    </li>
                  ) : (
                    ""
                  )}
                  {breed.grooming ? (
                    <li className="my-4 flex justify-between items-center">
                      <span className="font-bold">Grooming :</span>{" "}
                      <Rating index={breed.grooming} />{" "}
                    </li>
                  ) : (
                    ""
                  )}
                  {breed.intelligence ? (
                    <li className="my-4 flex justify-between items-center">
                      <span className="font-bold">Intelligence :</span>{" "}
                      <Rating index={breed.intelligence} />{" "}
                    </li>
                  ) : (
                    ""
                  )}

                  {breed.health_issues ? (
                    <li className="my-4 flex justify-between items-center">
                      <span className="font-bold">Health Issues :</span>{" "}
                      <Rating index={breed.health_issues} />{" "}
                    </li>
                  ) : (
                    ""
                  )}

                  {breed.social_needs ? (
                    <li className="my-4 flex justify-between items-center">
                      <span className="font-bold">Social Needs :</span>{" "}
                      <Rating index={breed.social_needs} />{" "}
                    </li>
                  ) : (
                    ""
                  )}
                  {breed.stranger_friendly ? (
                    <li className="my-4 flex justify-between items-center">
                      <span className="font-bold">Stranger Friendly :</span>{" "}
                      <Rating index={breed.stranger_friendly} />{" "}
                    </li>
                  ) : (
                    ""
                  )}

                  <div>
                    {showmore ? (
                      <div>
                        {breed.cat_friendly ? (
                          <li className="my-4 flex justify-between items-center">
                            <span className="font-bold">Cat Friendly :</span>{" "}
                            <Rating index={breed.cat_friendly} />{" "}
                          </li>
                        ) : (
                          ""
                        )}
                        {breed.bidability ? (
                          <li className="my-4 flex justify-between items-center">
                            <span className="font-bold">Bidability :</span>{" "}
                            <Rating index={breed.bidability} />{" "}
                          </li>
                        ) : (
                          ""
                        )}
                        {breed.dog_friendly ? (
                          <li className="my-4 flex justify-between items-center">
                            <span className="font-bold">Dog Friendly :</span>{" "}
                            <Rating index={breed.dog_friendly} />{" "}
                          </li>
                        ) : (
                          ""
                        )}
                        {breed.energy_level ? (
                          <li className="my-4 flex justify-between items-center">
                            <span className="font-bold">Energy Level :</span>{" "}
                            <Rating index={breed.energy_level} />{" "}
                          </li>
                        ) : (
                          ""
                        )}
                        {breed.intelligence ? (
                          <li className="my-4 flex justify-between items-center">
                            <span className="font-bold">Intelligence :</span>{" "}
                            <Rating index={breed.intelligence} />{" "}
                          </li>
                        ) : (
                          ""
                        )}
                        {breed.shedding_level ? (
                          <li className="my-4 flex justify-between items-center">
                            <span className="font-bold">Shedding Level :</span>{" "}
                            <Rating index={breed.shedding_level} />{" "}
                          </li>
                        ) : (
                          ""
                        )}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </ul>
                {!showmore ? (
                  <button
                    className="bg-blue-500/50 rounded p-2 hover:bg-blue-500 hover:font-bold"
                    onClick={() => {
                      setShowmore(true);
                    }}
                  >
                    Show more
                  </button>
                ) : (
                  <button
                    className="bg-blue-500/50 rounded p-2 hover:bg-blue-500 hover:font-bold"
                    onClick={() => {
                      setShowmore(false);
                    }}
                  >
                    Show less
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="mx-16">
            <h1 className="text-3xl font-bold my-6">Other photos</h1>
            <div className="grid grid-cols-2 xl:grid-cols-4 ">
              {breedimgs
                ? breedimgs.map((x) => {
                    return (
                      <img
                        className="h-5/6 w-5/6 object-cover object-center rounded-2xl border-4 border-black border-solid "
                        src={`${x.url}`}
                        alt=""
                        srcset=""
                      />
                    );
                  })
                : " NO DATA"}
            </div>
          </div>
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

export default Breed;
