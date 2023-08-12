import Link from "next/link";
import { useRouter } from "next/router";

const InfluencerLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <section className="mx-auto max-w-7xl flex gap-x-4 px-4 pt-5 h-full">
      <aside className="hidden lg:block w-[30%]  py-8 rounded-md">
        <div className="mx-auto my-4 px-3 max-w-2xl">
          <div className="flex flex-col gap-y-2">
            <Link
              href="/influencer"
              className={`px-4 py-2 border ${
                router.asPath == "/influencer" && "bg-gray-300"
              }`}
            >
              Dashboard
            </Link>

            <Link
              href="/influencer/view-campaigns"
              className={`px-4 py-2 border ${
                router.asPath == "/influencer/view-campaigns" && "bg-gray-300"
              }`}
            >
              Campaigns
            </Link>

            <Link
              href="/influencer/account"
              className={`px-4 py-2 border ${
                router.asPath == "/influencer/account" && "bg-gray-300"
              }`}
            >
              Manage Account
            </Link>
          </div>
        </div>
      </aside>

      <main className=" bg-gray-50 py-8 w-full rounded-md ">
        <div className="mx-auto my-4 max-w-2xl">{children}</div>
      </main>
    </section>
  );
};
export default InfluencerLayout;
