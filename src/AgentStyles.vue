<script setup lang="ts">
   import type { Agent } from './agentModel'
   import { computed, onMounted, ref } from 'vue'
   import MonoClose from './MonoClose.vue'
   import MonoLogo from './MonoLogo.vue'
   import MonoSend from './MonoSend.vue'

   const today = new Date().toLocaleString('pt-BR', {
      day: '2-digit',
      month: 'short',
   })

   const agentActive = ref({} as Agent)
   const showChatStart = ref(true)
   const showChatAvatar = ref(true)
   const showChatBalloon = ref(true)
   const showChatDialog = ref(false)

   const screenSideStyle = computed(() => {
      if (agentActive.value.screenSideStyle) {
         let sideStyle = agentActive.value.screenSideStyle
         sideStyle += 'display: block;'
         return sideStyle
      } else {
         return 'display: none;'
      }
   })

   const screenSideClass = computed(() => {
      if (agentActive.value.screenSideId === 'id02') {
         return 'order-last'
      }
   })

   const closeChatBalloonStyle = computed(() => {
      if (agentActive.value.screenSideId === 'id01') {
         return 'left: -1.5px;'
      } else {
         return 'right: -1.5px;'
      }
   })

   const onChatAvatar = () => {
      showChatStart.value = false
      showChatDialog.value = true
   }

   const onCloseChatDialog = () => {
      showChatDialog.value = false
      showChatBalloon.value = false
      showChatStart.value = true
      showChatAvatar.value = true
   }

   onMounted(() => {
      agentActive.value = {
         nickname: 'Blue',
         identifier: 'Suporte',
         createdAt: 0,
         updatedAt: 0,
         docId: '',
         userId: '',
         welcomeMessage: 'Olá! Como posso te ajudar?',
         colorId: 'id02',
         colorStyle: 'background-color: #536cbc;',
         fontFamilyId: 'id01',
         fontFamilyStyle:
            "font-family: ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';",
         screenSideId: 'id01',
         screenSideStyle: 'right: 16px;',
         imageUrl:
            'https://png.pngtree.com/png-vector/20221124/ourmid/pngtree-chatbot-color-icon-style-agent-chatbot-vector-png-image_42208574.jpg',
         allowedDomains: [],
      }
   })
</script>

<template>
   <div class="agent-default min-h-[66px]" :style="screenSideStyle">
      <div v-if="showChatDialog" class="chat-main show-in grid content-end">
         <div
            class="grid w-full grid-rows-[min-content_minmax(0px,_480px)] overflow-hidden rounded-xl border border-slate-200 shadow-lg"
            :style="agentActive.fontFamilyStyle">
            <div
               class="flex min-h-[74px] flex-col py-4 pl-5 pr-3"
               :style="agentActive.colorStyle">
               <div
                  class="relative grid grid-cols-[1fr_min-content_min-content] items-center gap-x-2">
                  <div class="flex flex-col truncate">
                     <span class="text-xl font-bold text-white">
                        {{ agentActive.nickname }}
                     </span>

                     <div class="flex items-center gap-x-1">
                        <span
                           class="mb-[0.5px] h-[9px] w-[9px] rounded-full bg-[#02fe04]"></span>
                        <span class="text-sm font-medium text-white">Online</span>
                     </div>
                  </div>

                  <div class="absolute right-2 top-0 flex gap-x-2">
                     <span class="cursor-pointer" @click="onCloseChatDialog()">
                        <MonoClose class="h-5 text-white" />
                     </span>
                  </div>
               </div>
            </div>

            <div class="grid grid-rows-[1fr_min-content] rounded-b-xl bg-white pb-2">
               <div class="grid grid-cols-2 content-start px-2 pb-1">
                  <span
                     class="col-span-2 mb-4 mt-1 place-self-center rounded-lg bg-surface-10 px-4 py-0.5 text-base">
                     {{ today }}
                  </span>

                  <div
                     class="col-span-full grid grid-cols-[min-content_77%] gap-x-2">
                     <div
                        class="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border bg-white">
                        <img
                           v-if="agentActive.imageUrl"
                           :src="agentActive.imageUrl"
                           class="h-6 w-6" />
                        <MonoLogo v-else class="h-6 w-6 text-slate-400" />
                     </div>

                     <span
                        class="mb-[22px] mt-3 grid place-self-start self-start rounded-2xl rounded-tl-none px-3 py-1.5 text-base text-white"
                        :style="agentActive.colorStyle">
                        {{ agentActive.welcomeMessage }}
                     </span>
                  </div>
               </div>

               <div
                  class="mx-2 flex items-center overflow-hidden rounded-lg ring-1 ring-slate-300 has-[:focus]:ring-2 has-[:focus]:ring-primary-40">
                  <input
                     class="h-[40px] w-full bg-surface-10 pl-3 text-base placeholder:text-base"
                     autofocus
                     placeholder="Digite sua mensagem..." />

                  <div
                     class="border-transparente flex h-10 w-10 shrink-0 items-center justify-center rounded-r-lg bg-surface-10">
                     <MonoSend class="h-6 text-onsurface-20" />
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div
         v-if="showChatStart"
         class="chat-balloon flex h-[74px] flex-nowrap items-start gap-x-3 overflow-hidden p-[3px]"
         :class="{ 'justify-end': agentActive.screenSideId === 'id01' }">
         <div
            v-if="showChatBalloon"
            class="chat-balloon show-in relative flex w-full items-center gap-x-2 rounded-full border bg-white px-5 py-2 opacity-0 shadow-md hover:bg-slate-50"
            :class="screenSideClass">
            <div class="flex w-full items-center justify-between gap-x-3">
               <div
                  class="flex min-h-[48px] select-none items-center justify-center">
                  <span class="text-center" :style="agentActive.fontFamilyStyle">
                     {{ agentActive.welcomeMessage }}
                  </span>
               </div>
            </div>

            <div
               class="absolute top-[0.5px] cursor-pointer rounded-full bg-slate-400 p-0.5"
               :style="closeChatBalloonStyle"
               @click="showChatBalloon = false">
               <MonoClose class="h-4 w-4 text-white" />
            </div>
         </div>

         <div
            class="show-in relative flex h-[66px] w-[66px] shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full border bg-white shadow-md hover:bg-slate-50"
            @click="onChatAvatar()">
            <img
               v-if="agentActive.imageUrl"
               :src="agentActive.imageUrl"
               class="h-10 w-10" />
            <MonoLogo v-else class="h-10 w-10 text-slate-400" />
         </div>
      </div>
   </div>
</template>
