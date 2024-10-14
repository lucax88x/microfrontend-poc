import "zone.js";
import { bootstrapApplication } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

export function bootstrap(div: string) {
  console.log(div);
  return bootstrapApplication(AppComponent);
}
