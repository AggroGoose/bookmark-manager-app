export default function dateFormatter(date: string | null) {
  if (!date) return "Never";
  const newDate = new Date(date);
  if (isNaN(newDate.valueOf())) return "Never";
  return newDate.toLocaleDateString("default", {
    day: "numeric",
    month: "short",
  });
}
