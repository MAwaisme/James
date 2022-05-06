import React from 'react'

const ErrorToaster = (toast, error) => {
    toast({
        title: 'Error',
        description: error || 'an error occured',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
    })
}

export default ErrorToaster
