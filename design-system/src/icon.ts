import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import {
  createElement,
  Menu,
  Home,
  Search,
  Bell,
  User,
  Download,
} from "lucide";

type Icons = "menu" | "home" | "search" | "bell" | "user" | "download";

@customElement("my-icon")
export class Icon extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }
  `;

  @property({ type: String }) stroke = "#333";
  @property() icon: Icons = "menu";

  @state() svgIcon: SVGElement | null = null;

  firstUpdated() {
    this.updateIcon();
  }

  updated(changedProperties: any) {
    if (changedProperties.has("stroke") || changedProperties.has("icon")) {
      this.updateIcon();
    }
  }

  updateIcon() {
    this.svgIcon = this.getIcon(this.icon);
  }

  getIcon(icon: Icons): SVGElement {
    switch (icon) {
      case "menu":
        return createElement(Menu);
      case "home":
        return createElement(Home);
      case "bell":
        return createElement(Bell);
      case "user":
        return createElement(User);
      case "search":
        return createElement(Search);
      case "download":
        return createElement(Download);
    }
  }

  render() {
    return html`${this.svgIcon}`;
  }
}
