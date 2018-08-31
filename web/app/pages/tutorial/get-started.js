import { article, h1, div, input, button } from '@hyperapp/html'
import { Link } from '@hyperapp/router'


export const state = {}

export const actions = {}

export const view = (state, actions) =>
	article([
		h1('Get started'),
		Link({ class: 'btn primary' }, 'Go'),
		div({ class: 'bg-danger' }, 'Danger'),
		div({ class: 'bg-danger-dark' }, 'Danger'),
		div({ class: 'bg-danger-darker' }, 'Danger'),
		div({ class: 'bg-warning' }, 'Warning'),
		div({ class: 'bg-warning-dark' }, 'Warning'),
		div({ class: 'bg-warning-darker' }, 'Warning'),
		div({ class: 'bg-info' }, 'Info'),
		div({ class: 'bg-info-dark' }, 'Info'),
		div({ class: 'bg-info-darker' }, 'Info'),
		input({ type: 'text', placeholder: 'Enter potato...' }),
		div({ class: 'floating-btns' }, [
			button({ class: 'btn primary fa fa-calendar' }),
			button({ class: 'btn primary fa fa-plus' }),
		])
	])
