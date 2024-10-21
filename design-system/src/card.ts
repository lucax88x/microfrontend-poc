import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-card")
export class Card extends LitElement {
  @property({ type: String }) title = "";
  @property({ type: String }) color = "";
  @property({ type: String }) backgroundColor = "";

  render() {
    return html`
      <sl-card class="card-header" style="width: 100%; color: ${this.color}; --sl-panel-background-color: ${this.backgroundColor};">
        <div slot="header">${this.title}</div>
        <slot></slot>
      </sl-card>
    `;
  }
}
