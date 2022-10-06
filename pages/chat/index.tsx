
import "@sendbird/uikit-react/dist/index.css";
import dynamic from "next/dynamic";

const DynamicAppWithNoSSR = dynamic(() => import("../../components/chat"), {
    ssr: false,
    loading: () => <p>...</p>
  });

const ChatPage = () => {
    return (
        <div style={{width:"100%",height:"100%"}}>
            
            <DynamicAppWithNoSSR/>
        </div>
    );
};

export default ChatPage