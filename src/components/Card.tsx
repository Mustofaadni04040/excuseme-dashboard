export default function CardComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="py-4 px-10 rounded-xl shadow-[0px_0px_25px_0px_rgba(0,0,0,0.1)] bg-white">
      {children}
    </div>
  );
}
