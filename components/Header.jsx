import Image from "next/image";
import React from "react";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="Trending" Icon={BadgeCheckIcon} />
        <HeaderItem title="Verified" Icon={CollectionIcon} />
        <HeaderItem title="Collection" Icon={LightningBoltIcon} />
        <HeaderItem title="Search" Icon={SearchIcon} />
        <HeaderItem title="Account" Icon={UserIcon} />
      </div>
  
 
      <Image
        className=" object-contain"
        src="https://cdn.iconscout.com/icon/free/png-256/google-play-movies-tv-2038775-1721662.png"
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;
