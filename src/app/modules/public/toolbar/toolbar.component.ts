import { Component, OnInit } from '@angular/core';

import { StorageService } from "../../../services/storage/storage.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private storage: StorageService) { }

  ngOnInit(): void {
  }

  logout() {
    this.storage.clear();
  }
}
