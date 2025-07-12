import React from 'react'
import assets, { messagesDummyData } from '../assets/assets'

function ChatContainer({ selectedUser, setSelectedUser }){
    // if the user is true
  return selectedUser ? (
    <div className='h-full overflow-y-auto overflow-x-hidden scrollbar-hide relative backdrop-blur-lg'>

        {/* -------- header part-------- */}
      <div className='flex items-center gap-3 py-3 mx-4 border-b border-stone-500'>
         <img src={assets.profile_martin} alt="profile" className='w-8 rounded-full' />
         <p className='flex-1 text-lg text-white flex items-center gap-2'>
            Martin Johnson
            <span className='w-2 h-2 rounded-full bg-green-500'></span>
        </p>
        <img onClick={()=>setSelectedUser(null)}
         src={assets.arrow_icon} alt="arrowicon"
         className='md:hidden max-w-7'/>
        <img src={assets.help_icon} alt="" className='max-md:hidden max-w-5' /> 
      </div>

      {/* -------Chat Area--------------- */}
      <div className='flex flex-col h-[calc(100%-120px)] overflow-y-scroll scrollbar-hide p-3 pb-6'>
           {messagesDummyData.map((msg,index)=>(
            <div key={index} className={`flex items-end gap-2 justify-end ${msg.senderId !== '680f50e4f10f3cd2832ecf9' && 'flex-row-reverse'}`}>
                {msg.image ? (
                    <img src={msg.image} alt="img" className='max-w-[230px] border border-gray-700 rounded-lg overflow-hidden mb-8' />
                ):(
                    <p className={`p-2 max-w-[200px] md:text-sm font-light rounded-lg mb-8 break-all bg-violet-500/30 text-white ${msg.senderId === '680f50e4f10f3cd2832ecf9' ? 'rounded-br-none' : 'rounded-bl-none'}`}>{msg.text}</p>
                )}
                <div className='text-center text-xs'>
                  <img src={msg.senderId === '680f50e4f10f3cd2832ecf9' ? assets.avatar_icon : assets.profile_martin} alt="" className='w-7 rounded-full' />
                  <p className='text-gray-500'>{msg.createdAt}</p>
                </div>


            </div>
           ))}
      </div>

    </div>
    // if the user is false
  ) : (
    <div className='flex flex-col items-center justify-center gap-2 text-gray-500 bg-white/10 max-md:hidden'>
        <img src={assets.logo_icon} alt="icon" className='max-w-16' />
        <p className='text-lg font-medium text-white'>Chat anytime, anywhere </p>
    </div>
  )
}

export default ChatContainer
