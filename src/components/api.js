// Async api call funtion
export async function getBlogs() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw {
      message: "Data fetching faild",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();

  //   returned data from api as .json
  return data;
}
