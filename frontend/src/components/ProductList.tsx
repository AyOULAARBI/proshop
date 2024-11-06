import { Link } from "react-router-dom"
import { Product } from "../types/types"
import { Card, CardContent } from "./ui/card"


const ProductList = ({ products }: { products: Product[] }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
            {products?.map(product =>
                <Card key={product.id} className="max-w-md mx-auto">
                    <Link to={`/products/${product.id}`}>
                        <div className="aspect-square overflow-hidden flex items-center justify-center">
                            <img
                                src={product.image as string}
                                width="300"
                                height="300"
                                alt="Thumbnail"
                                className="aspect-square object-cover object-center"
                            />
                        </div>
                        <CardContent className="p-4">
                            <h3 className="font-bold">{product.name}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {product.shortDescription}
                            </p>
                            <p className="font-bold mt-2">${product.price}</p>
                        </CardContent>
                    </Link>
                </Card>)}
        </div>
    )
}

export default ProductList