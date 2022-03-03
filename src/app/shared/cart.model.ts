import { CartItem } from './cartItem.model';
export class CartModel{

    items:CartItem[] = []

    get totalPrice():number{
        let totalPrice = 0;

        this.items.forEach(item => {
            totalPrice += item.price
        })

        return totalPrice;
    }

}