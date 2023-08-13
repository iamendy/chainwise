import Image from "next/image";
import hero from "../public/hero.avif";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import Link from "next/link";

const Hero = () => {
  const { openConnectModal } = useConnectModal();

  return (
    <div className="relative w-full bg-white mb-12">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
          <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
            <div className="rounded-full bg-white p-1 px-2">
              <p className="text-sm font-medium">Connect easily</p>
            </div>
            <p className="text-sm font-medium">with &rarr;</p>
          </div>
          <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
            People who care about your growth
          </h1>
          <p className="mt-8 text-lg text-gray-700">
            We connect you with top-rated influencers that drive your web3
            business growth.
          </p>
          <div className="mt-3">
            {openConnectModal ? (
              <button
                onClick={openConnectModal}
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Connect Wallet
              </button>
            ) : (
              <Link
                href="/creator"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Go to Dashboard
              </Link>
            )}
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
          <Image
            className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
            src={hero}
            alt="hero-image"
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
