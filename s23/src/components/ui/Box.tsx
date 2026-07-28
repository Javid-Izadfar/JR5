import { cn } from "@/lib/utils";

export function Box({
  children,
  className,
  flex,
  flexDir = "row",
}: {
  children: React.ReactNode;
  className?: string;
  flex?: boolean;
  flexDir?: "row" | "col";
}) {
  return (
    <div
      className={cn(
        flex && "flex",
        flex && (flexDir === "row" ? "flex-row" : "flex-col"),
        className,
      )}
    >
      {children}
    </div>
  );
}
