import {Component, OnInit} from '@angular/core';
import {ItemService} from "../core/services/item.service";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit{
  array: any = [1,2,3,4];
  constructor(private itemService:ItemService ) {
  }

  ngOnInit(): void {
    this.itemService.loadItems().subscribe(data => {
     this.array = data;
      console.log(data)
    })
  }




}
