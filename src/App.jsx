import { useState } from 'react'
import './App.css'
import { RecoilRoot, atom, useRecoilValue, useRecoilState } from 'recoil';

import {  notifications,  totalCountSelector } from './atoms/atoms';

function App() {
  return (
  <RecoilRoot>
    <MainApp/>
  </RecoilRoot>)
}

function MainApp(){
  
const [allCount,setAllCount] = useRecoilState(notifications)
const totalCount = useRecoilValue(totalCountSelector);
return (
 <>
 <button>Home </button>
 <button>My network ({allCount.networks >= 100 ? "99+" : networkNotificationCount})</button>
 <button>Jobs ({allCount.jobs})</button>
 <button>Messaging ({allCount.messaging})</button>
 <button>Notifications ({allCount.notifications})</button>
 <button>Me ({totalCount}) </button>

 </>
)
}


export default App