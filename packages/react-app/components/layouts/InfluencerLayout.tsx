import Link from "next/link";

const InfluencerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="mx-auto max-w-7xl flex gap-x-4 px-4 pt-5">
      <aside className="hidden lg:block w-[30%] bg-gray-50 py-8 rounded-md">
        <div className="mx-auto my-4 px-3 max-w-2xl">
          <div className="flex flex-col gap-y-2">
            <Link href="/creator" className="px-4 py-2 border">
              Dashboard
            </Link>

            <Link href="/creator/create-campaign" className="px-4 py-2 border">
              Create campaign
            </Link>

            <Link href="#" className="px-4 py-2 border">
              View campaign
            </Link>

            <Link href="#" className="px-4 py-2 border">
              Manage campaign
            </Link>
          </div>
        </div>
      </aside>

      <main className=" bg-gray-50 py-8 w-full rounded-md">
        <div className="mx-auto my-4 max-w-2xl">{children}</div>
      </main>
    </section>
  );
};
export default InfluencerLayout;
