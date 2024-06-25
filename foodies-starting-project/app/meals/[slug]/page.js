import Link from "next/link";

export default function MealSlug({params}) {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
       {params.slug} Page
      </h1>
      
    </main>
  );
}