import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <p><Link href="/meals">Meals</Link></p>
      <p><Link href="/meals/share">Share Meal</Link></p>
      <p><Link href="/community">Community</Link></p>
    </main>
  );
}
// /meals
// /meals/share
// /community
// /meals/{abc}
// import Link from 'next/link';

// import classes from './page.module.css';

// export default function Home() {
//   return (
//     <>
//       <header className={classes.header}>
//         <div className={classes.slideshow}></div>
//         <div>
//           <div className={classes.hero}>
//             <h1>NextLevel Food for NextLevel Foodies</h1>
//             <p>Taste & share food from all over the world.</p>
//           </div>
//           <div className={classes.cta}>
//             <Link href="/community">Join the Community</Link>
//             <Link href="/meals">Explore Meals</Link>
//           </div>
//         </div>
//       </header>
//       <main>
//         <section className={classes.section}>
//           <h2>How it works</h2>
//           <p>
//             NextLevel Food is a platform for foodies to share their favorite
//             recipes with the world. It&apos;s a place to discover new dishes, and to
//             connect with other food lovers.
//           </p>
//           <p>
//             NextLevel Food is a place to discover new dishes, and to connect
//             with other food lovers.
//           </p>
//         </section>

//         <section className={classes.section}>
//           <h2>Why NextLevel Food?</h2>
//           <p>
//             NextLevel Food is a platform for foodies to share their favorite
//             recipes with the world. It&apos;s a place to discover new dishes, and to
//             connect with other food lovers.
//           </p>
//           <p>
//             NextLevel Food is a place to discover new dishes, and to connect
//             with other food lovers.
//           </p>
//         </section>
//       </main>
//     </>
//   );
// }
//1. Meals Routing
//2. Meals layout for meals pages
//3. main-header cmp(image scr,styling docs)
//4. Image comp(docs,inspect,proi warning)
//5. Main-header-background cmp & style
//6. New Page.js
//7. Image Component
//8. Client v/s server component(run console(Executing) in components/main-header and in meal page)
//will not be able to use hooks and event handler on server comp
