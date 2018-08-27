const writeAction = name => ({ store, data, action, error=action }) =>
	[ name, {
		store,
		data,
		action,
		error,
	}]

const readAction = name => ({ store, key, action, error=action }) =>
	[ name, {
		store,
		key,
		action,
		error,
	}]

export const add = writeAction('add')
export const put = writeAction('put')
export const remove = writeAction('delete')
export const clear = writeAction('clear')

export const get = readAction('get')
export const getAll = readAction('getAll')

const makeWriteAction = op => db => ({ store, data, action, error }, getAction) => {
	const tx = db.transaction(store, 'readwrite')
	tx.objectStore(store)[op](data)
	tx.complete
		.then(() =>
			getAction(action) ()
		)
		.catch(e =>
			getAction(error) (e)
		)
}

const makeReadAction = op => db => ({ store, key, action, error=action }, getAction) =>
	db.transaction(store)
		.objectStore(store)[op](key)
		.then(data => getAction(action) (data))
		.catch(error => getAction(error) (error))

export const makeFx = db =>
	({
		add: makeWriteAction('add') (db),
		put: makeWriteAction('put') (db),
		remove: makeWriteAction('delete') (db),
		clear: makeWriteAction('clear') (db),
		get: makeReadAction('get') (db),
		getAll: makeReadAction('getAll') (db),
	})
