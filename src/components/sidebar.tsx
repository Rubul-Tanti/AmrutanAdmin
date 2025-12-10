import React, { useState } from 'react';
import { 
  Calendar, 
  Package, 
  Ticket, 
  UserPlus, 
  Settings, 
  Wallet, 
  RefreshCw, 
} from 'lucide-react';
import DashboardIcon from './ui/icons/sidebar/dashboardIcon';
import DoctorIcon from './ui/icons/sidebar/doctorsIcon';
import PatientIcon from './ui/icons/sidebar/patientsIcon';
import CalenderIcon from './ui/icons/sidebar/calenderIcon';
import SpecialistIcon from './ui/icons/sidebar/specialitiesIcon';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AffiliateIcon from './ui/icons/sidebar/affiliateIcon';

export interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  route?: string;
  submenu?: {
    id: string;
    label: string;
    route?: string;
  }[];
}

const Sidebar = () => {
  const [expandedItem, setExpandedItem] = useState<string | null>('');
  const [activeItem, setActiveItem] = useState<string>('dashboard');

  const menuItems: MenuItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: <DashboardIcon />, route: '/' },
    { id: 'doctors', label: 'Doctors', icon: <DoctorIcon />, route: '/doctors' },
    { id: 'patients', label: 'Patients', icon: <PatientIcon />, route: '/patients' },
    { id: 'appointments', label: 'Appointments', icon: <CalenderIcon />, route: '/appointments' },
    { id: 'specialties', label: 'Specialties', icon: <SpecialistIcon />, route: '/specialties' },

    {
      id: 'ingredients',
      label: 'Ingredients',
      icon: <Package size={20} />,
      submenu: [
        { id: '/ingredients-list', label: 'Ingredients List', route: '/ingredients/list' },
        { id: 'add-ingredients', label: 'Add Ingredients', route: '/Ingredients/add' }
      ]
    },

    { id: 'coupons', label: 'Coupons', icon: <Ticket size={20} />, route: '/coupons' },
    { id: 'concerns', label: 'Concerns', icon: <Calendar size={20} />, route: '/concerns' },
    { id: 'affiliate', label: 'Affiliate', icon:<AffiliateIcon/>,
           submenu: [
        { id: 'dashboard', label: 'dashboard', route: 'affiliate-dashboard' },
        { id: 'commission', label: 'commission', route: 'affiliate-commission' },
        { id: 'coupons', label: 'coupons', route: 'affiliate-coupons' },
        { id: 'sales', label: 'sales', route: 'affiliate-sales' },
        { id: 'doctors', label: 'doctors', route: 'affiliate-doctors' },
     
      ]
     },
    { id: 'referral', label: 'Referral', icon: <UserPlus size={20} />, route: '/referral' },
    { id: 'customization', label: 'Customization', icon: <Settings size={20} />, route: '/customization' },
    { id: 'wallet', label: 'Wallet', icon: <Wallet size={20} />, route: '/wallet' },
    { id: 'refund', label: 'Refund', icon: <RefreshCw size={20} />, route: '/refund' }
  ];

  const handleItemClick = (itemId: string, hasSubmenu: boolean) => {
    setActiveItem(itemId);
    if (hasSubmenu) {
      setExpandedItem(expandedItem === itemId ? null : itemId);
    } else {
      setExpandedItem(null);
    }
  };
  const navigate=useNavigate()

  return (
    <motion.div 
      className="w-64 mt-5 rounded-r-[16px] h-full bg-white shadow-lg"
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="p-6 h-full">
        <motion.h2 
          className="text-gray-400 text-sm font-medium mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Menu
        </motion.h2>
        
        <nav className="space-y-1 h-11/12 overflow-y-scroll">
          {menuItems.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
         
                <button
                  onClick={() =>{item.route&&navigate(item.route)
                    handleItemClick(item.id, !!item.submenu)}}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                    activeItem === item.id
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <div className={`flex items-center  justify-center w-8 h-8 rounded-lg ${
                    activeItem === item.id ? 'bg-gray-200' : 'bg-[#E5E7EA]'
                  }`}>
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium  capitalize flex-1 text-left">{item.label}</span>
                </button>
         
              
              <AnimatePresence>
                {item.submenu && expandedItem === item.id && (
                  <motion.div 
                    className="ml-11 mt-1 space-y-1"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.submenu.map((subItem) => (
                      <Link key={subItem.id} to={`${subItem.route}`}>
                        <button
                          onClick={() => setActiveItem(subItem.id)}
                          className={`w-full capitalize text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                            activeItem === subItem.id
                              ? 'bg-gray-100 text-gray-900 font-medium'
                              : 'text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          {subItem.label}
                        </button>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;