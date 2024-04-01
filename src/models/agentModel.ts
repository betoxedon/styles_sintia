import { z } from 'zod'

const nicknameSchema = z.string().min(3).max(15)
const identifierSchema = z.string().min(3).max(15)
const createdAtSchema = z.number().default(0)
const updatedAtSchema = z.number().default(0)
const docIdSchema = z.string().min(20).max(24)
const userIdSchema = z.string().min(20).max(24)
const welcomeMessageSchema = z
   .string()
   .min(3)
   .max(40)
   .default('Olá!👋 Como posso te ajudar?')
const colorIdSchema = z.string().min(3).max(40).default('id01')
const colorStyleSchema = z.string().max(255).default('')
const fontFamilyIdSchema = z.string().min(3).max(40).default('id01')
const fontFamilyStyleSchema = z.string().max(255).default('')
const screenSideIdSchema = z.string().min(3).max(40).default('id01')
const screenSideStyleSchema = z.string().max(255).default('')
const imageUrlSchema = z.string().default('')
const allowedDomainsSchema = z.array(z.string()).default([])
const agentSchema = z.object({
   nickname: nicknameSchema,
   identifier: identifierSchema,
   createdAt: createdAtSchema,
   updatedAt: updatedAtSchema,
   docId: docIdSchema,
   userId: userIdSchema,
   welcomeMessage: welcomeMessageSchema,
   colorId: colorIdSchema,
   colorStyle: colorStyleSchema,
   fontFamilyId: fontFamilyIdSchema,
   fontFamilyStyle: fontFamilyStyleSchema,
   screenSideId: screenSideIdSchema,
   screenSideStyle: screenSideStyleSchema,
   imageUrl: imageUrlSchema,
   allowedDomains: allowedDomainsSchema,
})

type Agent = z.infer<typeof agentSchema>

export { agentSchema }
export type { Agent }
