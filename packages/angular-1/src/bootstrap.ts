import "zone.js";
import { bootstrapApplication } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

export function bootstrap() {
  console.log("bootstraping angular");
  return bootstrapApplication(AppComponent);
}
