import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Supplier } from '../../../interface/payables/supplier';
import { SupplierService } from '../../../services/payables/supplier.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrl: './supplier-list.component.scss'
})
export class SupplierListComponent implements AfterViewInit {
  private subs = new Subscription();
  public dataSource: MatTableDataSource<Supplier>;
  private dataArray: any;
  displayedColumns: string[] = ['name', 'contactPerson', 'phoneNumber'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  isLoadingResults = true;

  constructor(private supplierService: SupplierService) { }

  ngAfterViewInit() {
    this.getAllSuppliers()
  }

  getAllSuppliers() {
    this.subs.add(this.supplierService.getAllSuppliers()
    .subscribe((res) => {
      console.log(res);
      this.dataArray = res;
      this.dataSource = new MatTableDataSource<Supplier>(this.dataArray);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.isLoadingResults = false;
    },
      (err: HttpErrorResponse) => {
        console.log(err);
      }));
  }
}
