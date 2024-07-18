export type CharLocation = {
    name: string;
    url: string;
}

export type Character = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: CharLocation;
    location: CharLocation;
    image: string;
    episode: string[];
    url: string;
    created: string;
}