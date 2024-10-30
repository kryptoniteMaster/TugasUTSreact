import Footer from "./Footer";

const Page = () => {

  return (
    <div className="w-full h-[1700px] ">

    <div className="bg-black w-full h-[506px]">
      <div className="w-full w-max-[1920px] h-full bg-[url('https://images.guns.com/prod/2023/05/17/6464fa71a3d18044c04a437c4ee7000f535e1f3ac1688.png')] bg-cover bg-center flex justify-center items-center">
        <div className="shadow-lg shadow-black text-white h-[45%] w-[60%] flex flex-col text-center justify-center gap-6">
          <h1 className="text-6xl font-bold ">
            Join USCCA, Get $100 off a gun
          </h1>
          <h2 className="text-xl font-bold">
            BECOME A MEMBER AND GET A CODE FOR $100 OFF ANY GUN AT GUNS.COM
          </h2>
          <div className="">
            <button className="bg-yellow-700 w-[12%] h-11 hover:bg-yellow-900 transition ease-in-out ">
              JOIN NOW
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[124px] mt-10 bg-[url('https://images.guns.com/prod/2021/03/04/60413f278b81d2d5da2ecd9db83036083bd4c748d298c.png')] bg-slate-800 flex justify-center bg-cover bg-center ">
        <div className=" h-full w-[45%] flex justify-center items-center text-white text-2xl font-bold flex-col">
          <a href="">GIVE THE GIFT OF 2A WITH A GUNS.COM GIFT CARD</a>
          <div className="">
            <button className="bg-yellow-700 w-36 mt-5 h-11 text-lg ">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[317px] mt-2">
        <div className="ml-3 flex items-center gap-5">
          <h1 className="font-bold text-2xl">GREAT DEALS</h1>
          <div className="flex items-center justify-center gap-2">
            <div className="border-2 w-10 h-10 flex justify-center items-center">
              <i className="bx bx-left-arrow-alt"></i>
            </div>
            <div className="border-2 w-10 h-10 flex justify-center items-center">
              <i className="bx bx-right-arrow-alt"></i>
            </div>
          </div>
        </div>
        <div className="w-max-[1920px] w-full h-[258px] flex p-2 justify-between">
          <div className="w-[457px] h-[258px] bg-gray-200 flex justify-center items-center">
            <div className=" h-[80%] w-[90%] font-bold  ">
              <h1>FN</h1>
              <p>509 LS EDGE</p>
              <div className="flex justify-center bg-white border-2 border-black">
                <img
                  className=" max-w-60 "
                  src="https://images.guns.com/prod/2023/07/12/64ae25324fc7eb2f320a740f3135360394ecaad2329de.jpg?imwidth=700&impolicy=featured-product&im=AspectCrop=%2813,7%29,allowExpansion,yPosition=0.5,xPosition=0.5"
                  alt=""
                />
              </div>
              <div className="w-full flex gap-2">
                <h1>NEW </h1>
                <h1 className="text-yellow-700">$952.99</h1>
                <button className="ml-60 border-2 rounded-md mt-2 bg-gray-500  w-44 h-10">Cart</button>
              </div>
            </div>
          </div>
          <div className="w-[457px] h-[258px] bg-gray-200 flex justify-center items-center">
            <div className=" h-[80%] w-[90%] font-bold  ">
              <h1>RUGER</h1>
              <p>SECURITY 9 PRO</p>
              <div className="flex justify-center bg-white border-2 border-black">
                <img
                  className=" max-w-60 "
                  src="https://images.guns.com/prod/2020/02/07/5e3dd94975ff350ea0df7c335166091e35c950eeef3f0.jpg?imwidth=700&impolicy=featured-product&im=AspectCrop=%2813,7%29,allowExpansion,yPosition=0.5,xPosition=0.5"
                  alt=""
                />
              </div>
              <div className="w-full flex gap-2">
                <h1>NEW </h1>
                <h1 className="text-yellow-700">$304.99</h1>
                <button className="ml-60 border-2 rounded-md mt-2 bg-gray-500  w-44 h-10">Cart</button>
              </div>
            </div>
          </div>
          <div className="w-[457px] h-[258px] bg-gray-200 flex justify-center items-center">
            <div className=" h-[80%] w-[90%] font-bold  ">
              <h1>SMITH & WESSON</h1>
              <p>Volunteer XV</p>
              <div className="flex justify-center bg-white border-2 border-black">
                <img
                  className=" max-w-60 "
                  src="https://images.guns.com/prod/2022/01/20/61e9852ea07ccbdaa4a21be0c97ed3bdf7922f7367fc1.jpg?imwidth=700&impolicy=featured-product&im=AspectCrop=%2813,7%29,allowExpansion,yPosition=0.5,xPosition=0.5"
                  alt=""
                />
              </div>
              <div className="w-full flex gap-2">
                <h1>NEW </h1>
                <h1 className="text-yellow-700">$599.99</h1>
                <button className="ml-60 border-2 rounded-md mt-2 bg-gray-500  w-44 h-10">Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://images.guns.com/prod/2023/05/16/6463a72a8476323d7a91fd7c211f25636339e1f65a97e.jpg    "
              alt="Affordable Handguns"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-4">
              <h2 className="text-white font-bold text-xl">
                Affordable Handguns Under $300
              </h2>
              <button className="mt-2 px-4 py-2 bg-orange-500 text-white rounded">
                Our Picks
              </button>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://images.guns.com/prod/2024/08/28/66cf76647e9c24dc25b49ee937b7d6d7e87079a22cd93.png"
              alt="Never Settle Episode"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-4">
              <h2 className="text-white font-bold text-xl">
                #NEVERSETTLE EPISODE 2 - MISSION: FINDING PURPOSE
              </h2>
              <button className="mt-2 px-4 py-2 bg-orange-500 text-white rounded">
                Watch Now
              </button>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://images.guns.com/prod/2021/12/03/61aa7be228e427660804205c29fba3678498999202820.jpg"
              alt="Best AR-15 Rifles"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-4">
              <h2 className="text-white font-bold text-xl">
                Best AR-15 Rifles
              </h2>
              <button className="mt-2 px-4 py-2 bg-orange-500 text-white rounded">
                Our Picks
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-[461px] flex justify-center ">
        <div className=" r w-[100%] h-[80%] bg-[url('https://images.guns.com/prod/2024/08/01/66abe9dc0e6bef898464df65a44a0a5a105bd8a35e8a8.png')] bg-cover bg-center"></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Page;
