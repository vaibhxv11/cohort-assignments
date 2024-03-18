import {atom, selector } from "recoil"

export const networkAtom=atom({
    key :"networkAtom" ,
    default :104
})

export const jobsAtom=atom({
    key :"jobsAtom" ,
    default :45
})

export const messagingAtom=atom({
    key :"messagingAtom" ,
    default :4
})

export const notificationsAtom=atom({
    key :"notificationsAtom" ,
    default :12
})

export const totalNotificationSelector=selector({
    key :"totalNotificationSelector" ,
    get :({get})=>{
        const networkAtomCount=get(networkAtom)
         const  jobsAtomCount=get(jobsAtom)
       const  messagingAtomCount=get(messagingAtom)
       const notificaionAtomCount=get(notificationsAtom)

       return networkAtomCount+jobsAtomCount+messagingAtomCount+notificaionAtomCount

    }
})


