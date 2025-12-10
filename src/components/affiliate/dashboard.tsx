import  { useState } from 'react';
import { motion } from 'framer-motion';
import {  ArrowUp, ArrowDown } from 'lucide-react';
import dummyDoctorImage from "../../assets/images/dummyDoctor.png"
import TotalcouponClicksIcon from '../../components/ui/icons/affiliate/dashboard/totalClicks';
import TotalOrdersIcon from '../../components/ui/icons/affiliate/dashboard/totalorders';
import totalrevenueIcon from '../../components/ui/icons/affiliate/dashboard/totalrevenue';
import TotalDoctorsIcon from '../../components/ui/icons/affiliate/dashboard/totaldoctors';
import Image5 from "../../assets/images/productImage/image5.png"
import Image6 from "../../assets/images/productImage/image6.png"
import Image7 from "../../assets/images/productImage/image7.png"
export default function Affiliatedashboard() {
  const [activeTab, setActiveTab] = useState('Month So Far');

  const tabs = ['Today So Far', 'Week So Far', 'Month So Far', 'Custom'];

  const stats = [
    { label: 'Total Coupons clicks', value: '255', unit: '/month', icon:TotalcouponClicksIcon, bgColor: 'bg-[#FDF8E5]', iconColor: 'text-green-600' },
    { label: 'Total Orders', value: '55', unit: '/month', icon:TotalOrdersIcon, bgColor: 'bg-green-50', iconColor: 'text-green-600' },
    { label: 'Total Revenue', value: '5,540', unit: '/month', icon:totalrevenueIcon, bgColor: 'bg-green-50', iconColor: 'text-green-600' },
    { label: 'Total Doctors', value: '5', unit: '/month', icon:TotalDoctorsIcon, bgColor: 'bg-green-50', iconColor: 'text-green-600' }
  ];

  const topDoctors = [
    { rank: 1, name: 'Dr. Meenal', specialty: 'Gynecology + 2 others', change: '+8%', positive: true },
    { rank: 2, name: 'Dr. Pallav', specialty: 'Gynecology + 2 others', change: '+1%', positive: true },
    { rank: 3, name: 'Dr. Sapna', specialty: 'Gynecology + 2 others', change: '-2%', positive: false }
  ];

  const topProducts = [
    { rank: 1, name: 'Amrutam Nari Sondarya Malt', image:Image7 },
    { rank: 2, name: 'Amrutam Bhringraj Hair Therapy', image:Image6 },
    { rank: 3, name: 'Amrutam Lozenge Malt', image:Image5 }
  ];

  return (
    <div className="h-full overflow-y-auto p-6">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-6 text-[#666876]">
          <span>Affiliate</span>
          <span>›</span>
          <span className="font-semibold text-[#28643B]">Dashboard</span>
        </div>

        {/* Tabs */}
        <div className='bg-white h-[72px] rounded-[16px] flex items-center justify-center border-b border-gray-200 mb-8'>
        <div className="flex  w-full justify-evenly  gap-8  ">
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 px-1 text-sm font-medium relative ${
                activeTab === tab ? 'text-[#3A643B]' : 'text-[#33344880]'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3A643B]"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
              className="bg-white h-[156px] w-[237px] rounded-[12px]  p-6 shadow-sm"
            >
              <p className="text-[#333448] text-base font-medium mb-3">{stat.label}</p>
              <div className="flex items-center gap-2">
                <div className={` p-3 rounded-full`}>
                  <stat.icon  />
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-[#3A643B] ">{stat.value}</span>
                  <span className="text-sm text-[#7D7D7D]">{stat.unit}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Top Affiliate Doctors */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-lg p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Top Affiliate Doctors</h2>
            <div className="space-y-2">
              {topDoctors.map((doctor, index) => (
                <motion.div
                  key={doctor.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <span className="text-gray-500 font-medium w-4">{doctor.rank}.</span>
                  <img className='rounded-full' src={dummyDoctorImage}/>
                  <div className="flex-1">
                    <p className="font-medium text-[#333448] text-sm">{doctor.name}</p>
                    <p className="text-sm font-medium text-[#33354880]">{doctor.specialty}</p>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`px-3 py-1 rounded-lg text-sm font-medium flex items-center gap-1 ${
                      doctor.positive 
                        ? 'bg-[#ABE9CA] text-[#15C26B] ' 
                        : 'bg-[#F3B5B5] text-[#DD3131]'
                    }`}
                  >
                    {doctor.positive ? (
                      <ArrowUp className="w-3 h-3" />
                    ) : (
                      <ArrowDown className="w-3 h-3" />
                    )}
                    {doctor.change}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Top Affiliate Products */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-lg p-6 shadow-sm  "
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Top Affiliate Products</h2>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 4, backgroundColor: '#f9fafb' }}
                  className="flex items-center gap-4 p-3 rounded-lg transition-colors cursor-pointer"
                >
                  <span className="text-gray-500 font-medium w-4">{product.rank}.</span>
                  <motion.div 
                    className="w-10 h-10 bg-gradient-to-br from-orange-300 to-amber-400 rounded-full flex items-center justify-center text-2xl"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img src={product.image} className='rounded-full'/>
                  </motion.div>
                  <div className="flex-1">
                    <p className="font-medium text-[#333448]">{product.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}