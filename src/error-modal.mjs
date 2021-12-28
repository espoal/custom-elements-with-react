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

  set logicHandler(handler) {
    console.log({ propself: this})
    console.log({ handler })
    this.propLogicHandler = handler
  }

  set refHandler(handler) {
    console.log({ refself: this})
    console.log({ refHandler: handler })
    this.refLogicHandler = handler
  }

  constructor () {
    super()
    // React has not initialized yet
    /*const element = this
    console.log({ element })
    const handleLogicProp = element.proplogichandler
    console.log({ handleLogicProp })
    const handleLogicRef = element.reflogichandler
    console.log({ handleLogicRef })

    const testAttr = element.getAttribute('test')
    console.log({ testAttr })*/


  }

  connectedCallback () {
    const element = this
    console.log({ element })
    const handleLogicProp = element.propLogicHandler
    console.log({ handleLogicProp })
    handleLogicProp.logichandler()
    const handleLogicRef = element.refLogicHandler
    console.log({ handleLogicRef })


    const testAttr = element.getAttribute('test')
    console.log({ testAttr })

    this.attachShadow({ mode: 'open' })
    this.shadowRoot?.appendChild(template.content.cloneNode(true))
    const okbutton = this.shadowRoot?.getElementById('okbutton')
    okbutton?.addEventListener('click', modalHandler)

    const rebutton = this.shadowRoot?.getElementById('refetch')
    rebutton?.addEventListener('click', handleLogicProp.logichandler)



  }

  disconnectedCallback () {
    // TODO: Remove listeners
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log({ name, oldValue, newValue })
  }
}

customElements.define('error-modal', ErrorModal)
