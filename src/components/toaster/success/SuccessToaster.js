
const SuccessToaster = (toast, msg) => {
    toast({
        title: 'Success',
        description: msg || "Success ",
        status: 'success',
        duration: 5000,
        position: 'top',
        isClosable: true,
    })
}

export default SuccessToaster
