import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="TravelGPT" key="title"/>
        <meta property="og:description" content="Find Fun and Unique Travel Ideas" key="description"/>
        <meta
          property="og:image"
          content="https://previews.dropbox.com/p/thumb/AByZoyRCNq_qi6NvmDiO-uvWHnY7U_jBK-mv_m48XTkeT3DlrGJ5XD6HeJi-nAUjPSNIg4eTw6CwtA2uHgYgalPpQ5Mr3FctR_ABK3MjMWwhF6fxKzbeZqFnLR6_FtMpRSYffPdW-LznP-arpSSd0fgQufaVIvf_4jh7gVVaNBeacAJ-o5pS2-ov0xtXFSOclZ4ZDWyvGr7qw4fMJWmXVQcVM-aYJIZY6_7GxnejkXSocZ5CEpy4ywjc3LzNQS2ERk7tU7e8QGjrcG91yQP_y84p4dX-dot1TWMXfAuBJ540R8oz0Op5B6QIDzeWqTIAQJZHUJo1tcfAhuMIKxTT4HHbW4B-42gkv2RrXke-jnJT9hK1Xpu0R9KrFjDxslPKjQ8/p.png"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
