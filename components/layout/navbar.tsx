"use client";
import logo from "@/public/logo.png";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "../ui/navigation-menu";
import { Separator } from "../ui/separator";
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet";

interface RouteProps {
    href: string;
    label: string;
}

const routeList: RouteProps[] = [
    {
        href: "/#services",
        label: "Services",
    },
    {
        href: "/#contact",
        label: "Contact",
    },
    {
        href: "/#faq",
        label: "FAQ",
    },
    {
        href: "/members",
        label: "Members",
    },
    {
        href: "/gallery",
        label: "Gallery",
    },
];
const MobileNavigation = ({
    isOpen,
    setIsOpen,
}: {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}) => {
    return (
        <div className="flex items-center lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Menu onClick={() => setIsOpen(!isOpen)} className="cursor-pointer lg:hidden" />
                </SheetTrigger>

                <SheetContent
                    side="left"
                    className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
                >
                    <div>
                        <SheetHeader className="mb-4 ml-4">
                            <SheetTitle className="flex items-center">
                                <Link href="/" className="flex items-center">
                                    <Image
                                        alt="logo"
                                        src={logo}
                                        sizes={"36"}
                                        className="w-9 h-9 mr-2"
                                    />
                                    Checkmate&Connect
                                </Link>
                            </SheetTitle>
                        </SheetHeader>

                        <div className="flex flex-col gap-2">
                            {routeList.map(({ href, label }) => (
                                <Button
                                    key={href}
                                    onClick={() => setIsOpen(false)}
                                    asChild
                                    variant="ghost"
                                    className="justify-start text-base"
                                >
                                    <Link href={href}>{label}</Link>
                                </Button>
                            ))}
                        </div>
                    </div>

                    <SheetFooter className="flex-col sm:flex-col justify-start items-start">
                        <Separator className="mb-2" />
                        {/* <ToggleTheme /> */}
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    );
};

const DesktopNavigation = ({ isOpen }: { isOpen: boolean }) => {
    return (
        <>
            <Link href="/" className="font-bold text-lg flex items-center">
                <Image alt="logo" src={logo} sizes={"36"} className="w-9 h-9 mr-2" />
                {/* <ChevronsDown className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" /> */}
                Checkmate&Connect
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:block mx-auto">
                <NavigationMenuList>
                    {routeList.map(({ href, label }) => (
                        <NavigationMenuItem key={href}>
                            <NavigationMenuLink asChild>
                                <Link
                                    href={href}
                                    className="text-base  py-2 px-3 hover:bg-gray-800 hover:border hover:border-gray-700 rounded-md"
                                >
                                    {label}
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>

            <div className="hidden lg:flex">
                <Button asChild size="sm" aria-label="Join Us">
                    <Link
                        href="https://www.meetup.com/checkmate-connect-club-casablanca-chapter/"
                        aria-label="Join Checkmate&Connect"
                        target="_blank"
                    >
                        Join Us
                    </Link>
                </Button>
            </div>
        </>
    );
};
export const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <header
            className={`shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-[60] rounded-2xl flex justify-between items-center p-2 bg-card transition-all duration-500 ${
                !isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
            }`}
        >
            <DesktopNavigation isOpen={isOpen} />
            <MobileNavigation isOpen={isOpen} setIsOpen={setIsOpen} />
        </header>
    );
};
