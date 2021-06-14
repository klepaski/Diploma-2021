import {createStore, declareAction, declareAtom, combine} from '@reatom/core'
import {offersAtom} from './offers/atoms'
import {usersAtom} from './users/atoms'

const rootAtom = combine({ offers: offersAtom, users: usersAtom })

export const store = createStore(rootAtom)

// console.log(store.getState(rootAtom))

store.subscribe(rootAtom,() => console.log(store.getState(rootAtom)))

// const fetchUserDone = declareAction()
// const fetchUser = declareAction(
//     'name', // or type - optional
//     (payload, store) => axios.get('/api/v1/user/5dad667766e5613bc660d62f', payload)
//         .then(response => store.dispatch(fetchUserDone(response)))
// )
// const testAtom = declareAtom('name', 'test', () => {})
// store.dispatch(fetchUser(1))
//
// store.subscribe(fetchUserDone, fetchUserDone => console.log('count: ', fetchUserDone))