export async function DynamicComponent() {
  // wait 1 second
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div>
      <div>Dynamic Component</div>
      <div>{new Date().toISOString()}</div>
    </div>
  );
}
