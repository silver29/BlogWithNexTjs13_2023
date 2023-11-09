import { Category, Post } from "./types/collection";

export const DUMMY_POSTS:Post[] = [
    {
        id:"1",
        title:"A lovely green city: New York",
        description:"New York is a city in the United States of America",
        category:{id:"1", title:"Cities"},
        author:{id:"1", first_name:"John", last_name:"Doe" },
        slug:"a-lovely-green-city-new-york",
        image:
            "https://plus.unsplash.com/premium_photo-1682657002370-dc4a045fe00a?auto=format&fit=crop&q=80&w=1635&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        body:"New York is a city in the United States of America ...",
        date_created:"2021-07-01T00:00:00.000Z",
        date_updated:"2021-07-01T00:00:00.000Z",
    },
    {
        id:"2",
        title:"A lovely green city: New York 2",
        description:"New York is a city in the United States of America 2",
        category:{id:"2", title:"Cities"},
        author:{id:"2", first_name:"John", last_name:"Doe" },
        slug:"a-lovely-green-city-new-york-2",
        image:
            "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        body:"New York is a city in the United States of America 2222 ...",
        date_created:"2022-02-01T00:00:00.000Z",
        date_updated:"2022-02-01T00:00:00.000Z",
    },
    {
        id:"3",
        title:"A lovely green city: New York 3",
        description:"New York is a city in the United States of America 3",
        category:{id:"2", title:"Cities"},
        author:{id:"2", first_name:"John", last_name:"Doe" },
        slug:"a-lovely-green-city-new-york-3",
        image:
            "https://plus.unsplash.com/premium_photo-1682116752956-c880046f5361?auto=format&fit=crop&q=80&w=1899&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        body:"New York is a city in the United States of America 2222 ...",
        date_created:"2023-05-01T00:00:00.000Z",
        date_updated:"2023-05-01T00:00:00.000Z",
    },
    {
        id:"4",
        title:"A lovely green city: New York 4",
        description:"New York is a city in the United States of America 4",
        category:{id:"2", title:"Cities"},
        author:{id:"2", first_name:"John", last_name:"Doe" },
        slug:"a-lovely-green-city-new-york-4",
        image:
            "https://images.unsplash.com/photo-1592056003234-410068aaf3dd?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        body:"New York is a city in the United States of America 2222 ...",
        date_created:"2023-08-01T00:00:00.000Z",
        date_updated:"2023-08-01T00:00:00.000Z",
    },
    {
        id:"5",
        title:"A lovely green city: New York 5",
        description:"New York is a city in the United States of America 5",
        category:{id:"2", title:"Experiences"},
        author:{id:"2", first_name:"John", last_name:"Doe" },
        slug:"a-lovely-green-city-new-york-5",
        image:
            "https://plus.unsplash.com/premium_photo-1682657002370-dc4a045fe00a?auto=format&fit=crop&q=80&w=1635&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        body:"New York is a city in the United States of America 2222 ...",
        date_created:"2023-09-01T00:00:00.000Z",
        date_updated:"2023-09-01T00:00:00.000Z",
    },
    {
        id:"6",
        title:"A lovely green city: New York 6",
        description:"New York is a city in the United States of America 6",
        category:{id:"2", title:"Experiences"},
        author:{id:"2", first_name:"John", last_name:"Doe" },
        slug:"a-lovely-green-city-new-york-6",
        image:
            "https://images.unsplash.com/photo-1526516740981-3818d355641e?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        body:"New York is a city in the United States of America 2222 ...",
        date_created:"2023-10-01T00:00:00.000Z",
        date_updated:"2023-10-01T00:00:00.000Z",
    },
];

export const DUMMY_CATEGORIES: Category[] = [
    {
        id:"1",
        title:"Cities",
        slug:"cities",
        description:"Travel every city that I've been with me! I'll be sharing hidden gems in every city.",
    },
    {
        id:"2",
        title:"Experiences",
        slug:"experiences",
        description:"Experience the world with me! I'll be sharing my adventures and experiences in every country ...",
    },
];