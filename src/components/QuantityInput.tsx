import { Minus, Plus } from "phosphor-react";

interface QuantityInputProps {
    addFromBasket: () => void;
    removeFromBasket: () => void;
    length: number;
}

export function QuantityInput({ length, removeFromBasket, addFromBasket }: QuantityInputProps) {
    return (
        <div className="flex flex-col gap-1">
            <p className="text-xs">Qtd:</p>

            <div className="flex border-[#BFBFBF] max-w-[120px] border justify-between items-center rounded text-black">
                <button
                    onClick={removeFromBasket}
                    className="border-r border-[#BFBFBF] pr-1 bg-none disabled:opacity-60 transition-colors duration-100"
                >
                    <Minus size={14} weight="fill" />
                </button>
            
                <input
                    type={"number"}
                    readOnly={true}
                    value={length}
                    className="text-center w-[30px] text-base-title focus:outline-none"
                />
            
                <button
                    onClick={addFromBasket}
                    className="border-l border-[#BFBFBF] pl-1 disabled:opacity-5 transition-colors duration-100"
                >
                    <Plus size={14} weight="fill" />
                </button>
            </div>
        </div>
    )
}