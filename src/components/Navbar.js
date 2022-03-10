import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (

        <div className='shadow-md w-full  top-0 left-0 absolute'>
            <div className='md:flex items-center justify-between bg-slate-300   py-4 md:px-10 px-7 '>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      '>
                    <p className='text-3xl mr-1 pt-2 '>
                        Web-Scraping
                    </p >
</div>

                    <div className="md:justify  ">
                        <ul className="flex gap-5 text-white ">
                            <li className=" rounded-lg px-4 py-2  bg-slate-600 hover:bg-slate-800">
                                <Link to="/"> Home</Link>
                            </li>

                            <li className=" rounded-lg px-4 py-2  bg-slate-600 hover:bg-slate-800">
                                <Link to="Electronics">  Electronics </Link>
                            </li>


                        </ul>
                    </div>


                </div>
            </div>

        

    );
};

export default Navbar;




