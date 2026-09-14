/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, PropertyValues} from 'lit';
import {customElement, property} from 'lit/decorators.js';

export type CellSlotsChangeEvent = CustomEvent<
  Array<{name: string; tabId: string; column: string}>
>;

/**
 * My awesome element
 *
 * @slot tab-<id>-icon - A dynamic slot for icons
 * @slot cell-<column>-<tabId> - A dynamic slot whose names the element computes
 * @fires {CellSlotsChangeEvent} cell-slots-change - Fired when `cellSlots` changes
 */
@customElement('element-slots')
export class ElementSlots extends LitElement {
  @property()
  mainDefault = 'mainDefault';

  @property({type: Array})
  tabs: Array<{id: string; title: string}> = [];

  get cellSlots() {
    return this.tabs.map((tab) => ({
      name: `cell-title-${tab.id}`,
      tabId: tab.id,
      column: 'title',
    }));
  }

  override updated(changed: PropertyValues<this>) {
    if (changed.has('tabs')) {
      this.dispatchEvent(
        new CustomEvent('cell-slots-change', {detail: this.cellSlots})
      );
    }
  }

  override render() {
    return html`<h1>Slots</h1>
      <slot name="header"></slot>
      <slot name="main">${this.mainDefault}</slot>
      <slot name="footer"></slot>
      <slot name="tab-title-0"></slot>
      <slot name="tab-<id>-icon"></slot>
      ${this.cellSlots.map((cell) => html`<slot name=${cell.name}></slot>`)}
      <slot></slot>`;
  }
}
