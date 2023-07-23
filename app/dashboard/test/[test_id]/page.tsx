function page({ params }: { params: { test_id: string } }) {
  return (
    <div>
      <h1>Test {params.test_id}</h1>
    </div>
  );
}

export default page;
