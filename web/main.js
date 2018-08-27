import { app } from 'hyperapp'
import { withFx, action } from '@hyperapp/fx'
import { Route, Switch, location } from '@hyperapp/router'
import { div, main, h1 } from '@hyperapp/html'

import routes from 'App/routes'
import { init as initDb, makeFx as makeDbFx } from 'App/database'
import { put, getAll } from 'App/database/fx'

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
		main({}, [
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
