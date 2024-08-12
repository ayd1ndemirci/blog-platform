import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const blogFilePath = path.resolve(process.cwd(), 'src/app', 'blogs.json');

export async function POST(req, { params }) {
    const blogId = parseInt(params.id, 10);

    try {
        const fileContent = fs.readFileSync(blogFilePath, 'utf8');
        const blogData = JSON.parse(fileContent);

        const blog = blogData.blogs.find(blog => blog.id === blogId);
        if (blog) {
            blog.views = (blog.views || 0) + 1; // `views` değerini güncelle
            fs.writeFileSync(blogFilePath, JSON.stringify(blogData, null, 2), 'utf8');

            return NextResponse.json({ message: "Tıklama sayısı güncellendi" }, { status: 200 });
        } else {
            return NextResponse.json({ message: "Blog bulunamadı" }, { status: 404 });
        }
    } catch (error) {
        console.error('Error processing request:', error);
        return NextResponse.json({ message: "İşlem hatası" }, { status: 500 });
    }
}
