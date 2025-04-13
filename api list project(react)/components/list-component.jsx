export default function ListComponent({
  items,
  renderItem,
  keyExtractor = (_, index) => index.toString(),
  emptyMessage = "No items to display",
}) {
  if (!items.length) {
    return <div className="text-center py-12 text-white/80 animate-pulse">{emptyMessage}</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <div
          key={keyExtractor(item, index)}
          className="animate-fadeIn animate-float"
          style={{
            animationDelay: `${index * 150}ms`,
            animationFillMode: "both",
          }}
        >
          {renderItem(item)}
        </div>
      ))}
    </div>
  )
}
