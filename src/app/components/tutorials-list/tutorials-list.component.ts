import { Component, Input, OnInit } from '@angular/core';
import { Stock,StockHistory, Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css'],
})

export class TutorialsListComponent implements OnInit {
  @Input() currentStock: Stock = {
    Symbol: '',
    CurrentPrice: '',
    Timestamp:''
  };
  stocks?: Stock[];
  currentIndex = -1;
  StockHistory?: StockHistory[];
  
  symbolHistory?:'';

  title = '';

  constructor(private stockService: TutorialService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

    ngOnInit(): void {
      this.retrieveStocks();
    }
    
  retrieveStocks(): void {
    this.stockService.getAll().subscribe({
      next: (data) => {
        this.stocks = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveStocks();
    this.currentStock = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(stock: Stock, index: number): void {
    this.currentStock = stock;
    this.currentIndex = index;

  }
  
  FindHistory(): void {
    this.stockService.getStockHistory(this.symbolHistory).subscribe({
      next: (data) => {
        this.StockHistory = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}
