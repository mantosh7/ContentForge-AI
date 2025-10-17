import { authState } from "@/state/authState";
import { Edit, Sparkle } from "lucide-react";
import { useState } from "react";
import { IoSparklesSharp } from "react-icons/io5";
import { useRecoilValue } from "recoil";

const articleLength = [
    { length: 800, text: "Short (500-800 words)" },
    { length: 1200, text: "Medium (800-1200 words)" },
    { length: 1600, text: "Long (1200+ words)" },
]

const WriteArticle = () => {
    const [selectedLength, setselectedLength] = useState(articleLength[0]);
    const [input, setInput] = useState("");
    const { userId } = useRecoilValue(authState );

    const submitHandler = async (e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:3000/api/ai/generate-article", {
            prompt: input,
        })
    }

    return (
        <div className="mt-20 border-2 flex items-start flex-wrap gap-4 overflow-y-scroll flex-1 bg-[#393838ff]">
            {/* left col */}
            <form onSubmit={submitHandler} className=" mt-10 ml-10 w-full max-w-lg p-4 text-black rounded-lg bg-gradient-to-r from-[#1b2430] via-[#222831] to-[#816797] border border-gray-500 max-h-[600px] min-h-96">
                <div className="flex text-white items-center gap-3">
                    <IoSparklesSharp className="h-12 w-12 p-2 text-yellow-300" />
                    <h1 className="font-semibold text-xl">Article Configuration</h1>
                </div>

                <p className="font-semibold text-white mt-6">Article Topic</p>
                <input type="text" onChange={(e) => setInput(e.target.value)} value={input} placeholder="Type your article topic here…" className="text-white w-full py-2 px-3 mt-2 text-sm outline-none rounded-md border border-gray-100" required />

                <p className="font-semibold text-white mt-6">Article Length</p>
                <div className="flex flex-wrap gap-4 mt-2 text-white text-sm w-full max-wd-lg">
                    {articleLength.map((item, index) => {
                        return (
                            <span onClick={() => setselectedLength(item)} key={index} className={`border rounded-full font-semibold py-1 px-4 cursor-pointer ${selectedLength.text === item.text ? 'bg-gradient-to-r from-[#29323c]  to-[#485563] text-white ' : 'text-white bg-transparent border-gray-100'}`}>{item.text}</span>
                        )
                    })}
                </div>

                <button className="border-1 flex items-center justify-center gap-4 mt-6 w-full text-white py-2 px-3 bg-gradient-to-r from-[#29323c]  to-[#485563] rounded-lg cursor-pointer font-medium border border-gray-300">
                    <Edit className="w-5" />
                    Generate article
                </button>
            </form>

            {/* right col */}
            <div className="mt-10 ml-10 w-full max-w-lg p-4 text-black rounded-lg bg-white border border-gray-400 max-h-[600px] min-h-145">
                <div className="flex items-center gap-3">
                    <Edit className="h-10 w-10 p-2 text-blue-400" />
                    <h1 className="font-semibold text-xl text-gray-700">Generated Article</h1>
                </div>

                <div className="flex-1 flex justify-center items-center">
                    <div className="mt-30 text-md flex flex-col items-center gap-5 text-gray-400">
                        <Edit className="h-12 w-12 p-2 text-gray-400" />
                        <p className="font-semibold">Enter a topic and click “Generate article ” to get started</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WriteArticle;