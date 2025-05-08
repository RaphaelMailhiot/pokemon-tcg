import Link from "next/link";
import ProductCard from "@/app/components/ProductCard/ProductCard";
import Header from "@/app/components/Header/Header";

export default function Home() {
    return (
        <>
            <Header/>
            <main>
                <div className='container'>
                    <h1>Hello World</h1>
                    <Link href="/users">Users</Link>
                    <Link href="/sets">Sets</Link>
                    <ProductCard/>
                </div>
            </main>
        </>
    )
}
