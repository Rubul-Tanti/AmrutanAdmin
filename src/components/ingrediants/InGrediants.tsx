import { ArrowUpDown, Download, EllipsisVertical, Plus } from "lucide-react"
import ProductsTable from ".././productTable"
import Image from "../../assets/images/Image.png"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const InGrediants = () => {
  const [menu, setMenu] = useState(false)
  
  return (
    <motion.div 
      className="mt-5 w-full h-full overflow-y-auto scroll-smooth"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <motion.h1 
        className="text-[#2F522F] mt-5 font-normal mb-2 text-[15px]"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        Products
      </motion.h1>
      
      <motion.div 
        className="bg-white relative h-fit w-full rounded-[16px] space-y-5 mb-5 py-4 px-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-[13.7px] font-semibold">Product Details</h1>
          <button onClick={() => setMenu(!menu)} className="cursor-pointer">
            <EllipsisVertical />
          </button>
        </div>
        
        <div className="flex gap-5">
          <h3 className="text-[12.6px] font-medium">Product:</h3>
          <img className="rotate-90" src={Image} />
          <p className="text-[11.8px] font-normal">B Feral Gold Malt</p>
        </div>
        
        <div className="flex gap-5">
          <h3 className="text-[12.6px] font-medium">Description :</h3>
          <p className="text-[11.8px] font-normal">
            A versatile herb that enhances fertility and aids in treating insomnia, It has a calming effect on the nervous system and is known for its aromatic properties.
          </p>
        </div>
        
        <AnimatePresence>
          {menu && (
            <motion.div 
              className="flex-col absolute right-10 top-10 shadow-lg flex w-[107px] h-[76px] border-2 rounded-lg border-zinc-200 bg-white"
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <button className="border-b text-zinc-700 cursor-pointer border-zinc-200 flex-1">Edit</button>
              <button className="flex-1 text-[#E70000] cursor-pointer">Inactive</button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      
      <motion.div 
        className="bg-white p-2 rounded-[16px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center h-[43.00927734375px]">
            <h2 className="text-sm font-semibold text-black pl-5">Products List</h2>
            
            <div className="bg-[#2E37A40D] ml-5 rounded-[11.1px] w-[262.765869140625px] flex gap-2 h-[37.00927734375px] p-2">
              <div className="relative">
                <div className="w-[13.893884658813477px] h-[13.893884658813477px] rounded-full bg-[#3A643B]" />
                <span className="absolute -bottom-[1] right-0 w-[3.2185046672821045px] rounded-full h-[3.2185046672821045px] bg-[#28643B80]" />
              </div>
              <input placeholder="Search here" className="text-[#28643B80] text-sm outline-0 font-medium" />
            </div>
            
            <div className="p-2 rounded-[12px] ml-5 bg-[#2E37A40D]">
              <Plus className="bg-[#2E37A40D]" color="#3A643B" />
            </div>
          </div>

          <div className="flex">
            <div className="p-2 w-fit rounded-[12px] ml-5 bg-[#2E37A40D]">
              <Download className="bg-[#2E37A40D]" color="#3A643B" />
            </div>
            <div className="p-2 w-fit rounded-[12px] ml-2 bg-[#2E37A40D]">
              <ArrowUpDown className="bg-[#2E37A40D]" color="#3A643B" />
            </div>
          </div>
        </div>
        
        <div></div>
        <ProductsTable />
      </motion.div>
    </motion.div>
  )
}

export default InGrediants