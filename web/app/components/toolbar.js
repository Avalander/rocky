import { header, i } from '@hyperapp/html'
import { Link } from '@hyperapp/router'
import { fromNullable } from '@avalander/fun/src/maybe'

import routes from 'App/routes'


export default ({ location }) =>
	header({ key: 'toolbar', class: 'toolbar fixed' }, [
		i({ class: 'fa fa-bars pointer toolbar-icon' }),
		Link({ class: 'pointer toolbar-title', to: '/' }, getTitle(location)),
	])

const getTitle = ({ pathname }) =>
	fromNullable(
		routes.find(({ path }) => path === pathname)
	)
	.fold(
		() => 'Learn Stuff',
		({ title }) => title || 'Learn Stuff'
	)
