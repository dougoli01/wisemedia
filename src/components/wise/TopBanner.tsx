export default function TopBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] w-full bg-primary py-2 text-center">
      <p className="text-xs font-bold uppercase tracking-wide text-primary-foreground md:text-sm">
        Exclusivo para{" "}
        <span className="underline decoration-2 underline-offset-2">
          lojas de smartphones que vendem acima de 30 aparelhos
        </span>
      </p>
    </div>
  );
}
