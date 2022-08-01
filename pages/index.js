import React from "react";
import Search from "../components/Search";

export default function Home() {
  const [breeds, setBreeds] = React.useState([]);
  const getBreeds = async () => {
    var call = await fetch("https://api.thecatapi.com/v1/breeds");
    var response = await call.json();
    setBreeds(response);
    console.log(response);
  };

  React.useEffect(() => {
    getBreeds();
  }, []);
  return (
    <div>
      <header className="flex xl: bg-black text-white">
        <div className="w-full flex  flex-col justify-center items-center">
          <h1 className="my-2 mx-1 text-4xl xl:text-6xl">Wiki Meow</h1>
          <h2 className="my-2 mx-1 text-3xl xl:text-5xl mb-6">The cat wiki</h2>
          <Search className="my-2 mx-1 " index={breeds} />
        </div>

        <div className="xl:w-5/6">
          <img src="https://images.pexels.com/photos/35888/amazing-beautiful-breathtaking-clouds.jpg?auto=compress" />
        </div>
      </header>
      <main className="relative min-h-screen p-4  xl:p-16 bg-red-100 ">
        <div className="p-4  ">
          <h6 className="mb-8">Most searched breeds</h6>
          <div className="flex justify-between items-end">
            <h1 className="text-2xl w-full font-bold xl:text-5xl xl:w-2/5">
              66+ Breeds For You to discover now !
            </h1>
            <a href="/breeds" className="hidden xl:block w-1/6">SEE MORE </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 xl:grid-cols-4 xl:gap-4 h-full ">
          {breeds
            ? breeds.slice(0, 4).map((x) => {
                return (
                  <div className="relative">
                    <a href={`/${x.id}`} className="grayscale hover:grayscale-0 h-full  ">
                      <img
                        className="object-cover object-center h-full w-full"
                        src={x.image.url}
                      />
                    </a>
                      <h2 className="absolute bottom-0 text-center backdrop-blur-sm bg-purple-500/50 w-full font-bold rounded-t-xl">
                        {x.name}
                      </h2>
                  </div>
                );
              })
            : ""}
        </div>
      </main>
      <div className="h-screen flex flex-col xl:flex-row flex-between justify-center items-baseline">
        <div className=" flex flex-col items-center w-full">
          <h1 className="text-3xl w-5/6 xl:text-5xl font-bold xl:w-4/6">
            Why should you have a cat ?
          </h1>

          <p className="w-5/6 xl:w-4/6 mt-12">
            Having a cat around you can actually trigger the release of calming
            chemicals in your body which lower your stress and anxiety leves
          </p>

          <a className="my-8 xl:mt-28">Read more</a>
        </div>
        <section class="w-full overflow-hidden text-gray-700">
          <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
            <div class="flex flex-wrap -m-1 md:-m-2">
              <div class="flex flex-wrap w-1/2">
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-lg"
                    src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress"
                  />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-lg"
                    src="https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg?auto=compress"
                  />
                </div>
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-lg"
                    src="https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress"
                  />
                </div>
              </div>
              <div class="flex flex-wrap w-1/2">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-lg"
                    src="https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress"
                  />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-lg"
                    src="https://images.pexels.com/photos/923360/pexels-photo-923360.jpeg?auto=compress"
                  />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-lg"
                    src="https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?auto=compress"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className=""></footer>
    </div>
  );
}
