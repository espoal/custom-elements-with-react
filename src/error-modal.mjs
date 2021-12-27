const template = document.createElement('template')

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
`

const refetchHandler = (event) => {
  event.preventDefault()
  console.log({ event })
  console.log('refetch button')
}

const modalHandler = (event) => {
  event.preventDefault()
  console.log({ event })
  console.log('ok button')

}


export class ErrorModal extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot?.appendChild(template.content.cloneNode(true))
    const okbutton = this.shadowRoot?.getElementById('okbutton')
    okbutton?.addEventListener('click', modalHandler)

    const rebutton = this.shadowRoot?.getElementById('refetch')
    rebutton?.addEventListener('click', refetchHandler)
  }

  connectedCallback () {
    const element = this
    console.log({ element })
    const handleLogicProp = element.handler
    console.log({ handleLogicProp })
    const handleLogicRef = element.refHandler
    console.log({ handleLogicRef })

    const testAttr = element.getAttribute('test')
    console.log({ testAttr })



  }

  disconnectedCallback () {
    // TODO: Remove listeners
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log({ name, oldValue, newValue })
  }
}

customElements.define('error-modal', ErrorModal)
