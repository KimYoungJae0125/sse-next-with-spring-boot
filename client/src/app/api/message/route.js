import {NextResponse} from "next/server";

const message = [];

export async function GET(req) {
    console.log(req.method)
    return NextResponse.json({message})
}

export async function POST(req) {
    console.log(req.json())
}