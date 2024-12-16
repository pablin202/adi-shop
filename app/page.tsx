import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="font-heading">Adi UI Shop</h1>
      <p className="font-sans">
        Find premium UI templates and beautifully crafted icons at Adi UI Shop.
        Perfect for designers and developers looking for top-notch resources.
      </p>
      <Image
        src="/images/og-image.jpg"
        width={1200}
        height={630}
        alt="Adi UI Shop homepage preview"
      />
    </div>
  );
}
