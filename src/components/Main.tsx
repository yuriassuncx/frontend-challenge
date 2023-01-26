import { Card } from "./Card";

import { Loading } from "./Loading";

import { getProducts } from "../hooks/getProducts";

export function Main() {
    const { data, loading } = getProducts();

    if (loading) return (
        <div className="flex items-center mx-auto">
            <Loading />
        </div>
    )

    return (
        <div className="grid sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 mt-28 max-w-5xl justify-center gap-x-[22.44px] gap-y-[31.09px] items-center mx-auto">
            {data.map((product) => (
                <Card key={product.id} product={product} photo={product.photo} price={product.price} description={product.description} name={product.name} />
            ))}
        </div>
    )
}
