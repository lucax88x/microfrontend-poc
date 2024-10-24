import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-card')
export class Card extends LitElement {
  @property({ type: String }) title = '';
  @property({ type: String }) headerColor = '';
  @property({ type: String }) color = '';
  @property({ type: String }) backgroundColor = '';
  @property({ type: String }) borderColor = '';

  render() {
    return html`
      <sl-card
        style="width: 100%; color: ${this
          .color}; --sl-panel-background-color: ${this
          .backgroundColor};; --border-color: ${this
          .borderColor}; --border-width: 2px"
      >
        <div slot="header">
          <strong style="color: ${this.headerColor}">${this.title}</strong>
        </div>
        <slot></slot>
      </sl-card>
    `;
  }
}
