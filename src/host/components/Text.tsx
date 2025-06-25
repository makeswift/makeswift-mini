type Props = {
  text?: string;
  fontSize?: number;
  fontWeight?: number;
  color?: string;
};

export function Text({ text, fontSize, fontWeight, color }: Props) {
  return (
    <div
      className="font-sans leading-none"
      style={{ color, fontWeight, fontSize }}
    >
      {text ?? "Insert a text"}
    </div>
  );
}
