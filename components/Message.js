function Message({sent}) {
    return (
        <div className={`flex items-center  ${sent ? "justify-end" : "justify-start"}`}>
            <h1 className="bg-white px-10 py-1 rounded-full text-2xl">Test</h1>
        </div>
    );
}

export default Message;