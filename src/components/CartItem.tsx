import { QuantityInput } from "./QuantityInput";

import Currency from 'react-currency-formatter';

import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../redux/basketSlice";
import { toast } from "react-hot-toast";

import { X } from "phosphor-react";
import { Product } from "../typings";

interface CartItemProps {
    id: string;
    items: Product[];
}

export function CartItem({ id, items }: CartItemProps) {
    const dispatch = useDispatch();

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({ id }));

        toast.error(`${items[0].name} foi removido do carrinho!`, {
            position: 'bottom-center',
        });
    }

    const addItemToBasket = () => {
        dispatch(addToBasket(items[0]));

        toast.success(`${items[0].name} foi adicionado ao carrinho!`, {
            position: 'bottom-center',
        });
    };

    return (
        <div className="flex flex-col lg:flex-row relative mb-6 gap-3 py-6 px-5 justify-between items-center w-full bg-white rounded-lg">
            <button
                onClick={removeItemFromBasket}
                className="absolute bottom-[120px] -right-2 z-10 bg-black p-1 text-white rounded-full cursor-pointer"
            >
                <X />
            </button>

            <div className="flex gap-1 items-center">
                <img src={items[0].photo} alt="Aparelho" className="w-20 h-20" />
                <h1 className="font-semibold text-lg">{items[0].name}</h1>
            </div>

            <QuantityInput addFromBasket={addItemToBasket} removeFromBasket={removeItemFromBasket} length={items.length} />

            <span className="flex text-2xl pt-3 font-bold">
                <Currency
                    quantity={items.reduce((total, item) => total + Number(item.price), 0)}
                    currency="BRL"
                />
            </span>
        </div>
    )
}
