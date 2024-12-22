import { atom, selector } from "recoil";
export const networkAtom =atom({
    key: "networkAtom",
    default: 89
});
export const jobsAtom =atom({
    key: "jobsAtom",
    default: 15
});
export const notificationsAtom =atom({
    key: "notificationsAtom",
    default: 99
});
export const messagingAtom =atom({
    key: "MessagingAtom",
    default: 103
});

export const totalCountSelector = selector({
    key:"totalCount",
    get: ({get})=>{
        const network = get(networkAtom);
        const jobs = get(jobsAtom);
        const notifications = get(notificationsAtom );
        const messaging = get(messagingAtom);

        return network+ jobs+ notifications + messaging;
    },
});