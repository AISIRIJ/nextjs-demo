import Link from "next/link";

export default function Renderings(){
    return(
        <div>
            <h1 className={'font-bold'}>Renderings options</h1>
            <ul>
                <Link href={'renderings/ssr'}>SSR Renderings</Link>
                <br/>
                <Link href={'renderings/csr'}>CSR Renderings</Link>

            </ul>
            <br />
            <Link href={''}></Link>
        </div>
    )
}