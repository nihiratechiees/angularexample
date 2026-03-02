import { Component, effect, inject, signal, viewChild } from '@angular/core';
import { Master } from '../service/master';
import { CompanyModel } from '../Model/Companymode';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { sign } from 'crypto';
import { ɵEmptyOutletComponent } from "@angular/router";

@Component({
  selector: 'app-tablex',
  imports: [MatTableModule, MatPaginatorModule, MatSortModule,
    MatFormFieldModule, MatInputModule, MatCardModule, ɵEmptyOutletComponent],
  templateUrl: './tablex.html',
  styleUrl: './tablex.css',
})
export class Tablex {
  service = inject(Master);
  companylist: CompanyModel[] = [];
  datasource!: MatTableDataSource<CompanyModel>;
  displayedcolumns: string[] = ['id', 'name', 'address', 'country', 'empcount', 'status'];
  paginator = viewChild.required(MatPaginator);
  sort = viewChild.required(MatSort);
  searchText = signal('');

  private _effect = effect(() => {
    if (this.datasource) {
      this.datasource.paginator = this.paginator();
      this.datasource.sort = this.sort();
      this.datasource.filter = this.searchText().trim().toLowerCase();
    }
  });

  loadcompanies() {
    this.service.GetCompanies().subscribe((result: CompanyModel[]) => {
      this.companylist = result;
      this.datasource = new MatTableDataSource(this.companylist);
    });
  }

  ngOnInit() {
    this.loadcompanies();
  }


}
