import { Component, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
    selector: 'fetchdata',
    templateUrl: './pizzaorder.component.html'
})
export class PizzaOrderComponent {
    public order: PizzaOrder = {
        name: '',
        address: '',
        size: '',
        selectedToppings: []
    };
    public toppings: ToppingOption[];
    public orderNumber: string;
    public message: string;

    constructor(private http: Http, @Inject('BASE_URL') private baseUrl: string) {
        http.get(baseUrl + 'api/PizzaToppings').subscribe(result => {
            let availableToppings = result.json() as string[];
            this.toppings = availableToppings.map(topping => { return { name: topping, selected: false }; });
        }, error => console.error(error));
    }

    public orderPizza() {
        this.order.selectedToppings = this.selectedToppings;
        let body = JSON.stringify(this.order);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        this.http.post(this.baseUrl + 'api/PizzaOrders', body, options).subscribe(
            result => {
                this.orderNumber = result.json() as string;
            },
            error => {
                this.message = 'Error! No pizza for you!';
            });
    }

    get selectedToppings(): string[] {
        return this.toppings.filter(topping => topping.selected).map(topping => topping.name);
    }
}

export class ToppingOption
{
    public name: string;
    public selected: boolean;
}

export class PizzaOrder
{
    public name: string;
    public address: string;
    public size: string;
    public selectedToppings: string[];
}

