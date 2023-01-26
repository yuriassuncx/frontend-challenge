import { useDispatch } from "react-redux";
import { addToBasket } from "../redux/basketSlice";

import { ShoppingBagOpen } from "phosphor-react";

import { Product } from "../typings";
import { toast } from "react-hot-toast";

interface CardProps {
    photo: string;
    name: string;
    price: number;
    description: string;
    product: Product;
}

export function Card({ photo, name, price, description, product }: CardProps) {
    const dispatch = useDispatch();

    const addItemToBasket = () => {
        dispatch(addToBasket(product));

        toast.success(`${product.name} foi adicionado ao carrinho!`, {
            position: 'bottom-center',
        });
    };

    return (
        <div className="flex flex-col w-[218px] h-full justify-between bg-white shadow-2xl rounded-lg cursor-pointer hover:scale-105 duration-150 transition ease">
            <div className="flex justify-center pt-[18px]">
                <img src={photo} alt="Item de compra" className="h-[138px]" />
            </div>

            <div className="flex flex-col gap-2 px-3 pb-3">
                <div className="flex gap-2 pt-3 items-center justify-between text-[#2C2C2C]">
                    <h1 className="font-bold leading-[19px] text-lg">{name}</h1>

                    <div className="flex py-1 px-2 justify-center items-center bg-[#373737] text-white font-bold rounded">
                        <span>R${price}</span>
                    </div>
                </div>

                <span className="leading-[12px] text-xs">
                    {description}
                </span>
            </div>

            <button
                onClick={addItemToBasket}
                className="flex gap-3 items-center w-full justify-center rounded-b-lg py-2 bg-[#0F52BA] text-white"
            >
                <ShoppingBagOpen size={20} weight="bold" />
                <span className="uppercase font-bold text-sm">Comprar</span>
            </button>
        </div>
    )
}
