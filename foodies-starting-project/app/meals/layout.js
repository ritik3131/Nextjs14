
// export const metadata = {
//   title: 'NextLevel Food',
//   description: 'Delicious meals, shared by a food-loving community.',
// };

export default function MealsLayout({ children }) {
  return (
    <html lang="en">
      <body>
        Header
        {children}
      </body>
    </html>
  );
}
