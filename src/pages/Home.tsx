// import React from 'react';
// import { Sparkles, Users, Coins, ArrowRight, Star, Zap, Shield, ChevronDown, Link } from 'lucide-react';
// import WalletConnection from '../components/WalletConnection';
// import { useWallet } from '../hooks/useWallet';


// const Home: React.FC = () => {
//   const { isConnected } = useWallet();
//   console.log(isConnected);
//   console.log(isConnected);

//   return (
//     <div className="min-h-screen bg-white relative overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-60 animate-float"></div>
//         <div className="absolute top-20 -right-40 w-96 h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-60 animate-float-delayed"></div>
//         <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full opacity-60 animate-float-slow"></div>
//         <div className="absolute bottom-40 right-1/4 w-72 h-72 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full opacity-60 animate-bounce-slow"></div>
//       </div>

//       <div className="relative z-10 container mx-auto px-4 py-20">
//         {/* Hero Section */}
//         <div className="text-center mb-20 animate-fade-in">
//           <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm rounded-full px-6 py-3 mb-8 text-gray-700 border border-blue-200/50 animate-slide-down">
//             <Star className="w-4 h-4 text-yellow-500 animate-spin-slow" />
//             <span className="text-sm font-medium">Welcome to the future of creator economy</span>
//           </div>

//           <h1 className="text-7xl md:text-8xl font-thin text-gray-900 mb-6 animate-slide-up">
//             <span className="font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
//               Pledgr
//             </span>
//           </h1>

//           <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
//             Connect your wallet to register as a creator, build your profile, and engage with your fans through blockchain-powered rewards
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-400">
  
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-400">

//             <WalletConnection title={'Connect wallet'} connectedContent={<Link to="/dashboard" className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
//               <span className="flex items-center gap-2">
//                 Go to Dashboard
//                 <ArrowRight className="w-4 h-4" />
//               </span>
//             </Link>} />

//             <button className="group px-8 py-4 text-gray-700 border-2 border-gray-300 rounded-full font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 transform hover:scale-105">
//               <span className="flex items-center gap-2">
//                 Learn More
//                 <ChevronDown className="w-4 h-4" />
//               </span>
//             </button>
//           </div>

//             <button className="group px-8 py-4 text-gray-700 border-2 border-gray-300 rounded-full font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 transform hover:scale-105">
//               <span className="flex items-center gap-2">
//                 Learn More
//                 <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
//               </span>
//             </button>
//           </div>
//         </div>

//         {/* Features Grid */}
//         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
//           <div className="group bg-white rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 hover:border-blue-200 animate-fade-in-up animation-delay-600">
//             <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
//               <Sparkles className="w-8 h-8 text-white animate-pulse" />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Create Profile</h3>
//             <p className="text-gray-600 text-lg leading-relaxed">Build your creator identity with name, bio, and avatar to stand out in the community</p>
//           </div>

//           <div className="group bg-white rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 hover:border-purple-200 animate-fade-in-up animation-delay-800">
//             <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
//               <Users className="w-8 h-8 text-white animate-bounce-subtle" />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">Grow Community</h3>
//             <p className="text-gray-600 text-lg leading-relaxed">Connect with fans and build your creator community through meaningful interactions</p>
//           </div>

//           <div className="group bg-white rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 hover:border-green-200 animate-fade-in-up animation-delay-1000">
//             <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
//               <Coins className="w-8 h-8 text-white animate-wiggle" />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">Earn Rewards</h3>
//             <p className="text-gray-600 text-lg leading-relaxed">Track your balance and staking rewards with transparent blockchain technology</p>
//           </div>
//         </div>

//         {/* Stats Section */}
//         <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 mb-20 border border-blue-100 animate-fade-in-up animation-delay-1200">
//           <div className="grid md:grid-cols-4 gap-8 text-center">
//             <div className="animate-count-up">
//               <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
//               <div className="text-gray-600">Active Creators</div>
//             </div>
//             <div className="animate-count-up animation-delay-200">
//               <div className="text-4xl font-bold text-purple-600 mb-2">$2M+</div>
//               <div className="text-gray-600">Rewards Distributed</div>
//             </div>
//             <div className="animate-count-up animation-delay-400">
//               <div className="text-4xl font-bold text-pink-600 mb-2">50K+</div>
//               <div className="text-gray-600">Community Members</div>
//             </div>
//             <div className="animate-count-up animation-delay-600">
//               <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
//               <div className="text-gray-600">Uptime</div>
//             </div>
//           </div>
//         </div>

