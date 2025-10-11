import { Edit, Sparkle } from "lucide-react";
import { useState } from "react";
import { IoSparklesSharp } from "react-icons/io5";

const articleLength = [
    {length:800, text:"Short (500-800 words)"},
    {length:1200, text:"Medium (800-1200 words)"},
    {length:1600, text:"Long (1200+ words)"},
]

const WriteArticle = () =>{
    const [selectedLength, setselectedLength] = useState(articleLength[0]) ;
    const [input, setInput] = useState("") ;

    const submitHandler = async (e) =>{
        e.preventDefault() ;
    }

    return (
        <div className="mt-20 border-2 flex items-start flex-wrap gap-4 overflow-y-scroll flex-1 bg-[#2a2929ff]">
            {/* left col */}
            <form onSubmit={submitHandler} className=" mt-10 ml-10 w-full max-w-lg p-4 text-black rounded-lg bg-gradient-to-r from-[#667eea]  to-[#764ba2] border border-gray-400">
                <div className="flex text-white items-center gap-3">
                    <IoSparklesSharp className="h-12 w-12 p-2 text-yellow-300"/>
                    <h1 className="font-semibold text-xl">Article Configuration</h1>
                </div>

                <p className="font-semibold text-white mt-6">Article Topic</p>
                <input type="text" onChange={(e)=>setInput(e.target.value)} value={input} placeholder="Type your article topic here…" className="text-white w-full py-2 px-3 mt-2 text-sm outline-none rounded-md border border-gray-100" required/>

                <p className="font-semibold text-white mt-6">Article Length</p>
                <div className="flex flex-wrap gap-4 mt-2 text-white text-sm w-full max-wd-lg">
                    {articleLength.map((item, index)=>{
                        return (
                            <span onClick={()=>setselectedLength(item)} key={index} className={`border rounded-full font-semibold py-1 px-4 cursor-pointer ${selectedLength.text === item.text ? 'bg-gradient-to-r from-[#29323c]  to-[#485563] text-white border-none' : 'text-white bg-transparent border-gray-100'}`}>{item.text}</span>
                        )
                    })}
                </div>

                <button className="flex items-center justify-center gap-4 mt-6 w-full text-white py-2 px-3 bg-gradient-to-r from-[#29323c]  to-[#485563] rounded-lg cursor-pointer font-semibold">
                    <Edit className="w-5" /> 
                    Generate article
                </button>
            </form>
        </div>
    )
}

export default WriteArticle ;