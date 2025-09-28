import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { promises as fs } from 'fs';
import path from 'path';

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // 根据语言读取对应的 MDX 文件
  const mdxFile = locale === 'zh' ? 'privacy.zh.mdx' : 'privacy.en.mdx';
  const filePath = path.join(process.cwd(), mdxFile);
  
  let content = '';
  try {
    content = await fs.readFile(filePath, 'utf8');
  } catch (error) {
    console.error(`Error reading ${mdxFile}:`, error);
    // 如果文件不存在，使用英文版本作为后备
    const fallbackPath = path.join(process.cwd(), 'privacy.en.mdx');
    content = await fs.readFile(fallbackPath, 'utf8');
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-200">
      <Navbar />
      <main className="pt-20">
        <div className="mx-auto max-w-4xl px-4 py-8">
          <div className="prose prose-gray dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-strong:text-gray-900 dark:prose-strong:text-gray-100">
            <MDXRemote source={content} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
