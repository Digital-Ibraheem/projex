const projectData = [
    {
        id: 1,
        title: "Ecommerce Mobile App | Flutter & Dart",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis animi libero placeat repellendus. Soluta sint excepturi quo praesentium doloremque beatae quisquam dignissimos, accusantium totam perspiciatis earum quaerat commodi quis maxime facilis enim iure ullam esse accusamus minima fuga rem dolores! Deserunt ea dignissimos ad fuga quod animi eaque ducimus incidunt nemo odit doloremque, impedit nam nulla cum molestias? Aperiam odit unde esse consequatur animi iste odio, veniam necessitatibus error iure eligendi in voluptate voluptatibus ipsa tempora veritatis doloribus nisi impedit.",
        user: {
            name: "Anurag P.",
            avatar: "https://randomuser.me/api/portraits/women/24.jpg",
            country: "India",
        },
    },
    {
        id: 2,
        title: "AI-Powered Chatbot for Businesses",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis animi libero placeat repellendus. Soluta sint excepturi quo praesentium doloremque beatae quisquam dignissimos, accusantium totam perspiciatis earum quaerat commodi quis maxime facilis enim iure ullam esse accusamus minima fuga rem dolores! Deserunt ea dignissimos ad fuga quod animi eaque ducimus incidunt nemo odit doloremque, impedit nam nulla cum molestias? Aperiam odit unde esse consequatur animi iste odio, veniam necessitatibus error iure eligendi in voluptate voluptatibus ipsa tempora veritatis doloribus nisi impedit.",
        user: {
            name: "Sophia R.",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            country: "United States",
        },
    },
    {
        id: 3,
        title: "SaaS Dashboard UI/UX Design",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis animi libero placeat repellendus. Soluta sint excepturi quo praesentium doloremque beatae quisquam dignissimos, accusantium totam perspiciatis earum quaerat commodi quis maxime facilis enim iure ullam esse accusamus minima fuga rem dolores! Deserunt ea dignissimos ad fuga quod animi eaque ducimus incidunt nemo odit doloremque, impedit nam nulla cum molestias? Aperiam odit unde esse consequatur animi iste odio, veniam necessitatibus error iure eligendi in voluptate voluptatibus ipsa tempora veritatis doloribus nisi impedit.",
        user: {
            name: "Michael D.",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        }, // No country provided for this user
    },
    {
        id: 4,
        title: "Custom CRM System for Small Businesses",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis animi libero placeat repellendus. Soluta sint excepturi quo praesentium doloremque beatae quisquam dignissimos, accusantium totam perspiciatis earum quaerat commodi quis maxime facilis enim iure ullam esse accusamus minima fuga rem dolores! Deserunt ea dignissimos ad fuga quod animi eaque ducimus incidunt nemo odit doloremque, impedit nam nulla cum molestias? Aperiam odit unde esse consequatur animi iste odio, veniam necessitatibus error iure eligendi in voluptate voluptatibus ipsa tempora veritatis doloribus nisi impedit.",
        user: {
            name: "Elena G.",
            avatar: "https://randomuser.me/api/portraits/women/68.jpg",
            country: "Germany",
        },
    },
    {
        id: 5,
        title: "AI-Powered Chatbot for Businesses",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis animi libero placeat repellendus. Soluta sint excepturi quo praesentium doloremque beatae quisquam dignissimos, accusantium totam perspiciatis earum quaerat commodi quis maxime facilis enim iure ullam esse accusamus minima fuga rem dolores! Deserunt ea dignissimos ad fuga quod animi eaque ducimus incidunt nemo odit doloremque, impedit nam nulla cum molestias? Aperiam odit unde esse consequatur animi iste odio, veniam necessitatibus error iure eligendi in voluptate voluptatibus ipsa tempora veritatis doloribus nisi impedit.",
        user: {
            name: "Sophia R.",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            country: "United States",
        },
    },
    {
        id: 6,
        title: "SaaS Dashboard UI/UX Design",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis animi libero placeat repellendus. Soluta sint excepturi quo praesentium doloremque beatae quisquam dignissimos, accusantium totam perspiciatis earum quaerat commodi quis maxime facilis enim iure ullam esse accusamus minima fuga rem dolores! Deserunt ea dignissimos ad fuga quod animi eaque ducimus incidunt nemo odit doloremque, impedit nam nulla cum molestias? Aperiam odit unde esse consequatur animi iste odio, veniam necessitatibus error iure eligendi in voluptate voluptatibus ipsa tempora veritatis doloribus nisi impedit.",
        user: {
            name: "Michael D.",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        },
    },
    {
        id: 7,
        title: "Ecommerce Mobile App | Flutter & Dart",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis animi libero placeat repellendus. Soluta sint excepturi quo praesentium doloremque beatae quisquam dignissimos, accusantium totam perspiciatis earum quaerat commodi quis maxime facilis enim iure ullam esse accusamus minima fuga rem dolores! Deserunt ea dignissimos ad fuga quod animi eaque ducimus incidunt nemo odit doloremque, impedit nam nulla cum molestias? Aperiam odit unde esse consequatur animi iste odio, veniam necessitatibus error iure eligendi in voluptate voluptatibus ipsa tempora veritatis doloribus nisi impedit.",
        user: {
            name: "Anurag P.",
            avatar: "https://randomuser.me/api/portraits/men/62.jpg",
            country: "India",
        },
    },
    {
        id: 8,
        title: "AI-Powered Chatbot for Businesses",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis animi libero placeat repellendus. Soluta sint excepturi quo praesentium doloremque beatae quisquam dignissimos, accusantium totam perspiciatis earum quaerat commodi quis maxime facilis enim iure ullam esse accusamus minima fuga rem dolores! Deserunt ea dignissimos ad fuga quod animi eaque ducimus incidunt nemo odit doloremque, impedit nam nulla cum molestias? Aperiam odit unde esse consequatur animi iste odio, veniam necessitatibus error iure eligendi in voluptate voluptatibus ipsa tempora veritatis doloribus nisi impedit.",
        user: {
            name: "Sophia R.",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            country: "United States",
        },
    },
    {
        id: 9,
        title: "SaaS Dashboard UI/UX Design",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis animi libero placeat repellendus. Soluta sint excepturi quo praesentium doloremque beatae quisquam dignissimos, accusantium totam perspiciatis earum quaerat commodi quis maxime facilis enim iure ullam esse accusamus minima fuga rem dolores! Deserunt ea dignissimos ad fuga quod animi eaque ducimus incidunt nemo odit doloremque, impedit nam nulla cum molestias? Aperiam odit unde esse consequatur animi iste odio, veniam necessitatibus error iure eligendi in voluptate voluptatibus ipsa tempora veritatis doloribus nisi impedit.",
        user: {
            name: "Michael D.",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            country: "Canada",
        },
    },
];

export { projectData };