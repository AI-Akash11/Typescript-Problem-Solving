type CartItem = {
    name: string;
    price: number;
    quantity?: number;
}

function calculateTotal(item: CartItem): number {
    const {price , quantity = 1} = item;
    return price * quantity;

}

const item1: CartItem = {
    name: "Book",
    price: 500
};

const item2: CartItem = {
    name: "Pen",
    price: 20,
    quantity: 5
};

console.log(calculateTotal(item1));
console.log(calculateTotal(item2));