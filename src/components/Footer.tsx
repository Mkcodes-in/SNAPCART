import { ContactLinks, CustomerLinks } from "@/data/FooterLinks"
import { NavLinks } from "@/data/NavLinks"
import {
    Facebook,
    Instagram,
    ShoppingCart,
    Twitter,
    Youtube
} from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer className="w-full border-t bg-white">
            <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">

                {/* Brand */}
                <div className="space-y-4">
                    <h1 className="flex items-center gap-2 text-lg font-bold">
                        <ShoppingCart className="h-5 w-5" />
                        SnapCart
                    </h1>

                    <p className="text-sm text-gray-600">
                        Your trusted online shopping destination for quality products at unbeatable prices.
                    </p>

                    <div className="flex items-center gap-4 text-gray-600">
                        <a href="#" aria-label="Facebook" className="hover:text-black transition">
                            <Facebook size={20} />
                        </a>
                        <a href="#" aria-label="Twitter" className="hover:text-black transition">
                            <Twitter size={20} />
                        </a>
                        <a href="#" aria-label="Instagram" className="hover:text-black transition">
                            <Instagram size={20} />
                        </a>
                        <a href="#" aria-label="Youtube" className="hover:text-black transition">
                            <Youtube size={20} />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-3">
                    <h2 className="font-semibold">Quick Links</h2>
                    <ul className="space-y-2 text-sm text-gray-600">
                        {NavLinks.map((itm) => (
                            <li key={itm.name}>
                                <Link
                                    to={itm.path}
                                    className="hover:text-black transition"
                                >
                                    {itm.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Customer Service */}
                <div className="space-y-3">
                    <h2 className="font-semibold">Customer Service</h2>
                    <ul className="flex flex-col space-y-2 text-sm text-gray-600">
                        {CustomerLinks.map(itm => (
                            <a
                                className="hover:text-black transition"
                                key={itm.name}
                                href={itm.path}>{itm.name}</a>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div className="space-y-3">
                    <h2 className="font-semibold">Contact Us</h2>
                    <ul className="space-y-2 text-sm text-gray-600">
                        {ContactLinks.map((item) => {
                            const Icon = item.icon
                            return (
                                <li key={item.name}>
                                    <a
                                        href={item.path}
                                        className="flex items-center gap-2 hover:text-black transition"
                                    >
                                        {Icon && <Icon size={16} />}
                                        {item.name}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t text-center text-sm text-gray-500 py-4">
                © {new Date().getFullYear()} SnapCart. All rights reserved.
            </div>
        </footer>
    )
}
