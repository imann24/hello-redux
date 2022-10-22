import React from 'react'

// source: https://www.npmjs.com/package/react-error-boundary
const ErrorFallback = ({error, resetErrorBoundary}) => {
    return (
      <div role="alert">
        <p><b>Something went wrong:</b></p>
        <p>{error.message}</p>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    )
  }

  export default ErrorFallback
