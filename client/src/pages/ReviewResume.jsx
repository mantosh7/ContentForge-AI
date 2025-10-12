import { Eraser, File } from "lucide-react";
import { useState } from "react";
import { IoSparklesSharp } from "react-icons/io5";
import { FaRegFilePdf } from "react-icons/fa";


const ReviewResume = () =>{
    const [input, setInput] = useState("");
    
    const submitHandler = async (e) => {
        e.preventDefault();
    }

    return (
        <div className="mt-20 border-2 flex items-start flex-wrap gap-4 overflow-y-scroll flex-1 bg-[#393838ff]">
            {/* left col */}
            <form onSubmit={submitHandler} className=" mt-10 ml-10 w-full max-w-lg p-4 text-black rounded-lg bg-gradient-to-br from-[#331d2c] via-[#3f2e3e] to-[#a78295] border border-gray-500 max-h-[600px]">
                <div className="flex text-white items-center gap-3">
                    <IoSparklesSharp className="h-12 w-12 p-2 text-yellow-300" />
                    <h1 className="font-semibold text-xl">Resume Review</h1>
                </div>

                <p className="font-semibold text-white mt-6">Upload Resume</p>
                <input type="file" accept="application/pdf" onChange={(e) => setInput(e.target.files[0])} placeholder="Type your blog title here…" className="text-white w-full py-2 px-3 mt-2 text-sm outline-none rounded-md border border-gray-100" required />
                <p className="text-white text-xs mt-2">Supports PDF resume only.</p>

                <button className="border-1 flex items-center justify-center gap-3 mt-6 w-full text-white py-2 px-3 bg-gradient-to-r from-[#29323c]  to-[#485563] rounded-lg cursor-pointer font-medium border border-gray-300">
                    <FaRegFilePdf className="w-5" />
                    Review resume
                </button>
            </form>

            {/* right col */}
            <div className="mt-10 ml-10 w-full max-w-lg p-4 text-black rounded-lg bg-white border border-gray-400 max-h-[600px] min-h-96">
                <div className="flex items-center gap-3">
                    <FaRegFilePdf className="h-10 w-10 p-2 text-[#7C4585]" />
                    <h1 className="font-semibold text-xl text-gray-700">Processed Image</h1>
                </div>

                <div className="flex-1 flex justify-center items-center">
                    <div className="mt-20 text-md flex flex-col items-center gap-5 text-gray-400">
                        <FaRegFilePdf className="h-14 w-14 p-2 text-gray-400" />
                        <p className="font-medium">Upload a resume and click "Review Resume" to get started</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ReviewResume ;