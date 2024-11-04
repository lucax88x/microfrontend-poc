import './shoelace';

import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('my-spinner')
export class Spinner extends LitElement {
  render() {
    return html`<sl-spinner></sl-spinner>`;
  }
}
