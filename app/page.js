import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { BsSearch } from "react-icons/bs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className=" mx-40 pt-10 flex justify-between ">
        <section className="w-2/5 min-w-fit">
          <div className="flex border bg-white shadow-lg shadow-white-500/50 rounded-full p-4">
            <div className="mr-10">
              <Link href="/" className="text-xl">
                <BsSearch />
              </Link>
            </div>
            <div className="text-gray-400/75">
              Type keyword to find your search..
            </div>
          </div>
        </section>
        <section>buttons</section>
      </div>
    </main>
  );
}
