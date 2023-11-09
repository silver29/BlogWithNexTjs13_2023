import Link from 'next/link'
import React from 'react'
import PaddingContainer from '../layout/padding-container';
import { getDictionary } from '@/lib/getDictionary';
import LangSwitcher from './lang-switcher';

const navigation = async ({locale}:{ locale:string }) => {
  const dictionary = await getDictionary(locale);
  return (
        /* <div className="border-b sticky top-0 left-0 right-0 bg-white bg-opacity-50 backdrop-blur-md"> */
        <div className="border-b sticky top-0 z-[999] left-0 right-0 bg-white bg-opacity-50 backdrop-blur-md">
        <PaddingContainer>
          <div className="flex items-center justify-between py-5">
              <Link className="text-lg font-bold" href={`/${locale}`}>Explorer</Link>
              {/* Category Links */}
              <nav>
                <ul className="flex items-center gap-4 text-neutral-600">
                  <li><LangSwitcher locale={locale} /></li>
                  <li><Link href={`/${locale}/cities`}>{dictionary.navigation.links.cities}</Link></li>
                  <li><Link href={`/${locale}/experiences`}>{dictionary.navigation.links.experiences}</Link></li>
                </ul>
              </nav>
          </div>
        </PaddingContainer>
      </div>
  );
};

export default navigation;