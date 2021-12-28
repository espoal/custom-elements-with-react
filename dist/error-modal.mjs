// pnp:/home/mamluk/Tier/custom-elements-with-react/src/error-modal.mjs
var template = document.createElement("template");
template.innerHTML = `
<style>
.error {
background-color: chartreuse;
width: 400px;
height: 400px;
}
</style>
<div class="error">
<h1>something went wrong, try again</h1>
<button id="okbutton">ok</button>
<button id="refetch">refetch</button>
</div>
`;
var modalHandler = (event) => {
  event.preventDefault();
  console.log({ event });
  console.log("ok button");
};
var ErrorModal = class extends HTMLElement {
  set logicHandler(handler) {
    console.log({ propself: this });
    console.log({ handler });
    this.propLogicHandler = handler;
  }
  set refHandler(handler) {
    console.log({ refself: this });
    console.log({ refHandler: handler });
    this.refLogicHandler = handler;
  }
  constructor() {
    super();
  }
  connectedCallback() {
    const element = this;
    console.log({ element });
    const handleLogicProp = element.propLogicHandler;
    console.log({ handleLogicProp });
    handleLogicProp.logichandler();
    const handleLogicRef = element.refLogicHandler;
    console.log({ handleLogicRef });
    const testAttr = element.getAttribute("test");
    console.log({ testAttr });
    this.attachShadow({ mode: "open" });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
    const okbutton = this.shadowRoot?.getElementById("okbutton");
    okbutton?.addEventListener("click", modalHandler);
    const rebutton = this.shadowRoot?.getElementById("refetch");
    rebutton?.addEventListener("click", handleLogicProp.logichandler);
  }
  disconnectedCallback() {
  }
  attributeChangedCallback(name, oldValue, newValue) {
    console.log({ name, oldValue, newValue });
  }
};
customElements.define("error-modal", ErrorModal);
export {
  ErrorModal
};
