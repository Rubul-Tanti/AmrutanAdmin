import Logo from "../../public/images/logo.svg"
import LogoText from "../../public/images/Amrutam Logo V-02 1.svg"
import ProfileImage from '../assets/images/profileImage.png'
import { motion } from "framer-motion"

const Header = () => {
  return (
    <motion.header 
      className="h-[70px] bg-white flex justify-between items-center px-5"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* logo */}
      <motion.div 
        className="flex h-full items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <img alt="logo" src={Logo} className=""/>
        <img alt="logo" src={LogoText} className=""/>
      </motion.div>
      
      {/* profile */}
      <motion.div 
        className="flex items-center gap-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div>
          <p className="font-semibold capitalize text-base text-[#3A643B]">Liam Michael</p>
          <p className="text-[#28643B80] capitalize font-medium text-xs">Admin</p>
        </div>
        <img alt="profile-image" src={ProfileImage}/>
      </motion.div>
    </motion.header>
  )
}

export default Header