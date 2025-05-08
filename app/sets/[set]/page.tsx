'use client';
import React, {useEffect, useState} from 'react';
import Header from "@/app/components/Header/Header";
import {SetDetail} from '@/types';
import Link from "next/link";
import {useParams} from 'next/navigation';

const SetPage = () => {
    const {set} = useParams();
    const [setDetail, setSetDetail] = useState<SetDetail | null>(null);

    useEffect(() => {
        const fetchSetDetail = async () => {
            const res = await fetch('https://api.tcgdex.net/v2/en/sets/' + set);
            const data: SetDetail = await res.json();
            setSetDetail(data);
        };

        fetchSetDetail();
    }, [set]);

    if (!setDetail) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Header/>
            <main>
                <section className='pt-12 pb-12'>
                    <div className='container mx-auto'>
                        <h2>{setDetail.name} ({setDetail.id}) Card List</h2>
                        <div className='grid grid-cols-6 gap-6'>
                            {setDetail.cards.map((card) => (
                                <Link href={'/sets/' + set + '/' + card.id} key={card.id}
                                      className="card bg-base-100 w-full shadow-sm">
                                    <figure>
                                        <img className='h-full w-full' src={card.image + '/low.webp'} alt={card.name} loading="lazy"/>
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {card.name}
                                            <div className="badge badge-secondary">{card.localId}</div>
                                        </h2>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default SetPage;