//         {/* Benefits Section */}
//         <div className="bg-white rounded-3xl p-12 border border-gray-100 shadow-lg animate-fade-in-up animation-delay-1400">
//           <h2 className="text-4xl font-bold text-gray-900 text-center mb-12 animate-slide-up">Why Choose Pledgr?</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="text-center group">
//               <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
//                 <Zap className="w-6 h-6 text-white animate-flash" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">Lightning Fast</h3>
//               <p className="text-gray-600">Instant transactions and real-time updates</p>
//             </div>
//             <div className="text-center group">
//               <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
//                 <Shield className="w-6 h-6 text-white animate-pulse" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Secure</h3>
//               <p className="text-gray-600">Blockchain-powered security and transparency</p>
//             </div>
//             <div className="text-center group">
//               <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
//                 <Star className="w-6 h-6 text-white animate-twinkle" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">Rewarding</h3>
//               <p className="text-gray-600">Earn tokens for your creative contributions</p>
//             </div>
//           </div>
//         </div>

//         {/* Team Section */}
//         <div className="mt-20 mb-20 animate-fade-in-up animation-delay-1600">
//           <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">Meet Our Creators</h2>
//           <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
//             The builders behind the Pledgr creator staking application
//           </p>
//           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {/* Simon Muchemi */}
//             <div className="group text-center bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
//               <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300 shadow-lg">
//           SM
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">Simon Muchemi</h3>
//               <p className="text-blue-600 font-semibold mb-3">Creator staking application</p>
//               <p className="text-gray-600 text-sm mb-2">Stack: Python, Node.JS</p>
//               <p className="text-gray-600 text-sm mb-2">Email: Muchemi.developer@gmail.com</p>
//               <div className="flex justify-center gap-3 mt-2">
//           <a href="https://github.com/SymonMuchemi" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 underline">Personal GitHub</a>
//           <a href="https://github.com/Pledger-DAO" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 underline">Project GitHub</a>
//               </div>
//             </div>
//             {/* Shramee Srivastav */}
//             <div className="group text-center bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
//               <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300 shadow-lg">
//           SS
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">Shramee Srivastav</h3>
//               <p className="text-purple-600 font-semibold mb-3">Creator staking application</p>
//               <p className="text-gray-600 text-sm mb-2">Stack: Arch/Crypto math</p>
//               <p className="text-gray-600 text-sm mb-2">Email: shramee.srivastav@gmail.com</p>
//               <div className="flex justify-center gap-3 mt-2">
//           <a href="https://github.com/shramee" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-600 underline">Personal GitHub</a>
//           <a href="https://github.com/Pledger-DAO" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-600 underline">Project GitHub</a>
//               </div>
//             </div>
//             {/* Mozart Kandie */}
//             <div className="group text-center bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
//               <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300 shadow-lg">
//           MK
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">Mozart Kandie</h3>
//               <p className="text-green-600 font-semibold mb-3">Creator staking application</p>
//               <p className="text-gray-600 text-sm mb-2">Stack: React, Node</p>
//               <p className="text-gray-600 text-sm mb-2">Email: MozzartKandie@gmail.com</p>
//               <div className="flex justify-center gap-3 mt-2">
//           <a href="https://github.com/legacymoz" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-600 underline">Personal GitHub</a>
//           <a href="https://github.com/Pledger-DAO" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-600 underline">Project GitHub</a>
//               </div>
//             </div>
//             {/* Jim Leston */}
//             <div className="group text-center bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
//               <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-red-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300 shadow-lg">
//           JL
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">Jim Leston</h3>
//               <p className="text-pink-600 font-semibold mb-3">Creator staking application (Team Lead)</p>
//               <p className="text-gray-600 text-sm mb-2">Stack: Node/Web/Mobile App</p>
//               <p className="text-gray-600 text-sm mb-2">Email: jimlestonosoi42@gmail.com</p>
//               <div className="flex justify-center gap-3 mt-2">
//           <a href="https://github.com/lestonEth" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600 underline">Personal GitHub</a>
//           <a href="https://github.com/Pledger-DAO" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600 underline">Project GitHub</a>
//               </div>
//             </div>
//             {/* Tonny Murithi */}
//             <div className="group text-center bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
//               <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300 shadow-lg">
//           TM
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">Tonny Murithi</h3>
//               <p className="text-yellow-600 font-semibold mb-3">Creator staking application</p>
//               <p className="text-gray-600 text-sm mb-2">Stack: Solidity, AI</p>
//               <p className="text-gray-600 text-sm mb-2">Email: tonnymurithi.tg@gmail.com</p>
//               <div className="flex justify-center gap-3 mt-2">
//           <a href="https://github.com/metonniex" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-yellow-600 underline">Personal GitHub</a>
//           <a href="https://github.com/Pledger-DAO" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-yellow-600 underline">Project GitHub</a>
//               </div>
//             </div>
//             {/* Cynthia Wanjiru */}
//             <div className="group text-center bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
//               <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300 shadow-lg">
//           CW
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">Cynthia Wanjiru</h3>
//               <p className="text-indigo-600 font-semibold mb-3">Creator staking application</p>
//               <p className="text-gray-600 text-sm mb-2">Stack: Full-stack</p>
//               <p className="text-gray-600 text-sm mb-2">Email: cynthiamuemi@gmail.com</p>
//               <div className="flex justify-center gap-3 mt-2">
//           <a href="https://github.com/Preciousmuemi" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 underline">Personal GitHub</a>
//           <a href="https://github.com/Pledger-DAO" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 underline">Project GitHub</a>
//               </div>
//             </div>
//             {/* Ian Macharia */}
//             <div className="group text-center bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
//               <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300 shadow-lg">
//           IM
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">Ian Macharia</h3>
//               <p className="text-cyan-600 font-semibold mb-3">Creator staking application</p>
//               <p className="text-gray-600 text-sm mb-2">Stack: Py, Solidity, Node JS</p>
//               <p className="text-gray-600 text-sm mb-2">Email: Macharia.gichoya@gmail.com</p>
//               <div className="flex justify-center gap-3 mt-2">
//           <a href="https://github.com/I-Macharia" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-600 underline">Personal GitHub</a>
//           <a href="https://github.com/Pledger-DAO" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-600 underline">Project GitHub</a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Testimonials Section */}
//         <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 mb-20 border border-blue-100 animate-fade-in-up animation-delay-1800">
//           <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">What Creators Are Saying</h2>
//           <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//             <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
//               <div className="flex items-center mb-4">
//                 <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-red-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
//                   EM
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-gray-900">Emma Martinez</h4>
//                   <p className="text-gray-600 text-sm">Digital Artist</p>
//                 </div>
//               </div>
//               <p className="text-gray-700 italic">"Pledgr has transformed how I connect with my audience. The staking rewards system is brilliant - my fans are more engaged than ever!"</p>
//               <div className="flex text-yellow-400 mt-4">
//                 <Star className="w-5 h-5 fill-current" />
//                 <Star className="w-5 h-5 fill-current" />
//                 <Star className="w-5 h-5 fill-current" />
//                 <Star className="w-5 h-5 fill-current" />
//                 <Star className="w-5 h-5 fill-current" />
//               </div>
//             </div>

