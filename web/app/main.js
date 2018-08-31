import { app } from 'hyperapp'
import { withFx } from '@hyperapp/fx'
import { Route, Switch, location } from '@hyperapp/router'
import { div, main } from '@hyperapp/html'

import routes from 'App/routes'
import {
	init as initDb,
	makeFx as makeDbFx
} from 'App/database'
import { put, getAll } from 'App/database/fx'

import { Toolbar } from 'App/components'

import 'Style/main.scss'


const state = {
	location: location.state,
}

const actions = {
	addStuff: ([ store, data ]) => put({ store, data, action: 'getStuff' }),
	getStuff: () => getAll({ store: 'app-memories', action: 'done' }),
	done: data => console.log(data),
}

const view = (state, actions) =>
	div({ key: 'root', oncreate: () => actions.addStuff([ 'app-memories', { name: 'Twilight Sparkle', type: 'unicorn' }]) }, [
		Toolbar(state),
		main({ class: 'with-fixed-toolbar' }, [
			Switch({},
				routes.map(
					({ path, view }) =>
						Route({ path, render: ({ match }) => view(state, actions, match) })
				)
			)
		])
	])

initDb()
	.then(db => {
		const rocky = withFx(
			makeDbFx(db)
		) (app) (state, actions, view, document.body)

		location.subscribe(rocky.location)
	})
