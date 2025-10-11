import { dummyCreationData } from "@/assets/assets";
import CreationItem from "@/components/CreationItem";
import { Sparkle } from "lucide-react";
import { useEffect, useState } from "react";
import { IoSparklesSharp } from "react-icons/io5";


const Dashboard = () => {
    const [creations, setCreations] = useState([]);

    const getCreationData = async () => {
        setCreations(dummyCreationData);
    }

    useEffect(() => {
        getCreationData();
    }, []);

    return (
        <div className="mt-20 border-2 overflow-y-scroll flex-1 bg-[#2a2929ff] text-gray-600 ">
            <div className="flex flex-row items-center gap-20 w-fit h-auto p-4 m-10 rounded-2xl text-white border-0 border-gray-400 bg-gradient-to-r from-[#42275a] to-[#734b6d]">
                <div className="flex flex-col">
                    <h1 className="font-bold text-xl">Total Creations</h1>
                    <p className="font-semibold text-xl">{creations.length}</p>
                </div>
                <div>
                    <IoSparklesSharp className="rounded-lg h-12 w-12 p-2 text-yellow-300" />
                </div>
            </div>

            <div className="space-y-3  border-white text-white m-12">
                <p className="mt-6 mb-4 font-bold text-xl">Recent Creations</p>
                {creations.map((item) => <CreationItem key={item.id} item={item}/>)}
            </div>
        </div>
    )
}

export default Dashboard;
