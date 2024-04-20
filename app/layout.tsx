import React from 'react'
import Script from 'next/script'
import { Comic_Neue, Manrope, Space_Grotesk } from 'next/font/google'
import clsx from 'clsx'
import { Config } from '@/config'
// import ContextProviders from '@/components/context-providers'
import './globals.css'

const comicNeue = Comic_Neue({
  variable: '--font-comic-neue',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
})

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
})

export const metadata = {
  title: Config.APP_NAME,
  description: Config.APP_DESCRIPTION,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){
            dataLayer.push(arguments);
          }
          gtag('consent', 'default', {
            'ad_storage': 'granted',
            'analytics_storage': 'granted',
            'personalization_storage': 'granted',
            'functionality_storage': 'granted',
            'security_storage': 'granted',
          });
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
        `}
        </Script>
        <link rel="icon" href="http://www.yoursite.com/favicon.ico?v=2" />

        {/* End Google Tag Manager */}
      </head>
      <body
        className={clsx(
          comicNeue.variable,
          manrope.variable,
          spaceGrotesk.variable,
          'font-comic-neue',
        )}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <div>
          <main>{children}</main>
        </div>
        {/* End Google Tag Manager (noscript) */}
        {/* <ContextProviders>{children}</ContextProviders> */}
      </body>
    </html>
  )
}
