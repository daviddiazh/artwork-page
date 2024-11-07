import { StaticImageData } from "next/image";

export interface ArtWork {
    _id?: string;
    name: string;
    createdAt: string;
    category: string;
    techniques: string;
    sizeX: string;
    sizeY: string;
    price: string;
    description: string;
    image: string | StaticImageData;
    state: string;
}