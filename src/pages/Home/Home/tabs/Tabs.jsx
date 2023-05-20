// import React, { useState } from 'react';


// const Tabs = () => {
//     const [currentTab, setCurrentTab] = useState()
//     const tabs = [
//         {
//             id: 1,
//             tabTitle: 'Tab 1',
//             title: 'title 1',
//             content: 'a'
//         },
//         {
//             id: 1,
//             tabTitle: 'Tab 2',
//             title: 'title 2',
//             content: 'b'
//         },
//         {
//             id: 1,
//             tabTitle: 'Tab 3',
//             title: 'title 3',
//             content: 'c'
//         },
//     ]
//     const handleTabClick = (e) => {
//         setCurrentTab(e.target.id)
//     }
//     return (
//         <div>
//             <div className='tabs'>
//                 {tabs.map((tab, i) => {
//                     <button
//                         key={i}
//                         id={tab.id}
//                         disabled={currentTab === `${tab.id}`}
//                         onClick={(handleTabClick)}
//                     >
//                         {tab.tabTitle}

//                     </button>
//                 })}
//             </div>
//             <div className='content'>
//                 {tabs.map((tab, i) =>
//                     <div key={i}>
//                         {currentTab === `${tab.id}` &&
//                             <div>
//                                 <p>{tab.title}</p>
//                                 <p>{tab.content}</p>
//                             </div>
//                         }
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Tabs;