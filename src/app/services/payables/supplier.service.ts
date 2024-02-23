import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Supplier } from '../../interface/payables/supplier';
import { SortDirection } from '@angular/material/sort';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private http: HttpClient) { }
  configUrl = 'https://localhost:7044/api/Suppliers';

  getAllSuppliers() {
    return this.http.get<Supplier[]>(this.configUrl);
  }
}
