function Home({ data }) {
  return (
    <>
      <div>Welcome home</div>
      <div>{data ? `Your data is ${data}` : ""}</div>
    </>
  );
}

export default Home;
