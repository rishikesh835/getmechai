import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center h-[44vh] text-white">
        <div className="font-bold text-5xl flex  justify-center items-center">
          Buy me a Chai{" "}
          <span>
            <img src="/tea.gif" width={88} alt="" />
          </span>
        </div>
        <p>
          A crowdfunding platform for creators. Get funded by your fand and
          followers.
        </p>
        <div>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Start Now!
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Read more
          </button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white container mx-auto py-16">
        <h1 className="text-2xl font-bold text-center my-10">
          Your fans can buy you a chai
        </h1>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2 text-black"
              width={88}
              src="/man.gif"
              alt=""
            />
            <p className="font-bold">Fund Yourself</p>
            <p className="w-1/2 text-center">
              Your fans are available for you to help you
            </p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2 text-black"
              width={88}
              src="/coin.gif"
              alt=""
            />
            <p className="font-bold">Fund Yourself</p>
            <p className="w-1/2 text-center">
              Your fans are available for you to help you
            </p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2 text-black"
              width={88}
              src="/group.gif"
              alt=""
            />
            <p className="font-bold">Your fans want to help</p>
            <p className="w-1/2 text-center">
              Your fans are available for you to help you
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-center my-10">
          Know more about us
        </h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/gqbTmZDzPXU?si=IVlfEpAQ7Ni9-0my"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
