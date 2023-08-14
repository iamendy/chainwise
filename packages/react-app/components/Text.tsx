import { useFormContext } from "react-hook-form";
import { useContext } from "react";
import CampaignContext from "../contexts/CampaignContext";

interface Text {
  id: string;
  label: string;
  placeholder: string;
}

const Text = ({ id, label, placeholder }: Text) => {
  const { campaign, setCampaign } = useContext(CampaignContext);

  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="col-span-2 grid">
      <div className="w-full">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium " htmlFor={id}>
            {label}
          </label>
          <small className="text-red-500">{errors?.[id]?.message}</small>
        </div>

        <textarea
          id={id}
          className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder={placeholder}
          value={campaign?.description}
          {...register(id, {
            onChange: (e) =>
              setCampaign((prev: any) => ({
                ...prev,
                [e.target.id]: e.target.value,
              })),
            required: {
              value: true,
              message: `${id} is required`,
            },
          })}
        ></textarea>
      </div>
    </div>
  );
};
export default Text;
