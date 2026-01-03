import { NavLinks } from "@/data/NavLinks"
import type { RootState } from "@/store/store";
import { Search, ShoppingCart, User } from "lucide-react"
import { useState } from "react"
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(false);
  const state = useSelector((state: RootState) => state.cart);
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white border-b border-gray-100 shadow-sm">
      <header className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <Link
            className="flex items-center gap-3"
            to={'/'}>
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <ShoppingCart className="text-white" size={22} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl text-gray-900">SnapCart</span>
            </div>
          </Link>

          {/* Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              {NavLinks.map(itm => (
                <div key={itm.name}>
                  <Link to={itm.path} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">{itm.name}</Link>
                </div>
              ))}
            </nav>
          </div>

          {/* Search & Actions */}
          <div className="flex items-center gap-4">

            {/* Search */}
            <div className="relative hidden sm:block">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="pl-12 pr-4 py-2.5 w-64 bg-gray-50 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <button
              onClick={() => navigate('/cart')} 
              className="p-2.5 hover:bg-gray-100 rounded-full transition-colors relative cursor-pointer">
                <ShoppingCart className="text-gray-700 w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {state.cart.length}
                </span>
              </button>

              <button className="p-2.5 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
                <User className="text-gray-700 w-5 h-5" />
              </button>

              {/* Mobile Menu */}
              <button
                onClick={() => setActiveMenu(prev => !prev)}
                className="md:hidden p-2.5 rounded-full transition-all relative cursor-pointer">
                <span className={`absolute top-0 w-5 h-0.5 rounded ${activeMenu ? 'rotate-45 translate-y-2' : ''} left-0 transform transition-all ease-in bg-gray-800 mb-1`}></span>
                <span className={`absolute top-2 w-5 h-0.5 rounded ${activeMenu ? 'opacity-0' : ''} left-0 transform transition-all ease-in bg-gray-800 mb-1`}></span>
                <span className={`absolute top-4 w-5 h-0.5 rounded ${activeMenu ? '-rotate-45 -translate-y-2' : ''} left-0 transform transition-all ease-in bg-gray-800`}></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        {activeMenu && (
          <div className="lg:hidden border-t border-gray-100 py-4 animate-slideDown">
            <div className="mb-6 px-2">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex flex-col px-2 space-y-3">
              {NavLinks.map(itm => (
                <Link
                  key={itm.name}
                  to={itm.path}
                  onClick={() => setActiveMenu(false)}
                  className="py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-200"
                >
                  {itm.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </div>
  )
}