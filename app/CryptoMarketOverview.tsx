import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import Link from 'next/link'
import Image from 'next/image'

export default function Component() {
  return (
    <div className="bg-[#f0f2f5] min-h-screen">
      <header className="bg-[#4052b5] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-[#4052b5] font-bold">B</span>
            </div>
            <span className="font-bold text-xl">Bitvavo Insights</span>
          </div>
          <button className="text-white" aria-label="Menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Crypto Market Overview</h1>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Industry News</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Brand Partnerships</h3>
                <Card className="mb-4">
                  <CardContent className="p-4">
                    <h4 className="text-lg font-semibold mb-2">Coinbase and Mastercard end crypto card partnership.</h4>
                    <p className="text-sm text-gray-600 mb-2">Mastercard (MA.N), opens new tab and crypto exchange Binance will end their four crypto card programmes in Argentina, Brazil, Colombia and Bahrain as of Sept. 22, a spokesperson for Mastercard said via email on Thursday.</p>
                    <Link href="https://www.reuters.com/business/finance/mastercard-binance-end-crypto-card-partnership-2023-08-24/" className="text-blue-600 hover:underline">Read more →</Link>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="text-lg font-semibold mb-2">Coinbase and BlackRock Partnership</h4>
                    <p className="text-sm text-gray-600 mb-2">Coinbase teams up with BlackRock to provide institutional clients with crypto trading and custody services.</p>
                    <Link href="https://www.etfstream.com/articles/blackrock-partners-with-coinbase-to-expand-crypto-offering" className="text-blue-600 hover:underline">Read more →</Link>
                  </CardContent>
                </Card>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">VC Raises & Announcements</h3>
                <Card className="mb-4">
                  <CardContent className="p-4">
                    <h4 className="text-lg font-semibold mb-2">Optimism Raises $150M in Series B</h4>
                    <p className="text-sm text-gray-600 mb-2">Ethereum Layer 2 solution Optimism secures $150M in Series B funding to scale its infrastructure.</p>
                    <Link href="https://cointelegraph.com/news/optimism-saves-users-1b-in-fees-raises-150m-in-series-b" className="text-blue-600 hover:underline">Read more →</Link>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="text-lg font-semibold mb-2">Aave Secures $25M for Institutional Adoption</h4>
                    <p className="text-sm text-gray-600 mb-2">DeFi protocol Aave raises $25M to accelerate institutional adoption of decentralized finance.</p>
                    <Link href="https://www.cryptoknowmics.com/news/aave-raises-25m-in-its-latest-venture-capital-investment-round" className="text-blue-600 hover:underline">Read more →</Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Market Metrics</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Ethereum Layer 2 Transaction Surge</h3>
                  <p className="text-sm text-gray-600 mb-4">Ethereum Layer 2 solutions like Arbitrum and Base are experiencing rapid growth in transaction volumes, significantly outpacing Layer 1 activity in 2024.</p>
                  <Image
                    src="/WeeklyTransactionCountETHL1vsL2.jpeg"
                    width={500}
                    height={300}
                    alt="Ethereum Layer 2 Transaction Chart"
                    className="w-full h-auto"
                  />
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">EURC Supply on Base</h3>
                  <p className="text-sm text-gray-600 mb-4">The EURC supply on the Base network has steadily increased throughout August 2024, reaching over $2.5 million in circulating supply.</p>
                  <Image
                    src="/TTEURCSupply.jpeg"
                    width={500}
                    height={300}
                    alt="EURC Supply on Base Chart"
                    className="w-full h-auto"
                  />
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Total Value Locked</h2>
            <p className="text-sm text-gray-600 mb-4">The chart highlights the market dominance of top DeFi protocols, with TAO and NEAR leading in marketshare, accounting for 15.85% and 14.73% respectively, followed by FET at 8.85%.</p>
            <Image
              src="/AITokensMindshareKaito.jpeg"
              width={800}
              height={400}
              alt="Total Value Locked Chart"
              className="w-full h-auto"
            />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Project Spotlight: Story Protocol</h2>
            <Image
              src="/story-protocol.jpeg"
              width={800}
              height={600}
              alt="Story Protocol Infographic"
              className="w-full h-auto mb-4"
            />
            <p className="text-sm text-gray-600">
              Story Protocol is the world's first IP Blockchain, designed to make intellectual property programmable. It offers a universal license agreement to tokenize IP and set legally binding license terms. The protocol uses a Proof-of-Creativity mechanism to manage licenses (ERC-721) and royalties (ERC-20) etc.
            </p>
            <h3 className="text-lg font-semibold mt-4 mb-2">Key Features:</h3>
            <ul className="list-disc list-inside text-sm text-gray-600">
              <li>Universal license agreement for tokenizing IP</li>
              <li>Proof-of-Creativity mechanism for license management</li>
              <li>Support for various IP types: literature, films, gaming assets, memes, etc.</li>
              <li>Integration with existing legal frameworks</li>
            </ul>
            <h3 className="text-lg font-semibold mt-4 mb-2">Applications:</h3>
            <p className="text-sm text-gray-600">
              Story Protocol can power all types of applications, from AI models to IP, to creator tools and NFTs as well. It has the potential to revolutionize how intellectual property is managed, licensed, and monetized in the digital age.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}