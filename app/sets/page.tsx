import React from 'react';
import Header from "@/app/components/Header/Header";

interface Set {
    id: string;
    name: string;
    logo: string;
    cardCount: { total: number };
}


const Sets = async () => {
    const setsId = new Array<string>('P-A', 'A1', 'A1a', 'A2', 'A2a', 'A2b', 'A3');
    const res = await fetch(`https://api.tcgdex.net/v2/en/sets?id=eq:${setsId.join('|')}`);
    const sets: Set[] = await res.json();

    return (
        <>
            <Header/>
            <main>
                <section className='pt-12 pb-12'>
                    <div className='container mx-auto'>
                        <h2>All sets from Pokemon TCG Pocket</h2>
                        <div className='grid grid-cols-3 gap-6'>
                            {sets.map((set) => (
                                <div key={set.id} className="card bg-base-100 w-full shadow-sm">
                                    <figure className='p-6'>
                                        <img className='h-28' src={set.logo + '.webp'} alt={set.name}/>
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {set.name}
                                            <div className="badge badge-secondary">{set.cardCount.total} cards</div>
                                        </h2>
                                        <p>A card component has a figure, a body part, and inside body there are title
                                            and actions parts</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">View Set</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Sets;