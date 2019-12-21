import '@css/base.css'
import '@css/style.scss'
import defaultFunction, { greeting, testAwait } from '@js/index'
import '@js/jquery.lib'

if (process.env.NODE_ENV !== 'production') {
  require('./index.html')
}

greeting()
testAwait()
defaultFunction()
