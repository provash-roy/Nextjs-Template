"use client";

import UserMenu from "./UserMenu";
import Search from "./Search";
import Container from "../Container";
import { Button } from "../ui/button";
import Logo from "./Logo";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <>
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <Container>
          <div className="flex justify-between items-center h-16">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
