export async function ChatView(){
    const chat = await setTimeout(()=>{
        return [
            {type:"user",}
        ]
    },2000);
}