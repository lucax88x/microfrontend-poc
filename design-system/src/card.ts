import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("my-card")
export class Card extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: 2px solid #ccc;
      border-radius: 8px;
      padding: 16px;
      margin: 16px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    ::slotted(*) {
      margin: 8px 0;
    }
  `;

  render() {
    return html`
      <div class="card">
        <slot></slot>
      </div>
    `;
  }
}
