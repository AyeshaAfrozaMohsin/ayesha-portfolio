import Nav from "./Nav";
import coolface2 from "@/public/coolface2.png";
import Image from "next/image";

function Logo() {
  return (
    <div className="relative h-16 w-16">
      <div className="absolute inset-0 flex items-center justify-center dark:bg-white rounded-full h-18 w-18 -m-0.5">
        <Image src={coolface2} alt="Cool Face Logo" width={64} height={64} />
      </div>
    </div>
  );
}

export default function Header() {
  return (

    <header className="w-full bg justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8"></header>
  );
}
