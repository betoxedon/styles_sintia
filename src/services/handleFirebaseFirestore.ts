import { actionGetAgentFirestore } from './actions/firebase'

export const getAgentFirestore = async (docId: string) => {
   const res = await actionGetAgentFirestore(docId)
   return res
}
