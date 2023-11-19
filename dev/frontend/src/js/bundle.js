//scripts
import {header} from './layout/header'
import { pagetop } from './modules/pagetop'
import { common } from './modules/common'
import { hamburger } from './modules/hamburger'
import {linkNoOpener} from './modules/linkNoOpener'
import innerLinkSummery from './modules/innerLink'

window.addEventListener('DOMContentLoaded', () => {
  header();
  if (document.querySelector('.js-pagetop') != null) {
    pagetop();
  }
  linkNoOpener();
  innerLinkSummery();
})