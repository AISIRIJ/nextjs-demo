import {NextResponse} from "next/server";

let contactMessages:string[]=['Hello','Welcome to Next APIs']
export async function GET(request: Request) {
    return NextResponse.json({ contactData: contactMessages});
}

export async function POST(request: Request) {
}