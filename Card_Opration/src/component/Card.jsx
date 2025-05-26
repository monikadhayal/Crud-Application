
export default function(){

    return (
      <div>
        <div className="flex items-center flex-col m-5">
          <h1 className="font-bold text-3xl"> React Crud Operations </h1>
          <div className="bg-black flex-col justify-between text-white w-[900px] m-5 font-bold pl-10 pr-10">
            <div className="flex justify-between text-white m-2">
              <p> Title </p>
              <p> Information </p>
              <p> Price </p>
              <p> Company </p>
              <p> Actions </p>
            </div>
            <div className="flex justify-between text-white  ">
              <input className="border border-red-500 h-7 w-40" />
              <input className="border border-red-500 h-7 w-40" />
              <input className="border border-red-500 h-7 w-40"  />
              <input className="border border-red-500 h-7 w-40" />
              <button className="bg-blue-500">Add New Row</button>
            </div>
          </div>
        </div>
      </div>
    );
}