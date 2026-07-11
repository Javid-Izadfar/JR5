import { useQuery } from "@tanstack/react-query";

function List() {
  const getData = async (url: string) => {
    const response = await fetch(url);
    const result = await response.json();

    return result;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["data"],
    queryFn: () => getData("https://jsonplaceholder.typicode.com/users"),
    staleTime: 5 * 1000,
  });

  return (
    <div>
      {/* <button onClick={() => refetch()}>refetch</button> */}
      {isLoading ? (
        <>Loading ....</>
      ) : error ? (
        <pre>error: {JSON.stringify(error)}</pre>
      ) : (
        <pre>{JSON.stringify(data)}</pre>
      )}
    </div>
  );
}

export default List;
