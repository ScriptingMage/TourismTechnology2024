'use client'
import {usePathname} from "next/navigation";

export function HeaderBar() {

    const url = usePathname();

    const title = {
        '/': 'Dashboard',
        '/hiking-trails': 'Book your route!',
        '/admin': 'Your upcoming visits',
        '/technicals': 'Technicals'
    }[url];

    if (!title) {
        return null;
    }

    return <header className="bg-white shadow border-b-2">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h1>
            <div className="flex gap-4">
                <a href="/hiking-trails">
                    User Showcase
                </a>
                <a href="/admin">
                    Admin showcase
                </a>
                <a href="/technicals">
                    Technicals
                </a>
            </div>
        </div>
    </header>
}