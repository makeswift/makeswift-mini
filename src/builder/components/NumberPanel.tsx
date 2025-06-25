type Props = {
  label: string;
  value: number;
  onChange?: (value: number) => void;
};

export function NumberPanel({ label, value, onChange }: Props) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-xs text-gray-500">{label}</span>

      <input
        type="number"
        value={value}
        onChange={(e) => onChange?.(Number(e.target.value))}
        autoComplete="off"
        data-1p-ignore
        className="w-full rounded bg-[#f6f7fb] px-3 py-2 text-xs"
      />
    </label>
  );
}
