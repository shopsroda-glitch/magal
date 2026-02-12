export function Breadcrumb() {
  const items = [
    { label: "Home", href: "#" },
    { label: "Eletroportáteis", href: "#" },
    { label: "Ventiladores", href: "#" },
    { label: "Ventilador de Mesa", href: null },
  ]

  return (
    <nav aria-label="Breadcrumb" className="bg-card px-4 py-2.5">
      <ol className="flex flex-wrap items-center gap-1 text-xs text-[#666666]">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-1">
            {index > 0 && (
              <span aria-hidden="true" className="text-[#999999]">
                {">"}
              </span>
            )}
            {item.href ? (
              <a href={item.href} className="text-[#666666] hover:underline">
                {item.label}
              </a>
            ) : (
              <span className="text-[#333333]">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
