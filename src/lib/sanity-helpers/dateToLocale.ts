export const dateToLocale = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleString('pl-PL', {
        dateStyle: 'medium',
        timeStyle: 'short',
    })
}
