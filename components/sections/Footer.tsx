import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0b0f19] text-gray-400 py-16 text-sm">
      <div className="container-custom">
         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
            <div className="col-span-2 lg:col-span-2">
               <p className="text-xs font-bold text-white mb-6 uppercase tracking-wider">Get With Onramp</p>
               <div className="flex flex-wrap gap-2 mb-8">
                  {['BTC', 'ETH', 'USDT', 'USDC', 'BNB', 'XRP', 'MATIC', 'DOGE', 'TRX'].map(coin => (
                     <span key={coin} className="px-2 py-1 bg-white/5 rounded text-[10px] text-white/70 border border-white/10 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"/> {coin}
                     </span>
                  ))}
               </div>
            </div>

            <div>
               <h4 className="font-bold text-white mb-4">Company</h4>
               <ul className="space-y-2 text-xs">
                  <li><a href="#" className="hover:text-white">About Us</a></li>
                  <li><a href="#" className="hover:text-white">Partnerships</a></li>
                  <li><a href="#" className="hover:text-white">Careers</a></li>
                  <li><a href="#" className="hover:text-white">News & Updates</a></li>
                  <li><a href="#" className="hover:text-white">Media Kit(PDF)</a></li>
                  <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
               </ul>
            </div>

            <div>
               <h4 className="font-bold text-white mb-4">Developers</h4>
               <ul className="space-y-2 text-xs">
                  <li><a href="#" className="hover:text-white">Supported Tokens</a></li>
                  <li><a href="#" className="hover:text-white">Experience</a></li>
               </ul>
            </div>

            <div>
               <h4 className="font-bold text-white mb-4">Help</h4>
               <ul className="space-y-2 text-xs">
                  <li><a href="#" className="hover:text-white">Documentation</a></li>
                  <li><a href="#" className="hover:text-white">Support</a></li>
                  <li><a href="#" className="hover:text-white">System Health</a></li>
                  <li><a href="#" className="hover:text-white">Channel Partners</a></li>
               </ul>
            </div>

            <div className="flex flex-col gap-4">
               <div className="flex gap-4">
                  <a href="#" className="hover:text-white"><Twitter className="w-4 h-4" /></a>
                  <a href="#" className="hover:text-white"><YoutubeIcon /></a>
                  <a href="#" className="hover:text-white"><Linkedin className="w-4 h-4" /></a>
               </div>
               <div className="flex gap-4">
                   <a href="#" className="hover:text-white"><TelegramIcon /></a>
                   <a href="#" className="hover:text-white"><Facebook className="w-4 h-4" /></a>
                   <a href="#" className="hover:text-white"><MediumIcon /></a>
               </div>
               
               <div className="mt-4 space-y-2">
                  <button className="w-full bg-black border border-gray-700 rounded p-2 flex items-center gap-2 hover:bg-gray-900">
                     <div className="w-4 h-4 bg-gradient-to-tr from-blue-400 to-green-400 rounded-sm" /> 
                     <div className="text-[10px] text-left leading-none">
                        <span className="block text-[8px]">GET IT ON</span>
                        <span className="font-bold text-white">Google Play</span>
                     </div>
                  </button>
                  <button className="w-full bg-black border border-gray-700 rounded p-2 flex items-center gap-2 hover:bg-gray-900">
                     <div className="w-4 h-4 text-white"></div> 
                     <div className="text-[10px] text-left leading-none">
                        <span className="block text-[8px]">Download on the</span>
                        <span className="font-bold text-white">App Store</span>
                     </div>
                  </button>
               </div>
            </div>
         </div>

         <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px]">
            <div className="flex gap-4">
               <a href="#">Terms & Conditions (Platform)</a>
               <a href="#">Compliance Statement</a>
               <a href="#">Privacy Policy</a>
               <a href="#">Terms & Conditions (Corporate)</a>
               <a href="#">Guidelines for Law Enforcement</a>
               <a href="#">User Verification AML</a>
               <a href="#">General Risk Disclosure</a>
            </div>
            <p>© 2026 Onramp Money. All rights reserved.</p>
         </div>
      </div>
    </footer>
  );
}

function YoutubeIcon() {
   return (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
   )
}

function TelegramIcon() {
   return (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
   )
}

function MediumIcon() {
   return (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M0 0v24h24V0H0zm19.938 5.686L18.651 6.92c-.118.118-.177.302-.15.474V17.03c-.028.174.031.36.15.48l1.286 1.234v.152H12.84v-.152l1.284-1.234c.118-.12.176-.306.15-.48V8.408l-4.148 10.61H9.68L5.138 8.408v7.356c-.005.166.042.33.134.467l1.717 2.535v.152H.99v-.152l1.717-2.535c.093-.138.14-.302.134-.467V6.66c.006-.166-.042-.33-.134-.468L.99 3.658V3.5h6.463l3.666 8.527 3.33-8.527h6.49v.152z"/></svg>
   )
}
