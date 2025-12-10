import { products } from "../../constant/product"
import { motion } from "framer-motion"

const ProductsTable = () => {
  return (
    <motion.div 
      className="w-full bg-white rounded-lg shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="overflow-x-auto">
        <table className="w-full">
          <motion.thead 
            className="sticky top-0 bg-white z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <tr className="border-b border-gray-200">
              <th className="w-[4%]"></th>
              <th className="text-left py-4 px-6 text-[11px] w-[14%] font-medium text-black">Products</th>
              <th className="text-left py-4 px-6 text-[11px] w-[72%] font-medium text-black">Description</th>
              <th className="text-left py-4 px-6 text-[11px] font-medium text-black">Status</th>
            </tr>
          </motion.thead>
        </table>
      </div>
      <div className="overflow-y-auto max-h-96 scroll-smooth">
        <table className="w-full">
          <tbody>
            {products.map((product, index) => (
              <motion.tr 
                key={product.id} 
                className="hover:bg-gray-50 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <td className="lg:px-6 md:px-4 px-2">
                  <input type="radio" />
                </td>
                <td className="min-w-[100px]">
                  <div className="flex items-center gap-3">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="text-sm text-[#3A643C] font-normal">{product.name}</span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <p className="text-sm font-normal max-w-2xl">{product.description}</p>
                </td>
                <td className="py-4 px-6 text-right">
                  <span className={`inline-block px-3 py-1 rounded-md text-sm font-medium ${
                    product.status === 'Active' 
                      ? 'text-[#32933C] bg-green-50' 
                      : 'text-gray-600 bg-gray-100'
                  }`}>
                    {product.status}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ProductsTable;