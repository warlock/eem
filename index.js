var eem = {
  func : {},
  on : function (ev, callback) {
    if (ev === undefined || ev === null || ev === "") throw new Error('Need event')
    else if (ev instanceof Array) {
      for (var y = 0; y < ev.length; y++) {
        if (typeof callback !== 'function') throw Error('Event need function')
        else this.func[ev[y]] = callback
      }
    } else if (typeof callback !== 'function') throw Error('Event need function')
    else this.func[ev] = callback
  },
  emit : function (ev, data) {
    if (ev === undefined || ev === null || ev === "") throw new Error('No event selected.')
    else if (ev instanceof Array) {
      for (var i = 0; i < ev.length; i++) {
        if (typeof this.func[ev[i]] === 'function') this.func[ev[i]](data)
      }
    } else if (typeof this.func[ev] === 'function') this.func[ev](data)
  },
  remove : function (ev) {
    if (ev === undefined || ev === null || ev === "") throw new Error('No event selected.')
    else if (this.func[ev] === undefined) throw Error('This event not exist')
    else delete this.func[ev]
  }
}

if (typeof process === 'object') module.exports = eem
