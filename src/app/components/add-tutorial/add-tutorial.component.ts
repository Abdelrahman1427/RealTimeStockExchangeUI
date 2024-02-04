import { Component } from '@angular/core';
import { Stock } from 'src/app/models/tutorial.model';
import { Order } from 'src/app/models/tutorial.model';

import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css'],
})
export class AddTutorialComponent {
  orders: Order[]=[];
  currentOrder: Order = {};
  currentIndex = -1;

  order: Order = {
    StockSymbol: '',
    OrderType: '',
    Quantity: 1
  };  

  submitted = false;

  constructor(private OrderService: TutorialService) {}
  ngOnInit(): void {
    this.retrieveOrders();
  }

  buy():void{
    const data = {
      stockSymbol: this.order.StockSymbol,
      quantity: this.order.Quantity,
      orderType: 'buy'
    };
    this.OrderService.createOrder(data).subscribe({
      next: (res) => {
        console.log(res);
        console.log(data);

        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }
  sell():void{
    const data = {
      stockSymbol: this.order.StockSymbol,
      quantity: this.order.Quantity,
      orderType: 'sell'
    };
    this.OrderService.createOrder(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }
  saveTutorial(): void {

    const Orderdata = {
      stockSymbol: this.order.StockSymbol,
      orderType: this.order.OrderType
    };
    this.OrderService.createOrder(Orderdata).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }



  newTutorial(): void {
    this.submitted = false;
    this.order = {
      StockSymbol: '',
      OrderType: '',
      Quantity: 1
    };
  }

  retrieveOrders(): void {
    this.OrderService.getAllOrders().subscribe({
      next: (data) => {
        this.orders = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveOrders();
    this.currentOrder = {};
    this.currentIndex = -1;
  }


  setActiveOrder(order: Order, index: number): void {
    this.currentOrder = order;
    this.currentIndex = index;

  }
  }
