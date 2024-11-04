const simplifyText = (text: string) => {
    return text
        .toLowerCase()
        .replace(/[.,\/\\]/g, '')
        .replace(/\s+/g, '-')
}

export default simplifyText
