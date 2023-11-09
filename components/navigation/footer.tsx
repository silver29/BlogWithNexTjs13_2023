import siteConfig from "@/config/site";
import PaddingContainer from "../layout/padding-container";
import Link from "next/link";
import SocialLink from "../elements/social-link";
import { getDictionary } from "@/lib/getDictionary";

const Footer = async({ locale }:{ locale: string }) => {
    const dictionary = await getDictionary(locale);
    return (
        <div className="py-8 border-t mt-10">
            <PaddingContainer>
                <div>
                    <h2 className="text-3xl font-bold">{siteConfig.siteName}</h2>
                    <p className="max-w-md mt-2 text-lg text-neutral-700">{dictionary.footer.description}</p>
                </div>
                {/* Social and Currently At */}
                <div className="mt-6 flex justify-between gap-4 flex-wrap">
                    <div>
                        <div className="font-medium text-lg">#exploretheworld</div>
                        <div className="flex items-center gap-3 text-neutral-600 mt-2">
                            <SocialLink platform="twitter" link={ siteConfig.socialLinks.twitter}/>
                            <SocialLink platform="instagram" link={ siteConfig.socialLinks.instagram}/>
                            <SocialLink platform="github" link={ siteConfig.socialLinks.github}/>
                            <SocialLink platform="youtube" link={ siteConfig.socialLinks.youtube}/>
                            <SocialLink platform="linkedin" link={ siteConfig.socialLinks.linkedin}/>
                        </div>
                    </div>
                    <div>
                        <div className="text-sm text-neutral-400">{dictionary.footer.currentlyAtText}</div>
                        <div className="px-3 py-2 bg-white rounded-md shadow-md flex items-center">
                            {/* <div className="bg-emerald-400 rounded-full w-2 h-2" />
                                {siteConfig.currentlyAt} */}
                                {/* <div className="bg-emerald-400 rounded-full w-2 h-2 m-2" />
                                <div>{siteConfig.currentlyAt}</div> */}
                                <div className="bg-emerald-400 rounded-full w-2 h-2 mr-2" />
                                {siteConfig.currentlyAt}
                        </div>
                    </div>
                </div>
                {/* Bottom Section */}
                <div className="border-t py-3 flex items-center gap-4 flex-wrap justify-between mt-16">
                    <div className="text-sm text-neutral-400">
                        {dictionary.footer.rightsText} {new Date().getFullYear()}
                    </div>
                    <div className="text-sm">
                        {dictionary.footer.creatorText}{" "} 
                        <Link className="underline underline-offset-4" href="https://twitter.com/makrdev">
                            @makrdev
                        </Link> 
                    </div>
                </div>
            </PaddingContainer>
        </div>
    );        
};

export default Footer;
