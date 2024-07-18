import Nav from "./NavBar/Nav";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen w-screen bg-custom ">
      <div className="relative h-full w-full flex flex-col gap-3">
        <Nav />
        <div className="flex-1 overflow-y-auto mx-auto w-[1140px]">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AppLayout;
