
const ChatModule = () => {
  return (
    <div className="w-full h-full flex">
      <div className="flex-none h-[calc(screen-2rem)] border-2 border-sky-500">
        room list
        <div className="">
          <ul>
            <li>name</li>
            <li>name</li>
            <li>name</li>
            <li>name</li>
            <li>name</li>
            <li>name</li>
          </ul>
        </div>
      </div>
      <div className="flex-auto border-2 p-3 border-sky-500">
        <div className="">
          <div className="w-fit px-2 py-1 my-1 border-2 border-red-500">
            Some Messages
          </div>
        </div>
        <div className="">
          <input type="text" className="bg-white border-2 border-red-500"/>
        </div>
      </div>
    </div>
  )
}

export default ChatModule;