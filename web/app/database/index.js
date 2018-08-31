import idb from 'idb'
export { makeFx } from './fx'


const DB_NAME = 'rocky'
const DB_VERSION = 1

export const init = () =>
	idb.open(DB_NAME, DB_VERSION, upgradeDb => {
		upgradeDb.createObjectStore('app-config')
		const memories = upgradeDb.createObjectStore('app-memories', { keyPath: 'id', autoIncrement: true})
		memories.createIndex('category', 'category')
	})
