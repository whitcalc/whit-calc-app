function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
      {children}
    </h1>
  );
}

export default Heading;
