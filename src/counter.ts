/**
 * - ✅ Good for SSR
 * - ✅ No external dependencies
 * - ✅ Progressive enhancement (senza layout shift)
 */
class Counter extends HTMLElement {
  connectedCallback() {
    this.querySelector("button")?.addEventListener("click", (evt) => {
      const target = evt.currentTarget as HTMLButtonElement;
      const number = Number(target.textContent);

      target.textContent = String(number + 1);
    });
  }
}

customElements.define("my-counter", Counter);
