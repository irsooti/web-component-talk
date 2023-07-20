/**
 * - ⚠️ Client render only
 * - ✅ No external dependencies
 * - ✅ Dry
 * - ⚠️ Layout shift
 */
class Counter extends HTMLElement {
  connectedCallback() {
    const template = document.querySelector(
      "#counter-template"
    ) as HTMLTemplateElement;

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.content.cloneNode(true));

    shadowRoot.querySelector("button")?.addEventListener("click", () => {
      const number = Number(this.innerText);

      this.textContent = String(number + 1);
    });
  }
}

customElements.define("my-counter", Counter);
