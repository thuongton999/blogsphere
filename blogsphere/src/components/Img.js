import Image from "next/image";

export default function Img({ className, alt, ...props}) {
    return (
        <div style={{display: "flex", justifyContent: "center", alignContent: "center"}}>
            <Image
                width='100%'
                height='100%'
                objectFit='contain'
                {...props}
                alt={alt}
            />
        </div>
    )
}