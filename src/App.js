import React from 'react'
import { store } from './Store/Store'
import { Provider } from 'react-redux'
// import TabRouter from './Routes/Router'
import StackRouter from './Routes/Router'

function App(){
    return (
        <Provider store={store}>
            <StackRouter/>
        </Provider>
    )
}

export default App;