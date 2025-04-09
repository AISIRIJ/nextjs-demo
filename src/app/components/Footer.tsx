export default async function Footer(){
    const messages= await fetch("https://baconipsum.com/api/?type=all-meat&sentences=1&format=json");
         const jsonMessages= await messages.json();
    return(
        <footer className="gap-4 p-4 bg-gray-800 text-white absolute bottom-0 w-full">
            <ul>
                {jsonMessages.map((message, index) => (
                    <li key={index}>{message}</li>
                ))}
            </ul>
        </footer>
    )
}