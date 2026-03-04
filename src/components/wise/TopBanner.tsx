export default function TopBanner() {
  return (
    <div className="w-full bg-primary py-2.5 text-center">
      <p className="text-sm font-bold uppercase tracking-wide text-primary-foreground md:text-base">
        Exclusivo para{" "}
        <span className="underline decoration-2 underline-offset-2">
          lojas de smartphones que vendem acima de 30 aparelhos
        </span>
      </p>
    </div>
  );
}
