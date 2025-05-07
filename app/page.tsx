import Link from "next/link";
import ProductCard from "@/app/components/ProductCard/ProductCard";

export default function Home() {
    return (
        <main>
            <div className='container'>
                <h1>Hello World</h1>
                <Link href="/users">Users</Link>
                <Link href="/sets">Sets</Link>
                <ProductCard />
            </div>
        </main>
    )
}
