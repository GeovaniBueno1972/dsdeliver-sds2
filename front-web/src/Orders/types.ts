export type Product = {
    id: number;
    name: string; 
    price: number;
    description: string;
    imageUri: string;
}

export type OrderLocationData = {
    latitude: Number;
    longitude: number;
    address:  string;
}