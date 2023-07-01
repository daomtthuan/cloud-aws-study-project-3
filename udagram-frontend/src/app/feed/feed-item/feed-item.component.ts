import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { FeedItem } from '../models/feed-item.model';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedItemComponent implements OnInit {
  @Input() feedItem: FeedItem;

  constructor() {}

  ngOnInit() {}
}
