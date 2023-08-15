import Link from "next/link";
import { useRouter } from "next/router";
import { CampaignProvider } from "../../contexts/CampaignContext";

const CreatorLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <section className="mx-auto max-w-7xl flex gap-x-4 px-4 pt-5 h-full">
      <aside className="hidden lg:block w-[30%] bg-gray-5 py-8 rounded-md">
        <div className="mx-auto my-4 px-3 max-w-2xl">
          <div className="flex flex-col gap-y-2">
            <Link
              href="/creator"
              className={`px-4 py-2 border ${
                router.asPath == "/creator" && "bg-gray-300"
              }`}
            >
              Dashboard
            </Link>

            <Link
              href="/creator/create-campaign"
              className={`px-4 py-2 border ${
                router.asPath == "/creator/create-campaign" && "bg-gray-300"
              }`}
            >
              Create campaign
            </Link>
          </div>
        </div>
      </aside>

      <CampaignProvider>
        <main className=" bg-gray-50 py-8 w-full rounded-md">
          <div className="mx-auto my-4 max-w-2xl">{children}</div>
        </main>
      </CampaignProvider>
    </section>
  );
};
export default CreatorLayout;
