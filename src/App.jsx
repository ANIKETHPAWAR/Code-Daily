import { useState } from 'react'
import './App.css'
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { counterAtom } from './atoms/counter';
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom } from './atoms/atoms';

function App() {
  return (
  <RecoilRoot>
    <MainApp/>
  </RecoilRoot>)
}

function MainApp(){
  
const networkNotificationCount = useRecoilValue(networkAtom);
const jobsAtomCount = useRecoilValue(jobsAtom);
const messagingAtomCount = useRecoilValue(messagingAtom)
const notificationAtom = useRecoilValue(notificationsAtom)
return (
 <>
 <button>Home </button>
 <button>My network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
 <button>Jobs ({jobsAtomCount})</button>
 <button>Messaging ({messagingAtomCount})</button>
 <button>Notifications ({notificationAtom})</button>
 <button>Me </button>

 </>
)
}


export default App