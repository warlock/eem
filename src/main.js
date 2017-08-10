const tck = require('tck')

const eem = {
  event_stack: {},
  
  /**
   * @param {String} ev : The name of event.
   * @param {Function} callback : Function executed when event is triggered.
   * @returns {undefined}
   */
  on: (ev, callback) => {
    if (tck.isEmpty(ev)) throw new Error('Need event key!')
    else if (!tck.isFunction(callback)) throw new Error('Event needs a function!')
    else if (tck.isArray(ev)) {
      for (let y = 0; y < ev.length; y++) {
        this.event_stack[ev[y]] = callback
      }
    } else this.event_stack[ev] = callback
  },

  /**
   * @param {String} ev : The name of event.
   * @param {Any} data : Data for a event callback.
   * @returns {undefined}
   */
  emit: (ev, data) => {
    if (tck.isEmpty(ev)) throw new Error('No event selected.')
    else if (tck.isArray(ev)) {
      for (let i = 0; i < ev.length; i++) {
        if (tck.isFunction(this.event_stack[ev[i]])) this.event_stack[ev[i]](data)
      }
    } else if (tck.isFunction(this.event_stack[ev])) this.event_stack[ev](data)
  },

  /**
   * @param {String} ev : The name of event for destroy.
   * @returns {undefined}
   */
  delete: ev => {
    if (!tck.isEmpty(this.event_stack[ev])) delete this.event_stack[ev]
  }
}

if (typeof process === 'object') module.exports = eem
