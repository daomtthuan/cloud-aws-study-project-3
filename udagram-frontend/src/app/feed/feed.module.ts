import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedItemComponent } from './feed-item/feed-item.component';
import { FeedListComponent } from './feed-list/feed-list.component';
import { FeedUploadButtonComponent } from './feed-upload/feed-upload-button/feed-upload-button.component';
import { FeedUploadComponent } from './feed-upload/feed-upload.component';
import { FeedProviderService } from './services/feed.provider.service';

const entryComponents = [FeedUploadComponent];
const components = [FeedListComponent, FeedItemComponent, FeedUploadComponent, FeedUploadButtonComponent];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule],
  declarations: components,
  exports: components,
  entryComponents: entryComponents,
  providers: [FeedProviderService],
})
export class FeedModule {}
