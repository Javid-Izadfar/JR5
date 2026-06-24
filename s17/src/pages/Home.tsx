import CountryList from "@/components/home/CountryList";

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8">
          {/* <div>Toggle Theme</div>
          <div>Filter</div> */}
          <CountryList />
        </div>
      </div>
    </div>
  );
}
