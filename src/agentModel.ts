import { z } from 'zod'

// [file]
const maxFileSize = 1000 * 1000 * 2
const acceptedImageMimeTypes = ['image/jpeg', 'image/jpg', 'image/png']
const imageFileSchema = z
   .any()
   .refine((files) => {
      return files?.imageFile?.size <= maxFileSize
   }, `2MB no máximo.`)
   .refine(
      (files) => acceptedImageMimeTypes.includes(files?.imageFile?.type),
      'Extensões aceitas .jpg, .jpeg, .png.',
   )

// [initial]
const nicknameSchema = z.string().min(3).max(15)
const identifierSchema = z.string().min(3).max(15)
const agentInitialSchema = z.object({
   nickname: nicknameSchema,
   identifier: identifierSchema,
})

// [additional]
const createdAtSchema = z.number()
const updatedAtSchema = z.number()
const docIdSchema = z.string().min(20).max(24)
const userIdSchema = z.string().min(20).max(24)
const welcomeMessageSchema = z
   .string()
   .min(3)
   .max(40)
   .default('Olá!👋 Como posso te ajudar?')
const screenSideIdSchema = z.string().min(3).max(40).default('id01')
const screenSideStyleSchema = z.string().max(255).default('')
const colorIdSchema = z.string().min(3).max(40).default('id01')
const fontFamilyIdSchema = z.string().min(3).max(40).default('id01')
const colorStyleSchema = z.string().max(255).default('')
const fontFamilyStyleSchema = z.string().max(255).default('')
const imageUrlSchema = z.string().default('')
const allowedDomainsSchema = z.array(z.string()).default([])
const agentAdditionalSchema = z.object({
   createdAt: createdAtSchema,
   updatedAt: updatedAtSchema,
   docId: docIdSchema,
   userId: userIdSchema,
   welcomeMessage: welcomeMessageSchema,
   screenSideId: screenSideIdSchema,
   screenSideStyle: screenSideStyleSchema,
   colorId: colorIdSchema,
   fontFamilyId: fontFamilyIdSchema,
   colorStyle: colorStyleSchema,
   fontFamilyStyle: fontFamilyStyleSchema,
   imageUrl: imageUrlSchema,
   allowedDomains: allowedDomainsSchema,
})

const agentSchema = z.object({
   ...agentInitialSchema.shape,
   ...agentAdditionalSchema.shape,
})

// [type]
type ImageFile = z.infer<typeof imageFileSchema>
type AgentInitial = z.infer<typeof agentInitialSchema>
type AgentAdditional = z.infer<typeof agentAdditionalSchema>
type Agent = z.infer<typeof agentSchema>

export { agentInitialSchema, agentAdditionalSchema, agentSchema }
export type { ImageFile, AgentInitial, AgentAdditional, Agent }
