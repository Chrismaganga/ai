const AuthLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="h-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative">
        {children}
      </div>
    </main>
  );
}

export default AuthLayout;