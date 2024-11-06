import "./shoelace";

import { LitElement, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-drawer")
export class Drawer extends LitElement {
	@property({ type: String }) title = "";
	@property({ type: Boolean }) open = false;

	render() {
		return html`
      <sl-drawer
        label="${this.title}"
        class="drawer-overview"
        open="${this.open || nothing}"
        @sl-hide="${() => this.closeDrawer()}"
      >
        <slot></slot>
        <my-button slot="footer" variant="primary" @click="${this.closeDrawer}"
          >Close</my-button
        >
      </sl-drawer>
    `;
	}

	private closeDrawer() {
		this.open = false;

		this.dispatchEvent(
			new CustomEvent("drawer-closed", {
				bubbles: true,
				composed: true,
			}),
		);
	}
}
