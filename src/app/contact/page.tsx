'use client';

import { Mail, Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import { toast, Toaster } from "sonner";
import Image from 'next/image';
import { useTheme } from "next-themes";

const ContactPage = () => {
    const { theme } = useTheme();
    const handleCopyEmail = async (email: string) => {
        await navigator.clipboard.writeText(email);
        toast.success("Email copied to clipboard!");
    };

    const getBackgroundClass = () => {
        return theme === 'dark' ? 'bg-white/10' : 'bg-black/10';
    };

    const links = [
        {
            name: 'Email',
            href: 'westoncadena@gmail.com',
            icon: Mail,
            color: 'hover:bg-red-500',
            isEmail: true,
            onClick: () => handleCopyEmail('westoncadena@gmail.com'),
        },
        {
            name: 'LinkedIn',
            href: 'https://linkedin.com/in/westoncadena',
            icon: Linkedin,
            color: 'hover:bg-blue-600',
            isEmail: false,
        },
        {
            name: 'GitHub',
            href: 'https://github.com/westoncadena',
            icon: Github,
            color: 'hover:bg-gray-800',
            isEmail: false,
        },
        {
            name: 'Instagram',
            href: 'https://instagram.com/westoncadena',
            icon: Instagram,
            color: 'hover:bg-pink-600',
            isEmail: false,
        },
        {
            name: 'Twitter',
            href: 'https://twitter.com/westoncadena',
            icon: Twitter,
            color: 'hover:bg-blue-400',
            isEmail: false,
        },
    ];

    return (
        <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto">
                {/* Profile Section */}
                <div className="text-center mb-8">
                    <div className="mb-4">
                        <Image
                            src="/profile-picture.jpg"
                            alt="Profile"
                            width={240}
                            height={120}
                            className="rounded-full mx-auto border-4 ${getBackgroundClass()}"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <h1 className="text-2xl font-bold text-white mb-2">Weston Cadena</h1>
                    <p className="text-gray-300">Let&apos;s connect! I&apos;m always up for a good conversation or a new perspective.</p>
                </div>

                {/* Links Section */}
                <div className="space-y-4">
                    {links.map((link) => (
                        link.isEmail ? (
                            <button
                                key={link.name}
                                onClick={link.onClick}
                                className={`w-full flex items-center justify-center space-x-3 p-4 rounded-lg ${getBackgroundClass()} backdrop-blur-sm 
                                transition-all duration-300 ${link.color} hover:scale-105 group`}
                            >
                                <link.icon className="w-6 h-6" />
                                <span className="font-medium">{link.name}</span>
                            </button>
                        ) : (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-full flex items-center justify-center space-x-3 p-4 rounded-lg ${getBackgroundClass()} backdrop-blur-sm 
                                transition-all duration-300 ${link.color} hover:scale-105 group`}
                            >
                                <link.icon className="w-6 h-6" />
                                <span className="font-medium">{link.name}</span>
                            </a>
                        )
                    ))}
                </div>
            </div>
            <Toaster position="bottom-right" />
        </div>
    );
};

export default ContactPage;