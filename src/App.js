import React from 'react'
import { store } from './Store/Store'
import { Provider } from 'react-redux'
import RouteNavigation from './Routes/Router'

function App(){
    return (
        <Provider store={store}>
            <RouteNavigation/>
        </Provider>
    )
}

export default App;