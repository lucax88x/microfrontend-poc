import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("my-button")
export class Button extends LitElement {
  render() {
    return html`
      <sl-button class="card-basic">
        <slot></slot>
      </sl-button>
    `;
  }
}
