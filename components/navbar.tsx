"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, useScroll, motion, useMotionValueEvent } from "framer-motion";
import type { Variants } from "framer-motion";
const links = [
    { href: '/services', label: 'Advantages' },
    { href: '/projects', label: 'Ecosystem' },
    { href: '/about', label: 'Partners' },
    { href: '/site-selection', label: 'Site Selection' },
    { href: '/news', label: 'News' },
    // { href: '#contact', label: 'Contact' },
];
const Navbar = () => {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const isHomePage = pathname === "/";
    const [hasScrolled, setHasScrolled] = useState(false);
    const { scrollY } = useScroll();
    const [prevScrollY, setPrevScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (!mobileMenuOpen) {
            const scrollingUp = latest < prevScrollY;
            const shouldShow = scrollingUp || latest < 50;
            setIsVisible(shouldShow);

            if (latest > 50 && !hasScrolled) {
                setHasScrolled(true);
            } else if (latest <= 50 && hasScrolled) {
                setHasScrolled(false);
            }
        }
        setPrevScrollY(latest);
    });
    const menuVariants = {
        open: {
            height: 'auto',
            opacity: 1,
        },
        closed: {
            height: 0,
            opacity: 0,
        }
    };

    const navbarVariants: Variants = {
        initial: isHomePage
            ? {
                y: -100,
                opacity: 0,
            }
            : {
                y: 0,
                opacity: 1,
            },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring" as const,
                duration: 0.8,
                delay: isHomePage && !hasScrolled ? 1.8 : 0,
            },
        },
        hidden: {
            y: -100,
            opacity: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut" as const,
            },
        },
    };
    return (
        <AnimatePresence>
            <motion.nav
                key="navbar"
                className="fixed top-0 left-0 right-0 bg-white z-50 py-4 px-6 md:px-10 border-b "
                initial="initial"
                animate={isVisible ? "visible" : "hidden"}
                variants={navbarVariants}
            >
                <div className="mx-auto flex justify-between items-center">
                    <Link href={'/'} className="flex items-center space-x-1">
                        <div className="rounded-full bg-black w-6 h-6" />
                        <span className="text-xl font-bold">NCGTP</span>
                    </Link>
                    {/* desktop menu */}
                    <div className="hidden items-center md:flex space-x-8">
                        {
                            links.map((link) => (
                                <Link key={link.href} href={link.href} className={`${pathname === link.href ? 'text-amber-500 font-semibold' : 'text-neutral-500'} hover:text-amber-700 transition-colors duration-300`}>
                                    {link.label}
                                </Link>
                            ))
                        }
                        <button className="text-neutral-500 bg-transparent hover:text-slate-50 hover:bg-amber-700 cursor-pointer px-1.5 py-1.5 rounded-md transition-colors duration-200"
                        onClick={()=>{
                            document.getElementById('contact')?.scrollIntoView({
                                behavior:"smooth"
                            })
                        }}
                        >
                            Contact
                        </button>
                    </div>
                    {/* mobile menu button */}
                    <button className="md:hidden cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X className="w-6 h-6 text-neutral-500" /> : <Menu className="w-6 h-6 text-neutral-800" />}
                    </button>
                </div>
                {/* mobile menu */}
                <motion.div
                    initial='closed'
                    animate={mobileMenuOpen ? 'open' : 'closed'}
                    variants={menuVariants}
                    className="md:hidden overflow-hidden">
                    <div className="flex flex-col space-y-4 pt-4">
                        {
                            links.map((link) => (
                                <Link key={link.href} href={link.href} className={`${pathname === link.href ? 'text-amber-500 font-semibold' : 'text-neutral-500'} hover:text-amber-700`}>
                                    {link.label}
                                </Link>
                            ))
                        }
                        <Link href="#contact" className="text-neutral-500 hover:text-amber-700"
                        onClick={()=>{
                            document.getElementById('contact')?.scrollIntoView({
                                behavior:"smooth"
                            })
                        }}
                        >
                            Contact
                        </Link>
                    </div>
                </motion.div>
            </motion.nav>
            {/* overlay for mobile menu */}
            {mobileMenuOpen && (
                <motion.div
                    key="overlay"
                    className="fixed inset-0 bg-black backdrop-blur-sm z-40 md:hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.25 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}
        </AnimatePresence>
    );
}

export default Navbar;