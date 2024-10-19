import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-card")
export class Card extends LitElement {
  @property({ type: String }) title = "";

  render() {
    return html`
      <sl-card class="card-header" style="width: 100%;" }>
        <div slot="header">${this.title}</div>
        <slot></slot>
      </sl-card>
    `;
  }
}
