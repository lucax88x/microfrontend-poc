import "./shoelace";

import { LitElement, css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import index from "./index.css?inline";
import { purgeEmpty } from "./purgeEmpty";

@customElement("my-card")
export class Card extends LitElement {
	static styles = css`${unsafeCSS(index)}`;

	@property({ type: String }) title = "";
	@property({ type: String }) headerColor = "";
	@property({ type: String }) color = "";
	@property({ type: String }) backgroundColor = "";
	@property({ type: String }) borderColor = "";

	render() {
		const styles = {
			color: `${this.color}`,
			"--sl-panel-background-color": `${this.backgroundColor}`,
			"--border-color": `${this.borderColor}`,
			"--border-width": "2px",
		};

		return html`
      <sl-card class="ui-w-full" style=${styleMap(purgeEmpty(styles))}>
        <div slot="header">
          <strong style="color: ${this.headerColor}">${this.title}</strong>
        </div>
        <slot></slot>
      </sl-card>
    `;
	}
}
