import { useEffect, useState } from "react";
import { CartItem } from "./CartItem";

import Currency from 'react-currency-formatter';

import { useSelector } from "react-redux";
import { selectBasketItems } from "../redux/basketSlice";

import { X } from "phosphor-react";

import { Product } from "../typings";

interface SidebarProps {
    closeSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Sidebar({ closeSidebar }: SidebarProps) {
    const items = useSelector(selectBasketItems);

    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState(
        {} as { [key: string]: Product[] }
    );

    useEffect(() => {
        const groupedItems = items.reduce((results, item) => {
          (results[item.id] = results[item.id] || []).push(item);
          return results;
        }, {} as { [key: string]: Product[] });
    
        setGroupedItemsInBasket(groupedItems);
      }, [items]);

    return (
        <div className="flex flex-col justify-between h-screen md:overflow-hidden pt-9 overflow-auto md:hover:overflow-auto scrollbar scrollbar-thumb-blue-900">
            <div className="flex flex-col">
                <div className="flex justify-between items-center px-3 ml-3">
                    <div className="text-2xl font-extrabold tracking-tight text-white">
                        <h1>Carrinho de compras</h1>
                    </div>
                    
                    <div>
                        <button
                            type="button"
                            onClick={() => closeSidebar(false)}
                            className="text-xl rounded-full p-3 hover:bg-light-gray block bg-black text-white hover:bg-slate-100/20"
                        >
                            <X size={26} />
                        </button>
                    </div>
                </div>

                {items.length > 0 && (
                    <div className="flex flex-col pt-16 gap-7 px-4 w-full">
                        {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                            <CartItem key={key} items={items} id={key} />
                        ))}
                    </div>
                )}
            </div>

            <div className="flex flex-col gap-6">
                <div className="flex justify-between font-bold text-[28px] text-white px-8">
                    <span>Total:</span>
                    <span>
                    <Currency
                        quantity={items.reduce((total, item) => total + Number(item.price), 0)}
                        currency="BRL"
                    />
                    </span>
                </div>

                <button
                    onClick={() => {}}
                    className="flex justify-center text-2xl bg-black text-white font-bold py-6"
                >
                    Finalizar Compra
                </button>
            </div>
        </div>
    )
}
