export function Icons() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <symbol id="i-book" viewBox="0 0 24 24"><path d="M3.5 5.5h6.8c1.4 0 2.7.5 3.7 1.3 1-.8 2.3-1.3 3.7-1.3h2.8v13h-2.8c-1.4 0-2.7.5-3.7 1.3-1-.8-2.3-1.3-3.7-1.3H3.5z"/><path d="M12 6.8v13"/></symbol>
      <symbol id="i-pen" viewBox="0 0 24 24"><path d="M4 20l4.5-1 9.8-9.8a1.8 1.8 0 0 0 0-2.5l-1-1a1.8 1.8 0 0 0-2.5 0L5 15.5 4 20z"/><path d="M13.5 6.5l4 4"/></symbol>
      <symbol id="i-star" viewBox="0 0 24 24"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/></symbol>
      <symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M12 8v5l3 2"/></symbol>
      <symbol id="i-save" viewBox="0 0 24 24"><path d="M6 5h12v14l-6-3-6 3z"/></symbol>
    </svg>
  );
}

export function Icon({ name, className = "icon" }: { name: string; className?: string }) {
  return (
    <svg className={className} aria-hidden="true">
      <use href={`#${name}`} />
    </svg>
  );
}
