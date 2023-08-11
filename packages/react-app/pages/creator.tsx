import { Milestone, ChevronRight, Cart, Add, Trash } from "../components/icons";
import { useState } from "react";

const steps = ["Milestone", "Payment"];

const Creator = () => {
  const [step, setStep] = useState<number>(1);
  const [milestones, setMilestones] = useState([
    {
      id: 1,
      title: "",
      description: "",
    },
  ]);

  const addMilestone = () => {
    if (milestones.length > 2) {
      return;
    }
    setMilestones([
      ...milestones,
      { id: milestones.length + 1, title: "", description: "" },
    ]);
  };

  const removeMilestone = (id: number) => {
    if (milestones.length > 1) {
      setMilestones(milestones.filter((m) => m.id !== id));
    }
  };

  return (
    <div className="mx-auto w-full max-w-7xl bg-gray-50 py-2">
      <div className="mx-auto my-4 max-w-2xl md:my-6">
        {/* breadcrumb */}
        <nav className="mb-8 flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a
                href="#"
                className="ml-1 inline-flex text-sm font-medium text-gray-900 hover:underline md:ml-2"
              >
                Campaign
              </a>
            </li>
            {steps.map((step) => (
              <li key={step}>
                <div className="flex items-center">
                  <ChevronRight />
                  <a
                    href="#"
                    className="ml-1 text-sm font-medium text-gray-900 hover:underline md:ml-2"
                  >
                    {step}
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </nav>
        {/* Form */}

        {step == 1 ? (
          <div className="overflow-hidden rounded-xl bg-white p-4 shadow">
            <div className="mb-4 flex items-center rounded-lg py-2">
              <div className="mr-2 rounded-full bg-gray-100  p-2 text-black">
                <Cart />
              </div>
              <div className="flex flex-1">
                <p className="text-sm font-medium">Enter campaign details</p>
              </div>
            </div>

            <div className="mt-6 gap-6 space-y-4 md:grid md:grid-cols-2 md:space-y-0">
              <div className="w-full">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Enter campaign name"
                  id="name"
                ></input>
              </div>

              <div className="w-full">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="lastName"
                >
                  Website
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="https://"
                  id="lastName"
                ></input>
              </div>
              <div className="col-span-2 grid">
                <div className="w-full">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="email"
                  >
                    Description
                  </label>
                  <textarea
                    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter short description"
                  ></textarea>
                </div>
              </div>

              <div className="col-span-2 grid justify-end">
                <button
                  onClick={() => setStep(2)}
                  type="button"
                  className="w-[200px] rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Next Step
                </button>
              </div>
            </div>
          </div>
        ) : step == 2 ? (
          <div className="overflow-hidden rounded-xl bg-white p-4 shadow">
            <div className="flex items-center justify-between mb-2">
              <div className=" flex items-center rounded-lg ">
                <div className="mr-2 rounded-full bg-gray-100  p-2 text-black">
                  <Milestone />
                </div>
                <div className="flex flex-1">
                  <p className="text-sm font-medium">Enter Milestone details</p>
                </div>
              </div>

              <div className="cursor-pointer" onClick={() => addMilestone()}>
                <Add />
              </div>
            </div>

            {/* Milestones */}
            <div className="mt-6 ">
              <div className="space-y-2">
                {milestones.map((d, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className=" flex w-[90%] gap-x-4">
                      <div className="w-full">
                        <label
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          htmlFor="title"
                        >
                          Title
                        </label>
                        <input
                          className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="text"
                          placeholder="Increase followers"
                          id="title"
                        ></input>
                      </div>

                      <div className="w-full">
                        <label
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          htmlFor="description"
                        >
                          Description
                        </label>
                        <input
                          className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="text"
                          placeholder="Get followers to 5000"
                          id="description"
                        ></input>
                      </div>
                    </div>

                    <div
                      className="w-[10%] flex items-center justify-center "
                      onClick={() => removeMilestone(d.id)}
                    >
                      <Trash />
                    </div>
                  </div>
                ))}
              </div>

              <div className="col-span-2 flex justify-end mt-8">
                <button
                  onClick={() => setStep(step - 1)}
                  type="button"
                  className="w-fit lg:w-[200px] rounded-md bg-transparent mr-3 border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black/80 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Previous
                </button>
                <button
                  onClick={() => setStep(3)}
                  type="button"
                  className="w-fit lg:w-[200px] rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Next Step
                </button>
              </div>
            </div>
          </div>
        ) : (
          step == 3 && (
            <div className="overflow-hidden rounded-xl bg-white p-4 shadow">
              <div className="mb-4 flex items-center rounded-lg py-2">
                <div className="mr-2 rounded-full bg-gray-100  p-2 text-black">
                  <Milestone />
                </div>
                <div className="flex flex-1">
                  <p className="text-sm font-medium">Make Payment</p>
                </div>
              </div>

              <div className="mt-6 gap-6 space-y-4">
                <div className="w-full">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="firstName"
                  >
                    Amount
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="$CELO"
                    id="firstName"
                  ></input>
                </div>

                <div className="w-full invisible">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="firstName"
                  >
                    Amount
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="$CELO"
                    id="firstName"
                  ></input>
                </div>

                <div className="col-span-2 flex justify-end">
                  <button
                    onClick={() => setStep(step - 1)}
                    type="button"
                    className="w-fit lg:w-[200px] rounded-md bg-transparent mr-3 border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black/80 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    type="button"
                    className="w-fit lg:w-[200px] rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Make Payment
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Creator;
