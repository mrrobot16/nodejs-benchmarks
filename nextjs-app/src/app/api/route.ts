import { NextResponse } from 'next/server'

const handler = () => {
    return NextResponse.json({ status: 200 })
}

export { handler as GET }

export const POST = () => {
    return NextResponse.json({ status: 200, message: 'POST request received'})
}

export const PUT = () => {
    return NextResponse.json({ status: 200, message: 'PUT request received'})
}

export const DELETE = () => {
    return NextResponse.json({ status: 200, message: 'DELETE request received'})
}

export const PATCH = () => {
    return NextResponse.json({ status: 200, message: 'PATCH request received'})
}

export const OPTIONS = () => {
    return NextResponse.json({ status: 200, message: 'OPTIONS request received'})
}

export const HEAD = () => {
    return NextResponse.json({ status: 200, message: 'HEAD request received'})
}
