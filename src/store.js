import {createStore} from 'vuex'

const store = createStore({
    state() {
        return {
            name: 'kim',
            age: 20,
        }
    },
    mutations: {
        changeName(state) {
            state.name = 'park';
        },
        plusAge(state) {
            state.age++;
        }
    },
})

export default store;