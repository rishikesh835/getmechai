import React from "react";

const username = ({ params }) => {
  return (
    <>
      <div className="cover w-full bg-red-50 relative ">
        <img className="object-cover w-full h-[350px]" src="cover.jpg" alt="" />
      </div>
      <div className="absolute top-[45%] right-[45%] ">
        <img
          className="border border-white rounded-full"
          width={100}
          height={100}
          src="/java.png"
          alt=""
        />
      </div>
      <div className="info text-gray-600 flex flex-col justify-center  items-center my-20">
        <div className="font-bold text-lg text-white">
          @User name appears here
        </div>
        <div>Creating fan art for vvt</div>
        <div>9999 member,54 posts, 400 plus releases</div>
        <div className="payment flex gap-3 w-[80%]">
          <div className="supporters w-1/2 bg-slate-500 rounded-lg text-white p-10">
            {/* show list of all supporters as leaderboard */}
            <h2 className="font-bold text-lg my-5">Supporters</h2>
            <ul className="mx-5">
              <li className="my-4  flex gap-2 items-center">
                <img width={33} src="avatar.gif" alt="" /> shubham donated{" "}
                <span className="font-bold"> $30</span>
                with a message "I support you bro lot's of love"
              </li>
              <li className="my-4  flex gap-2 items-center">
                <img width={33} src="avatar.gif" alt="" /> shubham donated{" "}
                <span className="font-bold"> $30</span>
                with a message "I support you bro lot's of love"
              </li>
              <li className="my-4  flex gap-2 items-center">
                <img width={33} src="avatar.gif" alt="" /> shubham donated{" "}
                <span className="font-bold"> $30</span>
                with a message "I support you bro lot's of love"
              </li>
              <li className="my-4  flex gap-2 items-center">
                <img width={33} src="avatar.gif" alt="" /> shubham donated{" "}
                <span className="font-bold"> $30</span>
                with a message "I support you bro lot's of love"
              </li>
              <li className="my-4  flex gap-2 items-center">
                <img width={33} src="avatar.gif" alt="" /> shubham donated{" "}
                <span className="font-bold"> $30</span>
                with a message "I support you bro lot's of love"
              </li>
              <li className="my-4  flex gap-2 items-center">
                <img width={33} src="avatar.gif" alt="" /> shubham donated{" "}
                <span className="font-bold"> $30</span>
                with a message "I support you bro lot's of love"
              </li>
            </ul>
          </div>
          <div className="makePayment w-1/2 bg-slate-500 rounded-lg text-white p-10">
            <h2 className="text-2xl font-bold my-5">Make a payment</h2>
            <div className="flex gap-2 flex-col">
              {/* input for first name and last name  */}
              <input
                type="text"
                className="fname w-full p-3 rounded-lg bg-slate-800"
                placeholder="enter your first name"
              />
              <input
                type="text"
                className="lname w-full p-3 rounded-lg bg-slate-800"
                placeholder="enter your last name"
              />

              <input
                type=" text"
                className="w-full p-3 rounded-lg bg-slate-500 border border-slate-900"
                placeholder="Enter amount"
              />
              <button
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Pay
              </button>
            </div>
            <div className="flex gap-2 mt-5">
              <button className="bg-slate-800 p-3 rounded-lg">Pay $10</button>
              <button className="bg-slate-800 p-3 rounded-lg">Pay $20</button>
              <button className="bg-slate-800 p-3 rounded-lg">Pay $30</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default username;
