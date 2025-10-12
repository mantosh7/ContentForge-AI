import { Edit, Hash, Image, Sparkle } from "lucide-react";
import { useState } from "react";
import { IoSparklesSharp } from "react-icons/io5";

const imageStyles = ["Realistic", "Ghibili style", "Anime style", "Cartoon style", "Fantasy style", "Realistic style", "3D style", "Portrait style"];


const GenerateImages = () => {
    const [selectedImageStyle, setselectedImageStyle] = useState(imageStyles[0]);
    const [input, setInput] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
    }

    return (
        <div className="mt-20 border-2 flex items-start flex-wrap gap-4 overflow-y-scroll flex-1 bg-[#393838ff]">
            {/* left col */}
            <form onSubmit={submitHandler} className="mt-10 ml-10 w-full max-w-lg p-4 text-white rounded-lg border border-gray-500 max-h-[600px] min-h-96 bg-gradient-to-l from-[#6A9113]  to-[#141517]"  >

                <div className="flex text-white items-center gap-3">
                    <IoSparklesSharp className="h-12 w-12 p-2 text-yellow-300" />
                    <h1 className="font-semibold text-xl">AI Image Generator</h1>
                </div>

                <p className="font-semibold text-white mt-6">Describe Your Image</p>
                <textarea type="text" onChange={(e) => setInput(e.target.value)} value={input} placeholder="Describe the image you want to generate..." className="text-white resize-none h-24 w-full py-2 px-3 mt-2 text-sm outline-none rounded-md border border-gray-100" required />

                <p className="font-semibold text-white mt-6">Category</p>
                <div className="flex flex-wrap gap-5 mt-2 text-white text-sm w-full max-wd-lg">
                    {imageStyles.map((item, index) => {
                        return (
                            <span onClick={() => setselectedImageStyle(item)} key={index} className={`border rounded-full font-semibold py-1 px-4 cursor-pointer ${selectedImageStyle === item ? 'bg-gradient-to-r from-[#29323c]  to-[#485563] text-white border' : 'text-white bg-transparent border-gray-100'}`}>{item}</span>
                        )
                    })}
                </div>

                <button className="border-1 flex items-center justify-center gap-3 mt-6 w-full text-white py-2 px-3 bg-gradient-to-r from-[#29323c]  to-[#485563] rounded-lg cursor-pointer font-medium border border-gray-300">
                    <Image className="w-5" />
                    Generate image
                </button>
            </form>

            {/* right col */}
            <div className="mt-10 ml-10 w-full max-w-lg p-4 text-black rounded-lg bg-white border border-gray-400 max-h-[600px] min-h-145">
                <div className="flex items-center gap-3">
                    <Image className="h-10 w-10 p-2 text-[#7C4585]" />
                    <h1 className="font-semibold text-xl text-gray-700">Generated Article</h1>
                </div>

                <div className="flex-1 flex justify-center items-center">
                    <div className="mt-30 text-md flex flex-col items-center gap-5 text-gray-400">
                        <Image className="h-14 w-14 p-2 text-gray-400" />
                        <p className="font-medium">Enter a topic and click “Generate image ” to get started</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default GenerateImages;