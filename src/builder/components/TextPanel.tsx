type Props = {
  label: string;
  value: string;
  onChange?: (value: string) => void;
};

export function TextPanel({ label, value, onChange }: Props) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-xs text-gray-500">{label}</span>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        autoComplete="off"
        data-1p-ignore
        className="w-full rounded bg-[#f6f7fb] px-3 py-2 text-xs"
      />
    </label>
  );
}
