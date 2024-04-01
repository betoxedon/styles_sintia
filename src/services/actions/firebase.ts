import { firestore, doc, getDoc } from '../config/firebase-config'

export const actionGetAgentFirestore = async (docId: string) => {
   try {
      const docRef = doc(firestore, 'agents', docId)
      const docSnap = await getDoc(docRef)
      return docSnap.data()
   } catch (error) {
      console.error(error)
   }
}
