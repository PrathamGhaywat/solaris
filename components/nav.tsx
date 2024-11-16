import Image from "next/image";

export default function Nav() {
  return (
    <div className="fixed px-12 py-6 z-99">
      <Image src="/logo.png" alt="logo" width={200} height={0} />
    </div>
  );
}
