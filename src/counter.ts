/**
 * ✅ Server rendered (except firefox)
 * ✅ No external dependencies
 * ✅ Encapsulation
 * ✅ Progressive enhancement (senza layout shift)
 */

class Counter extends HTMLElement {
  connectedCallback() {
    this.addEventListener("click", () => {
      const number = Number(this.innerText);

      this.textContent = String(number + 1);
    });
  }
}

customElements.define("my-counter", Counter);
