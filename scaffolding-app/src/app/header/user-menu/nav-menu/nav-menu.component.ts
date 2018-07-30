import { Component, OnInit, Input } from '@angular/core';
import { Link } from './nav-menu.model';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  @Input()
  showMenu: boolean;
  links: Link[] = [new Link('Test', 'Test', 'tust')];

  constructor() {}

  ngOnInit() {}
}
