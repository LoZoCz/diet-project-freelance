import { getDownloadURL, ref } from 'firebase/storage'
import { storage } from './storage'

// Function to retrieve the download link based on the product name
async function getFileURL(productName: string): Promise<string | null> {
    try {
        // Normalize product name to match the file naming convention in Firebase Storage
        const normalizedProductName = productName
            .toLowerCase()
            .replace(/\s+/g, '-')

        // Create a reference to the file in Firebase Storage
        const fileRef = ref(storage, `diets/${normalizedProductName}.docx`)

        // Fetch the download URL
        const downloadURL = await getDownloadURL(fileRef)
        return downloadURL
    } catch (error) {
        console.error('Error fetching download URL:', error)
        return null
    }
}

export default getFileURL
