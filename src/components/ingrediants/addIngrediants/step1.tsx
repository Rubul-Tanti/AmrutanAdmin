import { ChevronRight, Plus, X, ChevronLeft, Image } from "lucide-react";
import { useState,  } from "react";
import Image1 from "../../../assets/images/productImage/image1.png";
import Image2 from "../../../assets/images/productImage/image2.png";
import Image3 from "../../../assets/images/productImage/image3.png";
import {motion} from  "motion/react"
interface PriceRow {
  id: number;
  quantity: string;
  month: string;
  price: string;
}

const AddIngrediantsFormStep1 = () => {
  const [priceRows, setPriceRows] = useState<PriceRow[]>([
    { id: 1, quantity: "", month: "", price: "" },
  ]);

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const [uploadedImages, setUploadedImages] = useState<string[]>([
    Image1,
    Image2,
    Image3,
  ]);

  const [isDragging, setIsDragging] = useState<boolean>(false);

  const addMoreRow = () => {
    setPriceRows([
      ...priceRows,
      { id: Date.now(), quantity: "", month: "", price: "" },
    ]);
  };

  const removeRow = (id: number) => {
    if (priceRows.length > 1) {
      setPriceRows(priceRows.filter((row) => row.id !== id));
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % uploadedImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + uploadedImages.length) % uploadedImages.length
    );
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    handleFiles(files);
  };

  const handleFiles = (files: File[]) => {
    files.forEach((file) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            setUploadedImages((prev) => [...prev, e.target!.result as string]);
          }
        };
        reader.readAsDataURL(file);
      }
    });
  };

  return (
    
    <div className=" px-5 pb-10">
         <motion.div 
      className="mt-5 w-full h-full overflow-y-auto scroll-smooth"
      initial={{ opacity: 0, y:10 }}
      animate={{ opacity: 1,y:0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="bg-white p-6 rounded-[15px] w-full shadow-sm">
        <p className="text-lg font-semibold mb-6">General Information</p>

        <div className="relative">
          <select className="border-2 outline-0 text-[#464646] border-[#E5E7EB] w-full p-2 my-4 rounded-lg">
            <option>Label</option>
          </select>
          <p className="absolute top-1 left-5 text-black font-semibold">
            Product Name
            <span className="text-red-500 text-sm font-medium">*</span>
          </p>
        </div>

        <div className="relative">
          <select className="border-2 outline-0 text-[#464646] border-[#E5E7EB] w-full p-2 my-4 rounded-lg">
            <option>Label</option>
          </select>
          <p className="absolute top-1 left-5 text-black font-semibold">
            Subtitle
            <span className="text-red-500 text-sm font-medium">*</span>
          </p>
        </div>

        {priceRows.map((row, index) => (
          <div
            key={row.id}
            className="flex w-full flex-row justify-between items-center h-fit gap-3 mb-4"
          >
            <div className="relative">
              <select className="border-2 w-[189px] outline-0 text-[#464646] border-[#E5E7EB] p-2 my-4 rounded-lg">
                <option>Label</option>
              </select>
              <p className="absolute top-1 left-5 text-black font-semibold">
                Select Quantity
                <span className="text-red-500 text-sm font-medium">*</span>
              </p>
            </div>

            <div className="relative">
              <input
                className="border-2 w-[189px] outline-0 text-[#464646] border-[#E5E7EB] p-2 my-4 rounded-lg"
                placeholder="Label"
              />
              <p className="absolute top-1 left-5 text-black font-semibold">
                Month / Jar
                <span className="text-red-500 text-sm font-medium">*</span>
              </p>
            </div>

            <div className="relative">
              <input
                className="border-2 w-[189px] outline-0 text-[#464646] border-[#E5E7EB] p-2 my-4 rounded-lg"
                placeholder="Label"
              />
              <p className="absolute top-1 left-5 text-black font-semibold">
                Add Price
                <span className="text-red-500 text-sm font-medium">*</span>
              </p>
            </div>

            {index === priceRows.length - 1 ? (
              <button
                onClick={addMoreRow}
                className="flex h-full text-[#3A643B] gap-1"
              >
                <Plus size={20} className="border-2 border-[#3A643B] rounded-sm" />
                <p className="text-nowrap text-sm font-semibold">Add More</p>
              </button>
            ) : (
              <button
                onClick={() => removeRow(row.id)}
                className="mt-3 text-red-500"
              >
                <X size={24} />
              </button>
            )}
          </div>
        ))}

        {/* Description */}
        <div className="relative">
          <input
            className="border-2 w-full outline-0 text-[#464646] border-[#E5E7EB] p-2 my-4 rounded-lg"
            placeholder="description..."
          />
          <p className="absolute top-1 left-5 text-black font-semibold">
            Product Description
            <span className="text-red-500 text-sm font-medium">*</span>
          </p>
        </div>

        {/* Image Upload Section */}
        <div className="mt-8">
          <p className="text-sm font-semibold mb-4">
            Product Image
            <span className="text-red-500 text-sm font-medium">*</span>
          </p>

          <div className="border-2 border-[#E5E7EB] rounded-lg p-6">
            <div className="flex items-center gap-4">
              {/* Prev Button */}
              <button
                onClick={prevImage}
                className="bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-50"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Image List */}
              <div className="flex-1 grid grid-cols-3 gap-4">
                {uploadedImages.slice(0, 3).map((img, idx) => (
                  <div key={idx} className="relative">
                    <img
                      src={img}
                      alt={`Product ${idx + 1}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-50"
              >
                <ChevronRight size={24} />
              </button>

              {/* Drop/Browse Box */}
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-lg w-64 h-48 flex flex-col items-center justify-center transition-colors ${
                  isDragging
                    ? "border-[#3A643B] bg-[#EAF2EA]"
                    : "border-[#EAF2EA] bg-[#9DB29D]"
                }`}
              >
                <Image size={24} className="text-[#5B5B5B] mb-3" />
                <p className="text-sm mb-2">Drag and drop</p>
                <p className="text-sm mb-3">or</p>

                <label
                  htmlFor="file"
                  className="bg-[#3A643B] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#2d4f2e] cursor-pointer"
                >
                  Browse
                </label>

                <input
                  type="file"
                  className="hidden"
                  id="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileInput}
                />
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {uploadedImages.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 w-2 rounded-full ${
                    idx === currentImageIndex
                      ? "bg-[#3A643B]"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

   
      </div>
    </motion.div>
    </div>
  );
};

export default AddIngrediantsFormStep1;
