import SendbirdApp from "@sendbird/uikit-react/App";


const Chat = ()=>{
    return (
    <SendbirdApp
        // Add the two lines below.
        appId={"A1A3D22D-56D0-4EE1-A201-B72AF9A20E94"}   // Specify your Sendbird application ID.
        userId={"0"}        // Specify your user ID.
    />)
}

export default Chat