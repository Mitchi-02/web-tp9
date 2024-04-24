import { Component } from '@angular/core';
import { ItemsService } from '../items.service';
import { Item } from '../../../types';

@Component({
  selector: 'items-list',
  standalone: true,
  imports: [],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css',
})
export class ItemsComponent {
  data: Item[] = [];

  constructor(private itemService: ItemsService) {
    this.itemService.index().subscribe((response) => {
      this.data = response.data;
    });
  }

  delete(id: string) {
    this.itemService.destroy(id).subscribe((response) => {
      this.data = this.data.filter((item) => item._id !== id);
      console.log(response);
    });
  }
}
