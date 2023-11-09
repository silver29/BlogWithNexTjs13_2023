/** @type {import('next').NextConfig} */
const nextConfig = {
     images:{
        remotePatterns:[
            {
                hostname:"images.unsplash.com",
                protocol:"https",
            },
            {
                hostname:"plus.unsplash.com",
                protocol:"https",
            },
            {
                hostname:"directus-production-84e1.up.railway.app",
                protocol:"https",
            },
            {
                hostname:"directus-production-84e1.up.railway.app/assets",
                protocol:"https",
            },
            {
                hostname:"myblog-nextjs13.vercel.app",
                protocol:"https",
            },
            {
                hostname:"myblog-nextjs13.vercel.app/_next/image?url=",
                protocol:"https",
            },
            {
                hostname:"https://blog-nextjs-13-2023-p0f9dfgh0-silver29.vercel.app",
                protocol:"https",
            },
            {
                hostname:"https://blog-nextjs-13-2023-p0f9dfgh0-silver29.vercel.app/_next/image?url=",
                protocol:"https",
            },
        ]
    },
    /* experimental:{
        serverActions: true,
    }, */
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
};

module.exports = nextConfig;


