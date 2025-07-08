import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default function DashboardPage() {
  const filePath = path.join(process.cwd(), 'src', 'app', '[admin]', 'dashboard');
  const entries = fs.readdirSync(filePath, { withFileTypes: true });
  const directories = entries.filter(entry => entry.isDirectory()).map(dir => dir.name);

  return (
    <div>
      <h1>Dashboard Verzeichnisse</h1>
      <ul className='grid grid-cols-4 gap-2 w-full border'>
        {directories.map((name) => (
          <li key={name} className='border'>
            <Link href={`/admin/dashboard/${name}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}