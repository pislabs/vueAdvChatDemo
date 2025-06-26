import { initializeApp } from 'firebase/app'
import { getDatabase, connectDatabaseEmulator } from 'firebase/database'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
import { getStorage, connectStorageEmulator } from 'firebase/storage'
// import { getAuth, connectAuthEmulator } from 'firebase/auth'

const config =
	import.meta.env.MODE === 'development'
		? JSON.parse(import.meta.env.VITE_APP_FIREBASE_CONFIG)
		: JSON.parse(import.meta.env.VITE_APP_FIREBASE_CONFIG_PUBLIC)

initializeApp(config)

export const firestoreDb = getFirestore()
export const realtimeDb = getDatabase()
export const storage = getStorage()
// export const auth = getAuth()

// 使用本地模拟器
if (window.location.hostname === 'localhost') {
	connectDatabaseEmulator(realtimeDb, 'localhost', 9000)
	connectFirestoreEmulator(firestoreDb, 'localhost', 8080)
	connectStorageEmulator(storage, 'localhost', 9199)
	// connectAuthEmulator(auth, 'localhost', 9099)
}

// export const firestoreDb = 'firestoreDb'
// export const realtimeDb = 'realtimeDb'
// export const storage = 'storage'
