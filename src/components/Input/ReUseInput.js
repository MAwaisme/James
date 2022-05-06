import { Input } from '@chakra-ui/react'
import React from 'react'

const ReUseInput = ({ error, magic }) => {
    return (
        <>
            <Input backgroundColor={error ? "red.100" : null} variant='filled' type={'text'} placeholder={magic ? 'magic gardens' : null} />
        </>
    )
}

export default ReUseInput