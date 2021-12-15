import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../mark-the-words.js';

describe('MarkTheWords', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<mark-the-words></mark-the-words>`);
  });

  it('renders paragraph', () => {
    const paragraph = element.shadowRoot
    .querySelector('#textArea');
    expect(paragraph).to.exist;
  });

  

  it('renders prompt', () => {
    const prompt = element.shadowRoot
    .querySelector('#promptArea');
    expect(prompt).to.exist;
  });
});
