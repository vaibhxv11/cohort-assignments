import { useState } from "react";
import { RecoilRoot , useRecoilState , useRecoilValue } from "recoil";
import { networkAtom , jobsAtom , notificationsAtom ,messagingAtom , totalNotificationSelector} from "./atoms";

function App(){


  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
  
  
}

function MainApp(){

  const networkAtomCount=useRecoilValue(networkAtom);
  const jobsAtomCount=useRecoilValue(jobsAtom);
  const messagingAtomCount =useRecoilValue(messagingAtom);
  const notificaionAtomCount  =useRecoilValue(notificationsAtom);
  const totalNotificationCount=useRecoilValue(totalNotificationSelector)


  // const totalNotificationCount=networkAtomCount + jobsAtomCount + messagingAtomCount + notificaionAtomCount;


  return <div>
  <button>Home</button>

  <button>My Network ({networkAtomCount >=100 ? "99+" : networkAtomCount})  </button>
<button>Jobs ({jobsAtomCount})</button>
  <button>Messages ({messagingAtomCount}) </button>
  <button>Notifications ({notificaionAtomCount}) </button>

  <button >Vaibhav ({totalNotificationCount})</button>


  
</div>

  
  

}

export default App;


