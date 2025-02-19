'use client';

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar";
import { Github, Linkedin, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from "next-themes";
import Link from "next/link";


const Header = () => {
    const { theme, setTheme } = useTheme();

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                {/* Logo/Name */}
                <div className="mr-4 flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="font-bold">WESTON</span>
                    </Link>

                </div>

                {/* Navigation Menu */}
                <Menubar className="hidden md:flex rounded-none border-none bg-transparent">
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

                {/* Right side items */}
                <div className="flex flex-1 items-center justify-end space-x-2">
                    <nav className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Github className="h-4 w-4" />
                        </Button>
                        <a
                            href="https://www.linkedin.com/in/westoncadena/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Linkedin className="h-4 w-4" />
                            </Button>
                        </a>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        >
                            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;