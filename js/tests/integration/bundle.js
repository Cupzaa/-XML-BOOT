import 'popper.js' // eslint-disable-line import/no-unassigned-import
import { Tooltip } from '../../../dist/js/bootstrap.esm.js' // eslint-disable-line import/extensions

window.addEventListener('load', () => {
  [...document.querySelectorAll('[data-toggle="tooltip"]')]
    .map(tooltipNode => new Tooltip(tooltipNode))
})
