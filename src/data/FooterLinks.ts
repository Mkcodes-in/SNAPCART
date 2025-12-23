import type { LucideIcon } from "lucide-react";
import type { NavLink } from "./NavLinks"
import {Mail, Phone, Cookie} from 'lucide-react'

interface contactLinks extends NavLink{
    icon: LucideIcon;
}

export const CustomerLinks: NavLink[] = [
    {
        name: 'Help Center', 
        path: '#'
    }, 
    {
        name: 'Track Order', 
        path: '#'
    }, 
    {
        name: 'Return & Refunds', 
        path: '#'
    }, 
    {
        name: 'Shopping info', 
        path: '#'
    }
]

export const ContactLinks: contactLinks[] = [
    {
        name: 'support@snapcart.com', 
        path: '#', 
        icon: Mail
    }, 
    {
        name: '+91 98765 43210', 
        path: '#', 
        icon: Phone
    }, 
    {
        name: 'Privacy Policy', 
        path: '#', 
        icon: Cookie
    }
]
