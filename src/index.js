import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { ErrorBoundary } from 'react-error-boundary'
import store from './store'
import ErrorFallback from './ErrorFallback'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
    <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Provider store={store}>
            <App />
        </Provider>
    </ErrorBoundary>
)
