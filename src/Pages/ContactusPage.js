import React from "react";
import contactImg from "../assets/contactus-main.jpg";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const ContactusPage = () => {
  return (
    <div className="h-fit flex flex-col w-full pb-10 font-robotoCondensed ">
      <img
        src={contactImg}
        alt="description"
        className="w-full h-[70vh] object-cover top-0 left-0 z-0"
      />

      <div>
        {/* for larger screen */}
        <div className="hidden md:flex w-[80%] h-[120vh] flex-col justify-center mx-auto py-10">
          <h2 className="text-[52px] font-semibold text-start w-full pl-3 mb-6">
            Contact us
          </h2>
          <p className="text-[24px] font-normal text-start w-[60%] mb-12 leading-relaxed pl-3">
            Need more information? Drop us a line; we're happy to help.
          </p>

          <div className="flex h-[90vh] w-full">
            {/* Form Section */}
            <div className="w-[50%] h-full bg-light px-10 py-20 font-robotoCondensed">
              <form className="flex flex-col space-y-2">
                <label className="text-[17px] font-medium">NAME</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="border border-gray-300 rounded-lg p-4 "
                  required
                />

                <label className="text-[17px] font-medium pt-4">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="border border-gray-300 rounded-lg p-4"
                  required
                />

                <label className="text-[17px] font-medium pt-4">MESSAGE</label>
                <textarea
                  placeholder="Write your message"
                  className="border border-gray-300 rounded-lg p-4"
                  required
                />

                <label className="pb-8"></label>

                <button
                  type="submit"
                  className="bg-black text-white w-[40%] py-4"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Right Content Section */}
            <div className="w-[50%] pl-44 h-full flex flex-col p-6">
              <div>
                <div className="self-start font-normal relative ">
                  <h1 className="text-[18px] tracking-widest uppercase">
                    Address
                  </h1>
                  <div className="absolute bottom-[-3px] left-0 w-[12%] border-t-[2.5px] border-dark"></div>
                </div>
                <p className="text-[18px] mt-6">
                  No - 70A 3rd main road 8th cross vivekananda nagar <br />
                  paillkarani Chennai-600100
                </p>
              </div>

              <div>
                <div className="self-start font-normal relative mt-12 ">
                  <h1 className="text-[18px] tracking-widest uppercase">
                    Contact us
                  </h1>
                  <div className="absolute bottom-[-3px] left-0 w-[12%] border-t-[2.5px] border-dark"></div>
                </div>
                <div className="flex text-[18px] flex-col mt-6">
                  <p>9176870710</p>
                  <p>rubikainterior@gmail.com</p>
                </div>
              </div>

              <div>
                <div className="self-start font-normal relative mt-12 ">
                  <h1 className="text-[18px] tracking-widest uppercase">
                    OPENING HOURS
                  </h1>
                  <div className="absolute bottom-[-3px] left-0 w-[12%] border-t-[2.5px] border-dark"></div>
                </div>
                <div className="flex text-[18px] flex-col mt-6">
                  <p>Monday – Friday: 10 a.m – 6:30 p.m</p>
                  <p>Saturday: 10 a.m – 4 p.m</p>
                </div>
              </div>

              <div>
                <div className="self-start font-normal relative mt-12 ">
                  <h1 className="text-[18px] tracking-widest uppercase">
                    FOLLOW US
                  </h1>
                  <div className="absolute bottom-[-3px] left-0 w-[12%] border-t-[2.5px] border-dark"></div>
                </div>
                {/* Icons Section */}
                <div className="flex space-x-6 mt-6">
                  <a
                    href="https://www.instagram.com/rubika_interior/?igsh=MXV5bDV0ZHRnOTVpMA%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-[26px] hover:text-gray-300" />
                  </a>
                  <a
                    href="https://www.facebook.com/people/Moorthi-Moorthi/pfbid02XEv9zm4qstDk3mni2d2KiFNhCfro2d46ShNBFZGFNJtYmkiJMkWtGeuvf1Sn9gM5l/?rdid=gIr81f35yhn2dacI&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FMxYQBf7Z1mfJnERn%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF className="text-[26px] hover:text-gray-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* for smaller screen */}
        <div className="flex flex-col mx-auto mt-10 w-[92%] h-fit">
          <h2 className="text-[45px] md:text-[52px] font-semibold text-start w-full ">
            Contact us
          </h2>

          {/* details content */}
          <div className="pl-0 h-full flex flex-col p-6">
            <div>
              <div className="self-start font-normal relative ">
                <h1 className="text-[18px] tracking-widest uppercase">
                  Address
                </h1>
                <div className="absolute bottom-[-3px] left-0 w-[12%] border-t-[2.5px] border-dark"></div>
              </div>
              <p className="text-[18px] mt-6">
                No - 70A 3rd main road 8th cross vivekananda nagar <br />
                paillkarani Chennai-600100
              </p>
            </div>

            <div>
              <div className="self-start font-normal relative mt-12 ">
                <h1 className="text-[18px] tracking-widest uppercase">
                  Contact us
                </h1>
                <div className="absolute bottom-[-3px] left-0 w-[12%] border-t-[2.5px] border-dark"></div>
              </div>
              <div className="flex text-[18px] flex-col mt-6">
                <p>9176870710</p>
                <p>rubikainterior@gmail.com</p>
              </div>
            </div>

            <div>
              <div className="self-start font-normal relative mt-12 ">
                <h1 className="text-[18px] tracking-widest uppercase">
                  OPENING HOURS
                </h1>
                <div className="absolute bottom-[-3px] left-0 w-[12%] border-t-[2.5px] border-dark"></div>
              </div>
              <div className="flex text-[18px] flex-col mt-6">
                <p>Monday – Friday: 10 a.m – 6:30 p.m</p>
                <p>Saturday: 10 a.m – 4 p.m</p>
              </div>
            </div>

            <div>
              <div className="self-start font-normal relative mt-12 ">
                <h1 className="text-[18px] tracking-widest uppercase">
                  FOLLOW US
                </h1>
                <div className="absolute bottom-[-3px] left-0 w-[12%] border-t-[2.5px] border-dark"></div>
              </div>
              {/* Icons Section */}
              <div className="flex space-x-6 mt-6">
                <a
                  href="https://www.instagram.com/rubika_interior/?igsh=MXV5bDV0ZHRnOTVpMA%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-[26px] hover:text-gray-300" />
                </a>
                <a
                  href="https://www.facebook.com/people/Moorthi-Moorthi/pfbid02XEv9zm4qstDk3mni2d2KiFNhCfro2d46ShNBFZGFNJtYmkiJMkWtGeuvf1Sn9gM5l/?rdid=gIr81f35yhn2dacI&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FMxYQBf7Z1mfJnERn%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="text-[26px] hover:text-gray-300" />
                </a>
              </div>
            </div>
          </div>

          <p className="text-[20px] font-normal text-start mt-4 mb-12 leading-relaxed">
            Need more information? Drop us a line; we're happy to help.
          </p>

            <div className="w-[95%] bg-light mx-auto h-full px-5 py-10 font-robotoCondensed">
              <form className="flex flex-col space-y-2">
                <label className="text-[17px] font-medium">NAME</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="border border-gray-300 rounded-lg p-4 "
                  required
                />

                <label className="text-[17px] font-medium pt-4">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="border border-gray-300 rounded-lg p-4"
                  required
                />

                <label className="text-[17px] font-medium pt-4">MESSAGE</label>
                <textarea
                  placeholder="Write your message"
                  className="border border-gray-300 rounded-lg p-4"
                  required
                />

                <label className="pb-8"></label>

                <button
                  type="submit"
                  className="bg-black text-white py-4"
                >
                  Submit
                </button>
              </form>
          </div>


        </div>
      </div>
    </div>
  );
};

export default ContactusPage;
