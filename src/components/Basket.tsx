import { useSelector } from 'react-redux';
import { selectBasketItems } from '../redux/basketSlice';

import { ShoppingBag } from 'phosphor-react';

export function Basket() {
    const items = useSelector(selectBasketItems);

    if (items.length === 0) return null;

    return (
        <div>
            <div className="fixed bottom-10 right-10 z-50 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gray-300 hover:scale-105 duration-150 ease-in transition">
                {items.length > 0 && (
                    <span className="absolute -right-2 -top-2 z-50 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-[10px] text-white">
                        {items.length}
                    </span>
                )}
                <ShoppingBag className="h-8 w-8 cursor-pointer opacity-75 transition hover:opacity-100" />
            </div>
        </div>
    );
}
