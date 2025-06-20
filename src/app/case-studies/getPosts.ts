"use server"

import fs from 'fs';
import path from 'path';

export default async function getPosts() {

    try {
        const postsDirectory = path.join(process.cwd(), 'src/app/case-studies/[id]/posts');
        const filenames = fs.readdirSync(postsDirectory);
        console.log('Filenames:', filenames);

    } catch (error) {
        console.error('Error reading posts directory:', error);
    }
}