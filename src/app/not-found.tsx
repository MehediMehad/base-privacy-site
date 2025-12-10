const Notfound = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-background text-foreground px-6">
      {/* Big 404 Text */}
      <h1 className="text-7xl font-extrabold tracking-tight">404</h1>

      {/* Subtitle */}
      <p className="mt-4 text-xl text-muted-foreground">
        Oops! The page you're looking for doesn't exist.
      </p>

      {/* Description */}
      <p className="mt-2 text-center max-w-md text-sm text-muted-foreground">
        It may have been moved, deleted, or you may have typed the URL
        incorrectly.
      </p>
      {/* 
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-medium shadow-sm hover:opacity-90 transition"
      >
        <ArrowLeft size={18} />
        Go Back Home
      </Link> */}
    </div>
  );
};

export default Notfound;
