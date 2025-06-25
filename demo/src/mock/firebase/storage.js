const __store = new Map()

export function ref(db, path) {
	return `${db}://${path}`
}

export function deleteObject(ref) {
	__store.delete(ref)
}

export function getDownloadURL(ref) {
	__store.get(ref)
}

export function uploadBytesResumable() {
	return {
		on: (eventName, processFn, errorFn, successFn) => {}
	}
}
