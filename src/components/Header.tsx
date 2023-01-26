import { useState } from "react";
import { Sidebar } from "./Sidebar";

import { useSelector } from "react-redux";
import { selectBasketItems } from "../redux/basketSlice";

import { ShoppingCart } from "phosphor-react";

export function Header() {
    const [isOpenedSidebar, setIsOpenedSidebar] = useState(false);
    const items = useSelector(selectBasketItems);

    return (
        <>
        <header className="flex justify-between items-center py-7 px-6 md:px-16 w-full bg-[#0F52BA] shadow-xl">
            <div className="flex items-center text-white gap-1 cursor-pointer hover:scale-105 transition duration-150 ease-in">
                <h1 className="font-bold text-4xl">MKS</h1>
                <span className="font-thin text-xl">Sistemas</span>
            </div>

            <button
                onClick={() => setIsOpenedSidebar((prev) => !prev)}
                className="flex items-center gap-4 bg-white py-3 px-4 rounded-lg text-black border-none font-bold hover:scale-105 duration-150 transition ease-in"
            >
                <ShoppingCart size={20} weight="bold" />
                <span>{items.length}</span>
            </button>                                          
        </header>

        <div className={`${isOpenedSidebar ? 'w-full lg:w-[486px]' : 'w-0'} fixed sidebar duration-75 ease-in bg-[#0F52BA] shadow-2xl z-[100]`}>
            <Sidebar closeSidebar={setIsOpenedSidebar} />
        </div>
        </>
    )
}
