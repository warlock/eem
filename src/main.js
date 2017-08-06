const tck = require('tck')

const eem = {
  func : {},
  on : (ev, callback) => {
    if (tck.isEmpty(ev)) throw new Error('Need event key!')
    else if (!tck.isFunction(callback)) throw new Error('Event needs a function!')
    else if (tck.isArray(ev)) {
      for (let y = 0; y < ev.length; y++) {
        eem.func[ev[y]] = callback
      }
    } else eem.func[ev] = callback
  },
  emit: (ev, data) => {
    if (tck.isEmpty(ev)) throw new Error('No event selected.')
    else if (tck.isArray(ev)) {
      for (let i = 0; i < ev.length; i++) {
        if (tck.isFunction(eem.func[ev[i]])) eem.func[ev[i]](data)
      }
    } else if (tck.isFunction(eem.func[ev])) eem.func[ev](data)
  },
  remove: ev => {
    if (!tck.isEmpty(eem.func[ev])) delete eem.func[ev]
  }
}

if (typeof process === 'object') module.exports = eem