//             <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
//               <div className="flex items-center mb-4">
//                 <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
//                   DK
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-gray-900">David Kim</h4>
//                   <p className="text-gray-600 text-sm">Music Producer</p>
//                 </div>
//               </div>
//               <p className="text-gray-700 italic">"The transparent reward system and instant payments are game-changers. I've earned more in 3 months than my previous platform in a year."</p>
//               <div className="flex text-yellow-400 mt-4">
//                 <Star className="w-5 h-5 fill-current" />
//                 <Star className="w-5 h-5 fill-current" />
//                 <Star className="w-5 h-5 fill-current" />
//                 <Star className="w-5 h-5 fill-current" />
//                 <Star className="w-5 h-5 fill-current" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Visual Features Section */}
//         <div className="mb-20 animate-fade-in-up animation-delay-2000">
//           <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">See It In Action</h2>
//           <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
//             <div className="order-2 md:order-1">
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-Time Dashboard</h3>
//               <p className="text-gray-600 mb-6 text-lg">Track your earnings, community growth, and engagement metrics with our intuitive dashboard. See your progress in real-time with beautiful visualizations.</p>
//               <ul className="space-y-3">
//                 <li className="flex items-center text-gray-700">
//                   <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
//                   Live earnings tracking
//                 </li>
//                 <li className="flex items-center text-gray-700">
//                   <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
//                   Community analytics
//                 </li>
//                 <li className="flex items-center text-gray-700">
//                   <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
//                   Staking rewards calculator
//                 </li>
//               </ul>
//             </div>
//             <div className="order-1 md:order-2">
//               <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 shadow-lg">
//                 <div className="bg-white rounded-2xl p-6 mb-4">
//                   <div className="flex items-center justify-between mb-4">
//                     <h4 className="font-bold text-gray-900">Your Earnings</h4>
//                     <span className="text-green-600 font-bold">+15.2%</span>
//                   </div>
//                   <div className="text-3xl font-bold text-gray-900 mb-2">$2,847.50</div>
//                   <div className="w-full bg-gray-200 rounded-full h-2">
//                     <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-3/4 animate-pulse"></div>
//                   </div>
//                 </div>
//                 <div className="bg-white rounded-2xl p-6">
//                   <h4 className="font-bold text-gray-900 mb-4">Community Growth</h4>
//                   <div className="flex items-center justify-between">
//                     <div className="text-center">
//                       <div className="text-xl font-bold text-blue-600">1,234</div>
//                       <div className="text-sm text-gray-600">Followers</div>
//                     </div>
//                     <div className="text-center">
//                       <div className="text-xl font-bold text-purple-600">89%</div>
//                       <div className="text-sm text-gray-600">Engagement</div>
//                     </div>
//                     <div className="text-center">
//                       <div className="text-xl font-bold text-green-600">567</div>
//                       <div className="text-sm text-gray-600">Stakers</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Final CTA Section */}
//         <div className="text-center mt-20 animate-fade-in-up animation-delay-2200">
//           <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-slide-up">Ready to Start Your Journey?</h2>
//           <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-slide-up animation-delay-200">
//             Join thousands of creators who are already building their communities on Pledgr
//           </p>
//           <div className="animate-slide-up animation-delay-400">
//             <WalletConnection title={''} />
//           </div>
//         </div>
//       </div>

