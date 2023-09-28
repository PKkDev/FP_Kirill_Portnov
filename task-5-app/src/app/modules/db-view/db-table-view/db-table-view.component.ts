import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { TableType } from '../model/types';
import { GetTitle, getColumns } from './db-table-view.constants';

@Component({
  selector: 'app-db-table-view',
  templateUrl: './db-table-view.component.html',
  styleUrls: ['./db-table-view.component.scss']
})
export class DbTableViewComponent implements AfterViewInit {

  @Input() type!: TableType;
  @Input() data: any[] = [];

  @Output() selectionChange: EventEmitter<any> = new EventEmitter<any>();

  public columns: string[] = [];
  public title: string = '';

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.title = GetTitle(this.type);
    this.columns = getColumns(this.type);
    this.cdr.detectChanges();
  }

  public onSelect(item: any) {
    this.selectionChange.next(item)
  }

}
