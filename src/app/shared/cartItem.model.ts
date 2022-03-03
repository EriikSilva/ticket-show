import { BandModel } from './band.model';
export class CartItem{

    constructor(band:BandModel){
        this.band = band;
        this.price;
    }

    band:BandModel;
    quantity:number = 1;

    get price():number{
        return this.band.price * this.quantity;
    }
}