//       {/* Custom CSS for animations */}
//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(180deg); }
//         }
//         @keyframes float-delayed {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-30px) rotate(-180deg); }
//         }
//         @keyframes float-slow {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-15px) rotate(90deg); }
//         }
//         @keyframes bounce-slow {
//           0%, 100% { transform: translateY(0px) scale(1); }
//           50% { transform: translateY(-10px) scale(1.05); }
//         }
//         @keyframes gradient {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//         @keyframes fade-in {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         @keyframes slide-up {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes slide-down {
//           from { opacity: 0; transform: translateY(-30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes fade-in-up {
//           from { opacity: 0; transform: translateY(40px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes wiggle {
//           0%, 100% { transform: rotate(0deg); }
//           25% { transform: rotate(-3deg); }
//           75% { transform: rotate(3deg); }
//         }
//         @keyframes bounce-subtle {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-5px); }
//         }
//         @keyframes flash {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0.5; }
//         }
//         @keyframes twinkle {
//           0%, 100% { transform: scale(1); }
//           50% { transform: scale(1.2); }
//         }
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         @keyframes count-up {
//           from { transform: scale(0.8); opacity: 0; }
//           to { transform: scale(1); opacity: 1; }
//         }

//         .animate-float { animation: float 6s ease-in-out infinite; }
//         .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
//         .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
//         .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
//         .animate-gradient { animation: gradient 3s ease infinite; background-size: 400% 400%; }
//         .animate-fade-in { animation: fade-in 1s ease-out; }
//         .animate-slide-up { animation: slide-up 1s ease-out; }
//         .animate-slide-down { animation: slide-down 1s ease-out; }
//         .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
//         .animate-wiggle { animation: wiggle 2s ease-in-out infinite; }
//         .animate-bounce-subtle { animation: bounce-subtle 2s ease-in-out infinite; }
//         .animate-flash { animation: flash 2s ease-in-out infinite; }
//         .animate-twinkle { animation: twinkle 1.5s ease-in-out infinite; }
//         .animate-spin-slow { animation: spin-slow 3s linear infinite; }
//         .animate-count-up { animation: count-up 1s ease-out; }

//         .animation-delay-200 { animation-delay: 0.2s; }
//         .animation-delay-400 { animation-delay: 0.4s; }
//         .animation-delay-600 { animation-delay: 0.6s; }
//         .animation-delay-800 { animation-delay: 0.8s; }
//         .animation-delay-1000 { animation-delay: 1s; }
//         .animation-delay-1200 { animation-delay: 1.2s; }
//         .animation-delay-1400 { animation-delay: 1.4s; }
//         .animation-delay-1600 { animation-delay: 1.6s; }
//       `}</style>

//       {/* Custom CSS for animations */}
//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(180deg); }
//         }
//         @keyframes float-delayed {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-30px) rotate(-180deg); }
//         }
//         @keyframes float-slow {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-15px) rotate(90deg); }
//         }
//         @keyframes bounce-slow {
//           0%, 100% { transform: translateY(0px) scale(1); }
//           50% { transform: translateY(-10px) scale(1.05); }
//         }
//         @keyframes gradient {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//         @keyframes fade-in {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         @keyframes slide-up {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes slide-down {
//           from { opacity: 0; transform: translateY(-30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes fade-in-up {
//           from { opacity: 0; transform: translateY(40px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes wiggle {
//           0%, 100% { transform: rotate(0deg); }
//           25% { transform: rotate(-3deg); }
//           75% { transform: rotate(3deg); }
//         }
//         @keyframes bounce-subtle {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-5px); }
//         }
//         @keyframes flash {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0.5; }
//         }
//         @keyframes twinkle {
//           0%, 100% { transform: scale(1); }
//           50% { transform: scale(1.2); }
//         }
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         @keyframes count-up {
//           from { transform: scale(0.8); opacity: 0; }
//           to { transform: scale(1); opacity: 1; }
//         }

//         .animate-float { animation: float 6s ease-in-out infinite; }
//         .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
//         .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
//         .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
//         .animate-gradient { animation: gradient 3s ease infinite; background-size: 400% 400%; }
//         .animate-fade-in { animation: fade-in 1s ease-out; }
//         .animate-slide-up { animation: slide-up 1s ease-out; }
//         .animate-slide-down { animation: slide-down 1s ease-out; }
//         .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
//         .animate-wiggle { animation: wiggle 2s ease-in-out infinite; }
//         .animate-bounce-subtle { animation: bounce-subtle 2s ease-in-out infinite; }
//         .animate-flash { animation: flash 2s ease-in-out infinite; }
//         .animate-twinkle { animation: twinkle 1.5s ease-in-out infinite; }
//         .animate-spin-slow { animation: spin-slow 3s linear infinite; }
//         .animate-count-up { animation: count-up 1s ease-out; }

//         .animation-delay-200 { animation-delay: 0.2s; }
//         .animation-delay-400 { animation-delay: 0.4s; }
//         .animation-delay-600 { animation-delay: 0.6s; }
//         .animation-delay-800 { animation-delay: 0.8s; }
//         .animation-delay-1000 { animation-delay: 1s; }
//         .animation-delay-1200 { animation-delay: 1.2s; }
//         .animation-delay-1400 { animation-delay: 1.4s; }
//         .animation-delay-1600 { animation-delay: 1.6s; }
//       `}</style>
//     </div>
//   );
// };

// export default Home;