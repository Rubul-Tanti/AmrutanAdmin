import { useState } from 'react';
import { X, Smile } from 'lucide-react';
import Image1 from "../../assets/images/ingrediants/image1.png"
import Image2 from "../../assets/images/ingrediants/image2.png"
import Image3 from "../../assets/images/ingrediants/image3.png"
import Image4 from "../../assets/images/ingrediants/image4.png"
interface DosageItem {
  id: number;
  text: string;
  icon?: string;
}

interface UsageItem {
  id: number;
  field1: string;
  field2: string;
  icon?: string;
}

interface Ingredient {
  id: string;
  name: string;
  image: string;
}

interface FormData {
  dosageItems: DosageItem[];
  usageItems: UsageItem[];
  primaryIngredients: Ingredient[];
  allIngredients: Ingredient[];
  durationItems: DosageItem[];
}

const AddIngrediantsFormStep3 = () => {
  const [formData, setFormData] = useState<FormData>({
    dosageItems: [
      { id: 1, text: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been.' },
      { id: 2, text: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been.' }
    ],
    usageItems: [
      { id: 1, field1: 'Lorem Ipsum', field2: 'Lorem Ipsum' },
      { id: 2, field1: 'Lorem Ipsum', field2: 'Lorem Ipsum' },
      { id: 3, field1: 'Lorem Ipsum', field2: 'Lorem Ipsum' }
    ],
    primaryIngredients: [],
    allIngredients: [],
    durationItems: [
      { id: 1, text: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been.' }
    ]
  });

  const [primarySearch, setPrimarySearch] = useState('');
  const [allSearch, setAllSearch] = useState('');
  const [showPrimaryDropdown, setShowPrimaryDropdown] = useState(false);
  const [showAllDropdown, setShowAllDropdown] = useState(false);

  const availableIngredients: Ingredient[] = [
    { id: '1', name: 'Bhringraj', image:Image1 },
    { id: '2', name: 'Sariva', image:Image3 },
    { id: '3', name: 'Gudahal', image:Image2 },
    { id: '4', name: 'Jatamansi', image:Image4 }
  ];

  // Dosage handlers
  const addDosageItem = () => {
    setFormData(prev => ({
      ...prev,
      dosageItems: [...prev.dosageItems, { id: Date.now(), text: '' }]
    }));
  };

  const removeDosageItem = (id: number) => {
    setFormData(prev => ({
      ...prev,
      dosageItems: prev.dosageItems.filter(item => item.id !== id)
    }));
  };

  const updateDosageItem = (id: number, text: string) => {
    setFormData(prev => ({
      ...prev,
      dosageItems: prev.dosageItems.map(item => 
        item.id === id ? { ...item, text } : item
      )
    }));
  };

  // Usage handlers
  const addUsageItem = () => {
    setFormData(prev => ({
      ...prev,
      usageItems: [...prev.usageItems, { id: Date.now(), field1: '', field2: '' }]
    }));
  };

  const removeUsageItem = (id: number) => {
    setFormData(prev => ({
      ...prev,
      usageItems: prev.usageItems.filter(item => item.id !== id)
    }));
  };

  const updateUsageItem = (id: number, field: 'field1' | 'field2', value: string) => {
    setFormData(prev => ({
      ...prev,
      usageItems: prev.usageItems.map(item => 
        item.id === id ? { ...item, [field]: value } : item
      )
    }));
  };

  // Duration handlers
  const addDurationItem = () => {
    setFormData(prev => ({
      ...prev,
      durationItems: [...prev.durationItems, { id: Date.now(), text: '' }]
    }));
  };

  const removeDurationItem = (id: number) => {
    setFormData(prev => ({
      ...prev,
      durationItems: prev.durationItems.filter(item => item.id !== id)
    }));
  };

  const updateDurationItem = (id: number, text: string) => {
    setFormData(prev => ({
      ...prev,
      durationItems: prev.durationItems.map(item => 
        item.id === id ? { ...item, text } : item
      )
    }));
  };

  // Ingredient handlers
  const addPrimaryIngredient = (ingredient: Ingredient) => {
    if (!formData.primaryIngredients.find(i => i.id === ingredient.id)) {
      setFormData(prev => ({
        ...prev,
        primaryIngredients: [...prev.primaryIngredients, ingredient]
      }));
    }
    setPrimarySearch('');
    setShowPrimaryDropdown(false);
  };

  const removePrimaryIngredient = (id: string) => {
    setFormData(prev => ({
      ...prev,
      primaryIngredients: prev.primaryIngredients.filter(item => item.id !== id)
    }));
  };

  const addAllIngredient = (ingredient: Ingredient) => {
    if (!formData.allIngredients.find(i => i.id === ingredient.id)) {
      setFormData(prev => ({
        ...prev,
        allIngredients: [...prev.allIngredients, ingredient]
      }));
    }
    setAllSearch('');
    setShowAllDropdown(false);
  };

  const removeAllIngredient = (id: string) => {
    setFormData(prev => ({
      ...prev,
      allIngredients: prev.allIngredients.filter(item => item.id !== id)
    }));
  };

  const filteredPrimaryIngredients = availableIngredients.filter(ing => 
    ing.name.toLowerCase().includes(primarySearch.toLowerCase())
  );

  const filteredAllIngredients = availableIngredients.filter(ing => 
    ing.name.toLowerCase().includes(allSearch.toLowerCase())
  );

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    alert('Form submitted! Check console for data.');
  };

  return (
    <div className="outline-0 mx-auto w-full max-w-5xl p-6 bg-white">
      {/* Dosage Section */}
      <div className="outline-0 mb-8">
        <h2 className="outline-0 text-lg text-[#232323] font-semibold mb-4">Dosage</h2>
        
        {formData.dosageItems.map((item) => (
          <div key={item.id} className="outline-0 flex gap-3 mb-3 items-center">
            <button className="outline-0 flex items-center bg-[#EAF2EA] rounded-md text-[#0C140C] gap-2 px-4 py-2 border-2 border-dashed border-[#E5E7EB] text-sm text-[#464646] hover:border-gray-400 whitespace-nowrap">
              <Smile className="outline-0 w-4 bg-[#9DB29D] rounded-full h-4" />
              Add Icon
            </button>
            <input
              type="text"
              value={item.text}
              onChange={(e) => updateDosageItem(item.id, e.target.value)}
              className="outline-0 flex-1 px-4 py-2 border text-[#464646] border-[#E5E7EB] rounded text-sm"
            />
            <button
              onClick={() => removeDosageItem(item.id)}
              className="outline-0 p-2 hover:bg-gray-100 text-[#3A643C] rounded"
            >
              <X className="outline-0 w-5 h-5 text-[#3A643C]" />
            </button>
          </div>
        ))}
        
        <button
          onClick={addDosageItem}
          className="outline-0 text-sm font-medium text-[#3A643C] mt-2"
        >
          Add Another Items
        </button>
      </div>

      {/* Usage Section */}
      <div className="outline-0 mb-8">
        <h2 className="outline-0 text-lg text-[#232323] font-semibold mb-4">Usage</h2>
        
        {formData.usageItems.map((item) => (
          <div key={item.id} className="outline-0 flex gap-3 mb-3 items-center">
            <button className="outline-0 flex items-center bg-[#EAF2EA] rounded-md text-[#0C140C] gap-2 px-4 py-2 border-2 border-dashed border-[#E5E7EB] text-sm text-[#464646] hover:border-gray-400 whitespace-nowrap">
              <Smile className="outline-0 w-4 bg-[#9DB29D] rounded-full h-4" />
              Add Icon
            </button>
            <input
              type="text"
              value={item.field1}
              onChange={(e) => updateUsageItem(item.id, 'field1', e.target.value)}
              className="outline-0 flex-1 px-4 py-2 text-[#464646] border border-[#E5E7EB] rounded text-sm"
            />
            <input
              type="text"
              value={item.field2}
              onChange={(e) => updateUsageItem(item.id, 'field2', e.target.value)}
              className="outline-0 flex-1 px-4 py-2 border text-[#464646] border-[#E5E7EB] rounded text-sm"
            />
            <button
              onClick={() => removeUsageItem(item.id)}
              className="outline-0 p-2 hover:bg-gray-100 rounded"
            >
              <X className="outline-0 w-5 h-5 text-[#3A643C]" />
            </button>
          </div>
        ))}
        
        <button
          onClick={addUsageItem}
          className="outline-0 text-sm font-medium text-[#3A643C] hover:text-gray-900 mt-2"
        >
          Add Another Items
        </button>
      </div>

      {/* Primary Ingredients Section */}
      <div className="outline-0 mb-8">
        <h2 className="outline-0 text-lg text-[#232323] font-semibold mb-4">Primary Ingredients</h2>
        
        <div className="outline-0 relative mb-4">
          <label className="outline-0 absolute -top-2 left-5 bg-white px-1 font-semibold block text-sm">
            Select Ingredient <span className="outline-0 text-red-500">*</span>
          </label>
          <div className="outline-0 w-full px-4 py-2 border border-[#E5E7EB] rounded text-sm text-[#464646] bg-white">
            <input 
              value={primarySearch}
              onChange={(e) => {
                setPrimarySearch(e.target.value);
                setShowPrimaryDropdown(true);
              }}
              onFocus={() => setShowPrimaryDropdown(true)}
              placeholder='Search for the ingredient' 
              className='w-full outline-0'
            />
          </div>
          
          {showPrimaryDropdown && primarySearch && (
            <div className='absolute z-10 w-full border-2 px-2 mt-2 bg-white border-zinc-100 rounded-lg shadow-lg'>
              {filteredPrimaryIngredients.length > 0 ? (
                filteredPrimaryIngredients.map((ingredient) => (
                  <div 
                    key={ingredient.id}
                    onClick={() => addPrimaryIngredient(ingredient)}
                    className='flex mb-1 hover:bg-[#EAF2EA] cursor-pointer items-center gap-2 h-10 px-2'
                  >
                    <div className='w-[80px]'>
                      <img src={ingredient.image} className='h-[40px] object-cover' alt={ingredient.name} />
                    </div> 
                    <p>{ingredient.name}</p>
                  </div>
                ))
              ) : (
                <p className='py-2 text-gray-500'>No ingredients found</p>
              )}
            </div>
          )}
        </div>

        {/* Selected Primary Ingredients */}
        {formData.primaryIngredients.length > 0 && (
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2">Selected:</p>
            <div className="flex flex-wrap gap-2">
              {formData.primaryIngredients.map((ingredient) => (
                <div key={ingredient.id} className="flex items-center gap-2 bg-[#EAF2EA] px-3 py-1 rounded-full">
                  <span className="text-sm">{ingredient.name}</span>
                  <button
                    onClick={() => removePrimaryIngredient(ingredient.id)}
                    className="hover:bg-gray-200 rounded-full p-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* All Ingredients Section */}
      <div className="outline-0 mb-8">
        <h2 className="outline-0 text-lg text-[#232323] font-semibold mb-4">All Ingredients</h2>
        
        <div className="outline-0 relative mb-4">
          <label className="outline-0 absolute -top-2 left-5 bg-white px-1 font-semibold block text-sm">
            Select Ingredient <span className="outline-0 text-red-500">*</span>
          </label>
          <div className="outline-0 w-full px-4 py-2 border border-[#E5E7EB] rounded text-sm text-[#464646] bg-white">
            <input 
              value={allSearch}
              onChange={(e) => {
                setAllSearch(e.target.value);
                setShowAllDropdown(true);
              }}
              onFocus={() => setShowAllDropdown(true)}
              placeholder='Search for the ingredient' 
              className='w-full outline-0'
            />
          </div>
          
          {showAllDropdown && allSearch && (
            <div className='absolute z-10 w-full border-2 px-2 mt-2 bg-white border-zinc-100 rounded-lg shadow-lg'>
              {filteredAllIngredients.length > 0 ? (
                filteredAllIngredients.map((ingredient) => (
                  <div 
                    key={ingredient.id}
                    onClick={() => addAllIngredient(ingredient)}
                    className='flex mb-1 hover:bg-[#EAF2EA] cursor-pointer items-center gap-2 h-10 px-2'
                  >
                    <div className='w-[80px]'>
                      <img src={ingredient.image} className='h-[40px] object-cover' alt={ingredient.name} />
                    </div> 
                    <p>{ingredient.name}</p>
                  </div>
                ))
              ) : (
                <p className='py-2 text-gray-500'>No ingredients found</p>
              )}
            </div>
          )}
        </div>

        {/* Selected All Ingredients */}
        {formData.allIngredients.length > 0 && (
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2">Selected:</p>
            <div className="flex flex-wrap gap-2">
              {formData.allIngredients.map((ingredient) => (
                <div key={ingredient.id} className="flex items-center gap-2 bg-[#EAF2EA] px-3 py-1 rounded-full">
                  <span className="text-sm">{ingredient.name}</span>
                  <button
                    onClick={() => removeAllIngredient(ingredient.id)}
                    className="hover:bg-gray-200 rounded-full p-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Duration Section */}
      <div className="mb-8">
        <h2 className="outline-0 text-lg text-[#232323] font-semibold mb-4">Duration</h2>
        
        {formData.durationItems.map((item) => (
          <div key={item.id} className="outline-0 flex gap-3 mb-3 items-center">
            <button className="outline-0 flex items-center bg-[#EAF2EA] rounded-md text-[#0C140C] gap-2 px-4 py-2 border-2 border-dashed border-[#E5E7EB] text-sm text-[#464646] hover:border-gray-400 whitespace-nowrap">
              <Smile className="outline-0 w-4 bg-[#9DB29D] rounded-full h-4" />
              Add Icon
            </button>
            <input
              type="text"
              value={item.text}
              onChange={(e) => updateDurationItem(item.id, e.target.value)}
              className="outline-0 flex-1 px-4 py-2 border border-[#E5E7EB] text-[#464646] rounded text-sm"
            />
            <button
              onClick={() => removeDurationItem(item.id)}
              className="outline-0 p-2 hover:bg-gray-100 rounded"
            >
              <X className="outline-0 w-5 h-5 text-[#3A643C]" />
            </button>
          </div>
        ))}
        
        <button
          onClick={addDurationItem}
          className="outline-0 text-sm font-medium text-[#3A643C] hover:text-gray-900 mt-2"
        >
          Add Another Items
        </button>
      </div>

    
    </div>
  );
};

export default AddIngrediantsFormStep3;