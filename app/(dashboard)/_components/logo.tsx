import Image from "next/image"

const Logo = () => {
  return (  
    <Image 
      height={120}
      width={120}
      alt="logo"
      src="/logo.svg"
    />
  )
}
 
export default Logo;