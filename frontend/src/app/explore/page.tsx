const projectData = [
    {
      id: 1,
      title: "Ecommerce Mobile App | Flutter & Dart",
      image: "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_400/v1695649283/catalog/1706301297618898944/t7gim4u11xjcjdqvvivs.jpg",
      user: {
        name: "Anurag P.",
        avatar: "https://www.upwork.com/profile-portraits/c1dx0nWFnQXt1QlUbWxkeQuouA68sVJT60DBrUvYUmrq7b9GKxOtbg0HWZkabycQG6",
        country: "India",
      },
    },
    {
      id: 2,
      title: "AI-Powered Chatbot for Businesses",
      image: "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_400/v1695714469/catalog/1706301297618898944/nzo7vocdn7rq57srnigx.jpg",
      user: {
        name: "Sophia R.",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        country: "United States",
      },
    },
    {
      id: 3,
      title: "SaaS Dashboard UI/UX Design",
      image: "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_400/v1695714594/catalog/1706301297618898944/yvudlyy1omnaujobklo8.jpg",
      user: {
        name: "Michael D.",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      }, // No country provided for this user
    },
    {
      id: 4,
      title: "Custom CRM System for Small Businesses",
      image: "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_400/v1695649283/catalog/1706301297618898944/t7gim4u11xjcjdqvvivs.jpg",
      user: {
        name: "Elena G.",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        country: "Germany",
      },
    },
    {
      id: 5,
      title: "AI-Powered Chatbot for Businesses",
      image: "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_400/v1695714469/catalog/1706301297618898944/nzo7vocdn7rq57srnigx.jpg",
      user: {
        name: "Sophia R.",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        country: "United States",
      },
    },
    {
      id: 6,
      title: "SaaS Dashboard UI/UX Design",
      image: "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_400/v1695714594/catalog/1706301297618898944/yvudlyy1omnaujobklo8.jpg",
      user: {
        name: "Michael D.",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
    },
    {
      id: 7,
      title: "Ecommerce Mobile App | Flutter & Dart",
      image: "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_400/v1695649283/catalog/1706301297618898944/t7gim4u11xjcjdqvvivs.jpg",
      user: {
        name: "Anurag P.",
        avatar: "https://www.upwork.com/profile-portraits/c1dx0nWFnQXt1QlUbWxkeQuouA68sVJT60DBrUvYUmrq7b9GKxOtbg0HWZkabycQG6",
        country: "India",
      },
    },
    {
      id: 8,
      title: "AI-Powered Chatbot for Businesses",
      image: "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_400/v1695714469/catalog/1706301297618898944/nzo7vocdn7rq57srnigx.jpg",
      user: {
        name: "Sophia R.",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        country: "United States",
      },
    },
    {
      id: 9,
      title: "SaaS Dashboard UI/UX Design",
      image: "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_400/v1695714594/catalog/1706301297618898944/yvudlyy1omnaujobklo8.jpg",
      user: {
        name: "Michael D.",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        country: "Canada",
      },
    },
  ];
    
  
  const ExplorePage = () => {
    return (
      <section className="min-h-screen flex flex-col py-10 px-5 items-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#1a1a1a] max-w-6xl w-full mb-4">
          Explore Featured Ideas
        </h1>
        <p className="text-gray-600 px-0 font-inter w-full max-w-6xl">
          Connect, collaborate, and build your portfolio alongside like-minded individuals through real-world projects.
        </p>
  
        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 max-w-6xl w-full mt-6">
          {projectData.map((project) => (
            <div key={project.id} className="border rounded-lg shadow-lg overflow-hidden bg-white">
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900 line-clamp-2">{project.title}</h2>
              </div>
              <div className="flex items-center p-4 border-t">
                <img src={project.user.avatar} alt={project.user.name} className="w-10 h-10 rounded-full" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-800">{project.user.name}</p>
                  <p className="text-xs text-gray-500">{project.user.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ExplorePage;
  