export const ProfileUSer = () => {
  return (
    <>
      <div className="font-sans text-[#33333] ">
        <div className="p-6 sm:my-6 sm:mx-4 flex-wrap flex lg:flex-row w-auto rounded-md border border-[#ededed]  bg-[#fff] h-auto pb-8 gap-5">
          <div className="sm:text-left text-center flex-1 sm:border-r-2 sm:border-b-0 border-b-2 border-dashed flex flex-col  sm:flex-row  gap-8">
            <div class="sm:m-auto m-0 flex justify-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="rounded-full w-40"
                alt="Avatar"
              />
            </div>
            <div>
              <div className="font-hairline py-1 text-xl bold">
                Lasender Maverel
              </div>
              <div className="font-hairline pb-1 text-md italic">
                LoginName@lava
              </div>
              <div className="font-hairline py-1 text-md bold">
                Client Code: DX9128312GGY
              </div>
              <div className="font-hairline py-2 text-md italic text-gray-600">
                Join in: 22-3-323
              </div>
              <div>
                <button className="bg-blue-300 h-10 rounded-sm w-auto px-6 m-6 bold">
                  Send Message
                </button>
                <button className="bg-blue-300 h-10 rounded-sm w-auto px-6 m-6 bold">
                  Ban
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1  ">
            <div className="flex gap-8 py-2">
              <div className="bold text-xl min-w-[100px]">Phone:</div>
              <div>9876543210</div>
            </div>
            <div className="flex gap-8 py-2">
              <div className="bold text-xl min-w-[100px]">adress:</div>
              <div>1861 Bayonne Ave, Manchester Township, NJ, 08759</div>
            </div>
            <div className="flex gap-8 py-2">
              <div className="bold text-xl min-w-[100px]">gender:</div>
              <div>Male</div>
            </div>
            <div className="flex gap-8 py-2">
              <div className="bold text-xl min-w-[100px]">Gmail:</div>
              <div>johndoe@example.com</div>
            </div>
            <div className="flex gap-8 py-2">
              <div className="bold text-xl min-w-[100px]">Bird day:</div>
              <div> 3 August</div>
            </div>
          </div>
        </div>

        <div className=" sm:my-6 sm:mx-4 flex-wrap flex lg:flex-row w-auto rounded-md  bg-[#f7f7f7] h-auto pb-8 gap-4">
          <div className="bg-white sm:text-left text-center flex-1 rounded-md border border-[#ededed] p-6">
            <h1 class="bold text-2xl text-center w-full mb-4">
              Shipping Information
            </h1>
            <div className="flex gap-6 pb-4">
              <div class="min-w-[65px] bold">Name: </div>
              <div>Lasender Maverel supper cute</div>
            </div>

            <div className="flex gap-6 pb-4">
              <div class="min-w-[65px] bold">Address:</div>
              <div>1861 Bayonne Ave, Manchester Township, NJ, 08759</div>
            </div>

            <div className="flex gap-6 pb-4">
              <div class="min-w-[65px] bold">Phone:</div>
              <div>9876543210</div>
            </div>

            <div className="flex gap-6 pb-4">
              <div class="min-w-[65px] bold">Shipping Method:</div>
              <div>COD</div>
            </div>
          </div>
          <div className="bg-white sm:text-left text-center flex-1 rounded-md border border-[#ededed] p-6">
            <h1 class="bold text-2xl text-center w-full mb-4">
              Bank Information
            </h1>
            <div className="flex gap-6 pb-4">
              <div class="min-w-[65px] bold">Bank name: </div>
              <div>ICICI Bank</div>
            </div>

            <div className="flex gap-6 pb-4">
              <div class="min-w-[65px] bold">Bank account No.:</div>
              <div>159843014641</div>
            </div>

            <div className="flex gap-6 pb-4">
              <div class="min-w-[65px] bold">IFSC Code:</div>
              <div>ICI24504</div>
            </div>

            <div className="flex gap-6 pb-4">
              <div class="min-w-[65px] bold">PAN No:</div>
              <div>TC000Y56</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
