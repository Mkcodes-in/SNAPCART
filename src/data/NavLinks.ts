export interface NavLink{
    path: string;
    name: string;
}

export const NavLinks: NavLink[] = [
    {
        path: '/', 
        name: 'Home'
    }, 
    {
        path: '/products', 
        name: 'Products'
    }, 
    {
        path: '/categories', 
        name: 'Categories'
    }
]