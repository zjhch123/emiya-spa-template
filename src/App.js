import '@css/base.css';
import '@css/style.scss';
import defaultFunction, { greeting, testAwait } from '@js/index';
import '@js/jquery.lib';

if (module.hot) {
  module.hot.accept();
}

greeting();
testAwait();
defaultFunction();
