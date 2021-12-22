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
  }

  connectedCallback () {
    console.log({ element: this })
    const handleChange = this.getAttribute('change')
    console.log({ handleChange })

    this.attachShadow({ mode: 'open' })
    this.shadowRoot?.appendChild(template.content.cloneNode(true))
    const okbutton = this.shadowRoot?.getElementById('okbutton')
    okbutton?.addEventListener('click', modalHandler)

    const rebutton = this.shadowRoot?.getElementById('refetch')
    rebutton?.addEventListener('click', refetchHandler)
  }

  disconnectedCallback () {
    // TODO: Remove listeners
  }
}

customElements.define('error-modal', ErrorModal)
