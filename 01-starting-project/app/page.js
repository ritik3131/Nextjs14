import Link from 'next/link'
import MainHeader from '@/components/main-header'
export default function Home() {
  console.log("executing....");
  return (
    <main>
      <MainHeader/>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p><Link href="/about">About Us</Link></p>
      {/* <p><Link href="/about">About Us</Link></p> */}
    </main>
  );
}
// jsx server components







// /about







//About page.js(server comp) (converted to html then sent to browser)
//2. add about page
//3. Single page app
//4. Link
//5. Layout page:-metadata
//6. globals.css and icon
//7. custom components
//8. Route Groups(docs)
//9. Project structure(docs)
//10. Dynamic Routing (blog-folder,post-1,post-2)
//11.generateStaticParams(docs)
