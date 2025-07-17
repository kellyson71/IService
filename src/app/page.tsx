import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LogIn } from 'lucide-react';

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-center h-screen">
      <header className="fixed top-0 w-full py-4 px-8 flex flex-row items-center justify-between">
        <Image
          className="dark:invert"
          src="https://i.postimg.cc/76hJRmSq/i-Service-Large-Logo.png"
          alt="iService logo"
          width={180}
          height={38}
          priority
        />
        <nav className="flex flex-row gap-4 items-center justify-center">
          <a href="" className="text-lg">Home</a>
          <a href="" className="text-lg">About</a>
          <a href="/login">
            <Button className="text-lg rounded-full px-8 py-4"><LogIn />Login</Button>
          </a>
        </nav>
      </header>
      <main>
      </main>

    </div>
  );
}
