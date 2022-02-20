import Image from "next/image";
import Link from "next/link";
import logo from '../../assets/logo.svg';

export default function Logo() {
  return (
    <Link
      href="/"
      sx={{
        variant: 'links.logo',
      }}
      passHref
    >
      <Image
        src={logo}
        width="186"
        height="37"
        sx={{ display: 'flex' }}
        alt="startup landing logo"
      />
    </Link>
  );
}