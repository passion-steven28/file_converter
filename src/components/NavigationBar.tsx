import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { File, Github, MenuSquare } from 'lucide-react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export const NavigationBar = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap p-4 sticky top-0 z-50 shadow">
            <Link href="/" className='flex items-center text-2xl text-red-700 font-bold'>
                <File />
                <span>onlineFC</span>
            </Link>

            <Link href="https://github.com/passion-steven28/file_converter.git" className='hidden md:flex'>
                <Github />
            </Link>


            <div className="flex md:hidden lg:hidden">
                <Sheet>
                    <SheetTrigger>
                        <MenuSquare />
                    </SheetTrigger>
                    <SheetContent>
                        <SheetTitle>
                            <h1>welcome!</h1>
                        </SheetTitle>
                        <SheetTitle>
                            <Link href="https://github.com/passion-steven28/file_converter.git">
                                <Github />
                            </Link>
                        </SheetTitle>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}

