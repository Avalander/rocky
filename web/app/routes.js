import * as tutorial from 'App/pages/tutorial'


export default [{
	path: '/tutorial/1',
	title: 'Get Started',
	view: tutorial.getStarted.view,
}, {
	path: '/',
	view: tutorial.getStarted.view,
}]
