import { useFormContext } from "react-hook-form";
import { useContext } from "react";
import CampaignContext from "../contexts/CampaignContext";

interface Input {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
}

const Input = ({ id, label, placeholder, type = "text" }: Input) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const { campaign, setCampaign } = useContext(CampaignContext);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium" htmlFor={id}>
          {label}
        </label>
        <small className="text-red-500">{errors?.[id]?.message}</small>
      </div>

      <input
        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type={type}
        placeholder={placeholder}
        id={id}
        value={campaign?.[id]}
        {...register(id, {
          onChange: (e) =>
            setCampaign((prev: any) => ({
              ...prev,
              [e.target.id]: e.target.value,
            })),
          required: {
            value: true,
            message: `${label} is required`,
          },
        })}
      />
    </div>
  );
};
export default Input;
