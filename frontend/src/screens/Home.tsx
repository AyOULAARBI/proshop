import ProductList from "../components/ProductList"
import products from "../consts/product"

const Home = () => {
    return (
        <main className="min-h-screen pt-20">
            <div className="max-w-xl mx-auto">

                <h1 className='text-5xl  text-center font-bold '>Discover Cutting-Edge Technology at Your Fingertips</h1>
                <p className="text-center text-sm mt-5">Explore our latest collection of smartphones, tablets, and computers designed to elevate your digital
                    experience. Stay ahead of the curve with innovative devices that blend style and functionality.</p>
            </div>
            <div className="max-w-4xl mx-auto">
                <ProductList products={products} />

            </div>
        </main>
    )
}

export default Home