import { computed, Injectable, signal } from '@angular/core';
import { max } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Loader {

  private requestCount = signal(0);

  isloading = computed(() => this.requestCount() > 0);

  show() {
    this.requestCount.update(count => count + 1);
  }

  Hide() {
    setTimeout(() => {
      this.requestCount.update(count => Math.max(0, count - 1));
    }, 3000)

  }

}
