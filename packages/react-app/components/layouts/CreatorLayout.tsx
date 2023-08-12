import Link from "next/link";

const CreatorLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="mx-auto max-w-7xl flex gap-x-4 px-4 pt-5">
      <aside className="hidden lg:block w-[30%] bg-gray-50 py-2">
        <div className="mx-auto my-4 px-3 max-w-2xl">
          <div className="flex flex-col gap-y-4">
            <Link href="">Create campaign</Link>

            <Link href="">View campaign</Link>

            <Link href="">Manage campaign</Link>
          </div>
        </div>
      </aside>

      <main className=" bg-gray-50 py-2 w-full">
        <div className="mx-auto my-4 max-w-2xl">{children}</div>
      </main>
    </section>
  );
};
export default CreatorLayout;
