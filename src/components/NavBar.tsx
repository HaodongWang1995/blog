import React, { FC } from "react";
import Button from "./Button";
import Link from "next/link";

interface NavBarProps { }

const NavBar: FC<NavBarProps> = () => {
    return (<div>
        <span>
            NavBar
        </span>
        <Link href="/">
            <Button label="Home"></Button>
        </Link>
        <Link href="/about">
            <Button label="About Me"></Button>
        </Link>
        <span>---</span>
    </div>);
};

export default NavBar;