var tck = require('tck')

var eem = {
  func : {},
  on : function (ev, callback) {
    if (tck.isEmpty(ev)) throw new Error('Need event!')
    else if (!tck.isFunction(callback)) throw new Error('Event needs a function!')
    else if (tck.isArray(ev)) {
      for (var y = 0; y < ev.length; y++) {
        eem.func[ev[y]] = callback
      }
    } else eem.func[ev] = callback
  },
  emit : function (ev, data) {
    if (tck.isEmpty(ev)) throw new Error('No event selected.')
    else if (tck.isArray(ev)) {
      for (var i = 0; i < ev.length; i++) {
        if (tck.isFunction(eem.func[ev[i]])) eem.func[ev[i]](data)
      }
    } else if (tck.isFunction(eem.func[ev])) {
      eem.func[ev](data)
    }
  },
  remove : function (ev) {
    if (tck.isEmpty(ev)) throw new Error('No event selected.')
    else if (!tck.isEmpty(eem.func[ev])) delete eem.func[ev]
  }
}

if (typeof process === 'object') module.exports = eem
