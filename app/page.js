import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className=" flex justify-center gap-4 flex-col items-center text-white h-[44vh]">
      <div className=" font-bold text-5xl flex gap-0 items-center justify-center">Buy me a Chai
      <span><Image className=" rounded-full px-2 py-2" src={'/giphy.gif'} alt="" width={60} height={60}/></span>
      </div> 
      <p>A crowdfunding platform for creators. Get funded by your fans and followers. start now</p>
      <div>
      <button type="button" className="text-white bg-gradient-to-br from-purple-600
       to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300
        dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Starts Here</button>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600
       to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300
        dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Read More</button>
      </div>
    </div>
      <div className=" bg-white h-1 opacity-10"></div>


      <div className=" text-white container mx-auto py-12">
        <h1 className=" font-bold text-2xl text-center my-6" >Your Fans can buy you a chai</h1>
        <div className=" flex justify-around gap-5 ">
        <div className="item space-y-2 flex flex-col items-center justify-center">
            <Image className=" bg-slate-400 rounded-full p-2" alt="" src={"/person-at-desk-icon-4.jpg"} width={70} height={70}/>
            <p className=" font-bold">Fans wants to help</p>
            <p className="  text-center"> yours fans are available for your help</p>
          </div>
          <div className="item space-y-2 flex flex-col items-center justify-center">
            <Image className="  rounded-full p-2" src={"/tenor.gif"} alt="" width={80} height={80}/>
            <p className=" font-bold">Fans wants to help</p>
            <p className="  text-center"> yours fans are available for your help</p>
          </div>
          <div className="item space-y-2 flex flex-col items-center justify-center">
            <Image className=" bg-slate-400 rounded-full p-2" alt="" src={"/person-at-desk-icon-4.jpg"} width={70} height={70}/>
            <p className=" font-bold">Fans wants to help</p>
            <p className=" text-center"> yours fans are available for your help</p>
          </div>
        </div>
      </div>

      <div className=" bg-white h-1 opacity-10"></div>

      <div className=" text-white container mx-auto py-12">
        <h1 className=" font-bold text-2xl text-center my-6" >Learn more about us</h1>
        <div className=" flex justify-around gap-5 ">
        <div className="item space-y-2 flex flex-col items-center justify-center">
            <Image className=" bg-slate-400 rounded-full p-2" alt="" src={"/person-at-desk-icon-4.jpg"} width={70} height={70}/>
            <p className=" font-bold">Fans wants to help</p>
            <p className="  text-center"> yours fans are available for your help</p>
          </div>
          <div className="item space-y-2 flex flex-col items-center justify-center">
            <Image className="  rounded-full p-2" src={"/tenor.gif"} alt="" width={80} height={80}/>
            <p className=" font-bold">Fans wants to help</p>
            <p className="  text-center"> yours fans are available for your help</p>
          </div>
          <div className="item space-y-2 flex flex-col items-center justify-center">
            <Image className=" bg-slate-400 rounded-full p-2" src={"/person-at-desk-icon-4.jpg"} alt="" width={70} height={70}/>
            <p className=" font-bold">Fans wants to help</p>
            <p className=" text-center"> yours fans are available for your help</p>
          </div>
        </div>
      </div>
    </>
  );
}
