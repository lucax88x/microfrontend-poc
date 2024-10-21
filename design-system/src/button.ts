import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-button")
export class Button extends LitElement {
  @property({ type: Boolean })
  loading = false;

  render() {
    return html`
      <sl-button class="card-basic" ?loading=${this.loading}>
        <slot name="prefix" slot="prefix"></slot>
        <slot name="label"></slot>
      </sl-button>
    `;
  }
}
