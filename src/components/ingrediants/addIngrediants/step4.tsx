import { useState } from 'react';
import { X, ImagePlus } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface Product {
  id: number;
  name: string;
  image: string | null;
}

const AddIngrediantsFormStep4 = () => {
  const [faqItems, setFaqItems] = useState<FAQItem[]>([
    { id: 1, question: 'What are benefits of this product?', answer: 'benefits of this product' },
    { id: 2, question: '', answer: '' }
  ]);

  const [title, setTitle] = useState('Products for Related Concerns');
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: '', image: null }
  ]);

  // FAQ Handlers
  const addFAQItem = () => {
    setFaqItems([...faqItems, { id: Date.now(), question: '', answer: '' }]);
  };

  const removeFAQItem = (id: number) => {
    if (faqItems.length > 1) {
      setFaqItems(faqItems.filter(item => item.id !== id));
    }
  };

  const updateFAQItem = (id: number, field: 'question' | 'answer', value: string) => {
    setFaqItems(faqItems.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  // Product Handlers
  const addProduct = () => {
    setProducts([...products, { id: Date.now(), name: '', image: null }]);
  };

  const removeProduct = (id: number) => {
    if (products.length > 1) {
      setProducts(products.filter(item => item.id !== id));
    }
  };

  const updateProductName = (id: number, name: string) => {
    setProducts(products.map(item => 
      item.id === id ? { ...item, name } : item
    ));
  };

  const handleImageUpload = (id: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProducts(products.map(item => 
          item.id === id ? { ...item, image: reader.result as string } : item
        ));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6 bg-white">
      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-lg text-[#232323] font-semibold mb-6">FAQ</h2>
        
        {faqItems.map((item, index) => (
          <div key={item.id} className="mb-4">
            <div className="grid grid-cols-2 gap-4 items-start">
              {/* Question Input */}
              <div className="relative ">
                <label className="block text-sm absolute -top-2 left-5 bg-white font-medium mb-2">
                  Enter Question<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={item.question}
                  onChange={(e) => updateFAQItem(item.id, 'question', e.target.value)}
                  placeholder={index === 0 ? "What are benefits of this product?" : "Label"}
                  className="w-full px-4 py-2.5 border text-[#414141] border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>

              {/* Answer Input */}
              <div className="relative flex items-end gap-2">
                <div className="flex-1 relative">
                  <label className="block absolute -top-2 left-5 bg-white text-sm font-medium mb-2">
                    Enter Answer<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={item.answer}
                    onChange={(e) => updateFAQItem(item.id, 'answer', e.target.value)}
                    placeholder={index === 0 ? "benefits of this product" : "Label"}
                    className="w-full px-4 py-2.5 border text-[#414141] border-[#E5E7EB]  rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>
                
                {/* Remove Button */}
                <button
                  onClick={() => removeFAQItem(item.id)}
                  className="p-2.5 hover:bg-gray-100 rounded transition-colors"
                  disabled={faqItems.length === 1}
                >
                  <X className="w-5 h-5 text-[#3A643B]" />
                </button>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={addFAQItem}
          className="text-sm font-medium text-[#3A643C] hover:text-green-800 mt-2"
        >
          Add Another FAQ
        </button>
      </div>

      {/* Additional Product Display Section */}
      <div>
        <h2 className="text-lg text font-semibold mb-6">Additional Product Display</h2>
        
        {/* Title Input */}
        <div className="mb-6 relative">
          <label className="block absolute -top-2 left-5 text-sm font-medium mb-2">
            Select Title<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2.5 border text-[#414141] font-semibold border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
          />
        </div>

        {/* Product Items */}
        {products.map((product) => (
          <div key={product.id} className="mb-4">
            <div className="flex items-center gap-4">
              {/* Add Image Button */}
              <div className="relative bg-[#EAF2EA] ">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(product.id, e)}
                  className="hidden"
                  id={`image-upload-${product.id}`}
                />
                <label
                  htmlFor={`image-upload-${product.id}`}
                  className="flex items-center justify-center gap-2 w-28 h-11 border-2 border-dashed border-[#9DB29D] rounded cursor-pointer hover:border-green-600 transition-colors bg-[#EAF2EA] "
                >
                  {product.image ? (
                    <img 
                      src={product.image} 
                      alt="Product" 
                      className="w-full h-full object-cover rounded"
                    />
                  ) : (
                    <>
                      <ImagePlus className="w-5 h-5 text-gray-500" />
                      <span className="text-sm text-[#0C140C] font-semibold">Add Image</span>
                    </>
                  )}
                </label>
              </div>

              {/* Product Name Input */}
              <input
                type="text"
                value={product.name}
                onChange={(e) => updateProductName(product.id, e.target.value)}
                placeholder="Add Product"
                className="flex-1 px-4 py-2.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              />

              {/* Remove Button */}
              <button
                onClick={() => removeProduct(product.id)}
                className="p-2.5 hover:bg-gray-100 rounded transition-colors"
                disabled={products.length === 1}
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        ))}

        <button
          onClick={addProduct}
          className="text-sm font-medium text-[#3A643C] hover:text-green-800 mt-2"
        >
          Add Another Product
        </button>
      </div>
    </div>
  );
};

export default AddIngrediantsFormStep4;