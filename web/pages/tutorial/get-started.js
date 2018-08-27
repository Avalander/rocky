import { article, h1, button } from '@hyperapp/html'
import { Link } from '@hyperapp/router'

import { put, add } from 'App/database/fx'


export const state = {}

export const actions = {}

export const view = (state, actions) =>
	article([
		h1('Get started'),
		Link({ class: 'btn primary' }, 'Go'),
	])
