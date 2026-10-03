type TechPillProps = {
  children: React.ReactNode;
};

export function TechPill({ children }: TechPillProps) {
  return (
    <span className="font-mono-custom rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1 text-[11px] font-medium text-[var(--muted)] transition-colors hover:border-[var(--burning-flame)] hover:text-[var(--truffle-trouble)] dark:hover:text-[var(--burning-flame)]">
      {children}
    </span>
  );
}
