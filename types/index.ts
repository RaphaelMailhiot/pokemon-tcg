// Représente le détail du nombre de cartes par catégorie
export interface CardCount {
    firstEd: number;
    holo: number;
    normal: number;
    official: number;
    reverse: number;
    total: number;
}

// Représente une carte individuelle dans le set
export interface Card {
    id: string;
    image: string;
    localId: string;
    name: string;
}

// Indique la légalité du set selon les formats de jeu
export interface Legal {
    expanded: boolean;
    standard: boolean;
}

// Définit la série à laquelle appartient le set
export interface Serie {
    id: string;
    name: string;
}

// Interface globale de la réponse de l’API pour un set
export interface SetDetail {
    cardCount: CardCount;
    cards: Card[];
    id: string;
    legal: Legal;
    logo: string;
    name: string;
    releaseDate: string; // format ISO, ex. "2024-12-17"
    serie: Serie;
}