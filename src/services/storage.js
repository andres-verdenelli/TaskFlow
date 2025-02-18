export const StorageService = {
  get: key => {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : null
  },
  set: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
  },
  remove: key => {
    localStorage.removeItem(key)
  },
}

// export const StorageService = {
//   get: key => {
//     const item = localStorage.getItem(key)
//     console.log(`Raw data from localStorage (${key}):`, item)

//     if (!item || item === 'undefined' || item === 'null') {
//       return null
//     }

//     try {
//       return JSON.parse(item)
//     } catch (error) {
//       console.error(`❌ Error al parsear JSON de "${key}":`, error, item)
//       return null // Evita que la app se rompa
//     }
//   },
//   set: (key, value) => {
//     if (value === undefined || value === null) {
//       console.error(
//         `❌ Intentaste guardar un valor inválido en "${key}"`,
//         value
//       )
//       return
//     }
//     localStorage.setItem(key, JSON.stringify(value))
//   },
// }
