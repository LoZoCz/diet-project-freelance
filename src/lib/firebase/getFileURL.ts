import { getDownloadURL, ref } from 'firebase/storage'
import { storage } from './storage'
import simplifyText from '../simplifyText'

async function getFileURL(productName: string): Promise<string | null> {
    try {
        const normalizedProductName = simplifyText(productName)

        const fileRef = ref(storage, `diets/${normalizedProductName}.pdf`)

        const downloadURL = await getDownloadURL(fileRef)
        return downloadURL
    } catch (error) {
        console.error('Error fetching download URL:', error)
        return null
    }
}

export default getFileURL
