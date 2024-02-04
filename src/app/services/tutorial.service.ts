import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order, Stock, StockHistory, Tutorial } from '../models/tutorial.model';

const baseUrl = 'http://localhost:5259/api/Stock';
const orderUrl = 'http://localhost:5259/API/orders';


@Injectable({
  providedIn: 'root',
})
export class  TutorialService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Stock[]> {
    return this.http.get<Stock[]>(baseUrl);
  }
  
  getStockHistory(symbol: any): Observable<StockHistory[]> {
    return this.http.get<Tutorial[]>(`${baseUrl}/${symbol}/history`);
  }
  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(orderUrl);
  }
  get(id: any): Observable<Stock> {
    return this.http.get<Stock>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  createOrder(data: any): Observable<any> {
    return this.http.post(orderUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${baseUrl}?title=${title}`);
  }
}
