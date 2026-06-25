type TypeProducts = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating_rate: number;
    rating_count: number;
};

interface NewTypeProducts extends TypeProducts {

}