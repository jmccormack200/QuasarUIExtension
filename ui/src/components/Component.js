import { QBadge } from 'quasar'

export default {
  name: 'SampleComponent',

  render (h) {
    return h(QBadge, {
      staticClass: 'SampleComponent',
      props: {
        label: 'SampleComponent'
      }
    })
  }
}
