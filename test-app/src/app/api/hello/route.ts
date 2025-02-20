import { NextResponse } from "next/server";

// export async function GET() {
//     return new NextResponse("Hello, World!");
// }

export async function POST(req: Request) {
    try {
        const data = await req.json();  // リクエストのJSONを取得
        return NextResponse.json({ message: `Hello, ${data.name}!` }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
    }
}