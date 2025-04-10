import {NextResponse} from "next/server";

let contactMessages:string[]=['Hello','Welcome to Next APIs']
export async function GET() {
    return NextResponse.json({ contactData: contactMessages});
}

export async function POST(request: Request) {
    const {messages}= await request.json();
    if(!messages){
        return NextResponse.json([{error: 'Message not available'},{status: 400}])
    }
    contactMessages.push(messages);
    return NextResponse.json([{success: true},{contactData:contactMessages}])
}

