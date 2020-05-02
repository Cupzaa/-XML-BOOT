import 'popper.js' // eslint-disable-line import/no-unassigned-import
import Tooltip from '../../dist/tooltip'

window.addEventListener('load', () => {
  [...document.querySelectorAll('[data-toggle="tooltip"]')]
    .map(tooltipNode => new Tooltip(tooltipNode))
})
