const Home: React.FC = () => {
  return (
    <div className="bg-orange-400 h-screen">
      <div className="">
        <div className="container mx-auto py-20 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Welcome to My Website
          </h1>
          <p className="text-lg ">
            This is a simple Next.js app with Tailwind CSS and TypeScript.
          </p>
        </div>
      </div>
      <div className="container mx-auto mt-20">
        <h2 className="text-3xl font-semibold mb-8">About Us</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ex a
          libero malesuada viverra. Mauris venenatis, mi eu rhoncus molestie,
          nisl lorem convallis risus, ut fermentum turpis elit sed nulla.
          Aliquam erat volutpat.
        </p>
      </div>
    </div>
  );
};

export default Home;
