import { MenuIcon, SearchIcon, ShoppingCart, SquareIcon, User } from "lucide-react"
import { Link } from "react-router-dom"
import { Input } from "./ui/input"
import { useState } from "react"



const Header = () => {
  const [query, setQuery] = useState('')
  return (

    <nav className="px-4 lg:px-6 py-4 md:py-6 border-b items-center gap-4 lg:gap-6 flex flex-col md:flex-row md:items-center">
      <div className="flex items-center justify-between">
      <Link to={'/'} className="font-bold text-2xl uppercase">Proshop</Link>
        <button className="lg:hidden flex items-center gap-2">
          <MenuIcon className="h-4 w-4" />
          <span className="text-sm">Menu</span>
        </button>
      </div>
      <div className="hidden lg:flex w-full max-w-xs lg:max-w-sm ml-auto">
        <div className="relative flex items-center gap-2 w-full">
          <SearchIcon className="absolute left-2.5 h-4 w-4 text-gray-400 dark:text-gray-300" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="search"
            placeholder="Search"
            className="w-full border  border-gray-200 bg-white rounded-md appearance-none pl-8 sm:border-gray-300 sm:dark:border-gray-800"
          />
        </div>
      </div>
      <div className="space-x-4 lg:space-x-8">
        <Link to="/" className="text-sm font-medium hover:underline underline-offset-4" >
          Trending
        </Link>
        <Link to="/" className="text-sm font-medium hover:underline underline-offset-4" >
          Clothing
        </Link>
        <Link to="/" className="text-sm font-medium hover:underline underline-offset-4" >
          Accessories
        </Link>
      </div>
      <div className="flex items-center gap-2 text-xs">
        <button className="px-2 py-1 border-2 border-black hover:bg-black hover:text-white rounded flex items-center gap-2"><ShoppingCart size={20} /> shop  </button>
        <button className="px-2 py-1 bg-black border-2 border-black hover:text-black hover:bg-white  text-white rounded flex items-center gap-2"><User size={20} /> login</button>
      </div>
    </nav>

  )
}


export default Header
//     <nav className=" max-w-screen-lg mx-auto flex items-center justify-between p-2">
//     <Link to={'/'} className="font-bold text-2xl uppercase">Proshop</Link>
//     <div className="flex items-center gap-4">
//         <ul className="flex items-center gap-2 list-none text-sm">
//             <li></li>
//             <li><a href="">Shop</a></li>
//             <li><a href="">About</a></li>
//         </ul>
//         <div className="flex items-center gap-2 text-xs">
//             <button className="px-2 py-1 border-2 border-black hover:bg-black hover:text-white rounded flex items-center gap-2"><ShoppingCart size={20}/> shop  </button>
//             <button className="px-2 py-1 bg-black border-2 border-black hover:text-black hover:bg-white  text-white rounded flex items-center gap-2"><User size={20}/> login</button>
//         </div>
//     </div>
// </nav>
