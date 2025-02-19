'use client';

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar";
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const DesktopHeader = ({ theme, setTheme }: { theme: string | undefined, setTheme: (theme: string) => void }) => (
    <div className="hidden md:flex container h-14 items-center px-8 py-8">
        <Link href="/" className="mr-8 flex items-center space-x-2">
            <span className="font-bold">WESTON</span>
        </Link>

        <Menubar className="flex-1 rounded-none border-none bg-transparent">
            <MenubarMenu>
                <MenubarTrigger className="font-medium">About</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        Background
                    </MenubarItem>
                    <MenubarItem>
                        Skills
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                        Resume
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
                <MenubarTrigger className="font-medium">Projects</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        Featured Work
                    </MenubarItem>
                    <MenubarItem>
                        Open Source
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                        Case Studies
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
                <MenubarTrigger className="font-medium">Contact</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        Email
                    </MenubarItem>

                    <a
                        href="https://www.linkedin.com/in/westoncadena/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <MenubarItem>
                            LinkedIn
                        </MenubarItem>
                    </a>

                    <MenubarItem>
                        Schedule Call
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>

        <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 ml-4"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
    </div>
);

const MobileHeader = ({
    theme,
    setTheme,
    isMenuOpen,
    setIsMenuOpen
}: {
    theme: string | undefined,
    setTheme: (theme: string) => void,
    isMenuOpen: boolean,
    setIsMenuOpen: (isOpen: boolean) => void
}) => {
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setIsMenuOpen]);

    return (
        <div className="md:hidden px-4">
            <div className="container flex h-14 items-center justify-between">
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                    <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>

                <Link href="/" className="flex items-center space-x-2">
                    <span className="font-bold">WESTON</span>
                </Link>

                <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                </Button>
            </div>

            {isMenuOpen && (
                <nav ref={menuRef} className="border-t flex flex-col space-y-4 p-4 bg-background/95 backdrop-blur">
                    <Link href="/about" className="px-4 py-2 hover:bg-accent rounded-md" onClick={() => setIsMenuOpen(false)}>
                        About
                    </Link>
                    <Link href="/projects" className="px-4 py-2 hover:bg-accent rounded-md" onClick={() => setIsMenuOpen(false)}>
                        Projects
                    </Link>
                    <Link href="/contact" className="px-4 py-2 hover:bg-accent rounded-md" onClick={() => setIsMenuOpen(false)}>
                        Contact
                    </Link>
                </nav>
            )}
        </div>
    );
};

const Header = () => {
    const { theme, setTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <DesktopHeader theme={theme} setTheme={setTheme} />
            <MobileHeader
                theme={theme}
                setTheme={setTheme}
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
            />
        </header>
    );
};

export default Header;