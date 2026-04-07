export default async function Home() {

  interface Post {
    id: number;
    title: string;
  }
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const res: Post[] = await data.json();
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold">Sports App</h1>
      <p className="text-gray-500 mt-2">Browse leagues and teams</p>
      {res.map((item)=>(
        <p key={item.id}>{item.title}</p>
      ))}
    </main>
  )
}