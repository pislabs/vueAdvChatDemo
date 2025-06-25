const __docs = [{ id: 0, ref: 0, data: {} }]

/**
 * 获取文档
 * @param {*} query
 * @returns
 */
export async function getDocs(query) {
	return __docs.map(it => {
		return { id: it.id, data: () => it }
	})
}

/**
 * 获取查询
 * @param {*} ref
 * @returns
 */
export function query(ref) {
	return { type: query, ref }
}

export function addDoc() {}
export function arrayRemove() {}
export function arrayUnion() {}
export function collection() {}
export function deleteDoc() {}
export function deleteField() {}
export function doc() {}
export function endAt() {}
export function getDoc() {}
export function limit() {}
export function onSnapshot() {}
export function orderBy() {}
export function setDoc() {}
export function startAfter() {}
export function startAt() {}
export function updateDoc() {}
export function where() {}
