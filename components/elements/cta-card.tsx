'use client';
import Image from "next/image";
import directus from "@/lib/directus";
import { FormEvent, useState } from "react";
import { revalidateTag } from "next/cache";
import { getDictionary } from "@/lib/getDictionary";

const CTACard = ({ dictionary }:{ dictionary:any }) => {
    //const dictionary = await getDictionary(locale);

    // Server Actions Approach
    /* const formAction = async (formData: FormData) => {
        "use server";
        try {
            const email = formData.get("email");
            await directus.items("subscribers").createOne({
               email, 
            });
            revalidateTag("subscribers-count");
        } catch (error) {
            console.log(error);
        }
    };

    const subscribersCount = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}items/subscribers?meta=total_count&access_token=${process.env.ADMIN_TOKEN}`,{
            next: {
                tags: ["subscribers-count"],
            },
        }
    )
    .then((res) => res.json())
    .then((res) => res.meta.total_count)
    .catch((error) => console.log(error)); */
    
    // Client Component Approach
    const [email, setEmail] = useState("");
    const [isHandling, setIsHandling] = useState(false);

    const submitHandler = async (e:FormEvent) => {
        try {
            e.preventDefault();
            setIsHandling(true);
            await directus.items("subscribers").createOne({
                email,
            });
            setIsHandling(false);
            setEmail("");
        } catch (error) {
            console.log(error);
            setIsHandling(false);
        }
    }

    return (
        <div className="px-6 py-10 rounded-md bg-slate-100 relative overflow-hidden">
            {/* Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/95 via-white/70 to-white/30" />
             {/* Image */}
             <Image
             fill
             alt="CTA Card Image"
             className="object-center object-cover" 
             src="https://images.unsplash.com/photo-1602257529928-e3817add87ee?auto=format&fit=crop&q=80&w=1742&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
             {/* Content Container */}
            <div className="relative z-20">
                <div className="text-lg font-medium">#exploretheworld</div>
                <h3 className="text-4xl font-semibold mt-3">{dictionary.ctaCard.title}</h3>
                <p className="mt-2 text-lg max-w-lg">{dictionary.ctaCard.description}</p>
                 {/* Form */}
                <form
                    // Server Actions Approach
                    /* key={subscribersCount + "subscribers-form"}
                     action={formAction}  */
                    onSubmit={submitHandler} 
                    className="flex items-center gap-2 mt-6 w-full">
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={
                            (e) => {
                                setEmail(e.target.value);
                            }
                        } 
                        placeholder={dictionary.ctaCard.placeholder}
                        className="w-full px-3 py-2 text-base bg-white/80 rounded-md outline-none placeholder:text-sm focus:ring-2 ring-neutral-600"
                    />
                    <button type="submit" className="px-3 py-2 whitespace-nowrap md:w-auto rounded-md bg-neutral-900 text-neutral-200">
                        { !isHandling ? dictionary.ctaCard.button : "Sending ..." }
                    </button>
                </form>
                {/* Subscribers for Server Actions Approach */}
                {/* <div className="mt-5 text-neutral-700">
                    {dictionary.ctaCard.subscriberText1}{" "} 
                    <span className="px-2 py-1 rounded-md bg-neutral-700 text-neutral-100 text-sm">
                    {subscribersCount}
                    </span>{" "} 
                    {dictionary.ctaCard.subscriberText2}
                </div> */}
            </div> 
        </div>       
    ); 
};

export default CTACard;