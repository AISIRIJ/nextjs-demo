export interface Blog {
    id: string;
    title: string;
}
export default async function Ssr(){
    const blogData= await fetch("https://api.vercel.app/blog",{cache:'no-store'});
    const jsonData:Blog[]= await blogData.json();
    return(
        <ul>
            {
                jsonData.map((blog :Blog)=>(
                    <li key={blog.id}>{blog.title}></li>
                    ))
            }
            <li></li>
        </ul>
    )
}