const StartDatePicker = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium" htmlFor={id}>
          Start Date
        </label>
        <small className="text-red-500">{errors?.[id]?.message}</small>
      </div>
      <input id="startDate" required placeholder="01/01/2023" />
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
export default StartDatePicker;
