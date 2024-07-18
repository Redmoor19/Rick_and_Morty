type GridDisplayProps<T> = {
  items: T[];
  render: (item: T) => React.ReactNode;
};

function GridDisplay<T>({ items, render }: GridDisplayProps<T>) {
  return (
    <section className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-5">
      {items.map(render)}
    </section>
  );
}

export default GridDisplay;
