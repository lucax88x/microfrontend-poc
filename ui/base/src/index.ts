import indexStyles from "#styles/index.scss?inline";

export { Button } from "#button";

import { css, html, LitElement, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("poc-root")
export class Root extends LitElement {
	static styles = css`
      ${unsafeCSS(indexStyles)}

      section { 
        border: 1px solid #ddd;
        padding: 1rem;
        margin: 1rem 0;
        border-radius: 4px;

        .content {
          display: flex;
          flex-direction: row;
          gap: 1em;
        }

        .content-column {
          display: flex;
          flex-direction: column;
          gap: 1em;
        }
      }
      section[title]::before {
        content: attr(title);
        display: block;
        font-weight: bold;
        margin-bottom: 0.5rem;
        color: #2c3e50;
        text-transform: capitalize;
      }
  `;

	render() {
		return html`
      <section title="buttons">
        <poc-button>
          <span slot="prefix"><poc-post-icon icon="home"></poc-post-icon></span>
          <span slot="label">button</span>
        </poc-button>

        <poc-button loading>
          <span slot="prefix"><poc-post-icon icon="home"></poc-post-icon></span>
          <span slot="label">button</span>
        </poc-button>
      </section>
    `;
	}
}
