import "#shoelace";
import "@shoelace-style/shoelace/dist/components/button/button.js";
import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

type ButtonType = "button" | "submit";

@customElement("poc-button")
export class Button extends LitElement {
	@property({ type: Boolean })
	loading = false;

	@property()
	type: ButtonType = "button";

	private handleFocus() {
		this.dispatchEvent(
			new CustomEvent("button-focus", {
				bubbles: true,
				composed: true,
				detail: {
					timestamp: Date.now(),
				},
			}),
		);
	}

	render() {
		return html`
      <sl-button 
        class="card-basic" 
        ?loading=${this.loading} 
        type=${this.type}
        @focus=${this.handleFocus}
      >
        <slot name="prefix" slot="prefix"></slot>
        <slot name="label"></slot>
      </sl-button>
    `;
	}
}
