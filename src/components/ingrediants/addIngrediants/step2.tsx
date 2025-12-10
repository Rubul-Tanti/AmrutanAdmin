import { useState } from 'react';
import { X, Frown, Image } from 'lucide-react';

interface Benefit {
  id: string;
  text: string;
  icon?: string;
}

export default function AddIngrediantsFormStep2() {
  const [primaryBenefits, setPrimaryBenefits] = useState<Benefit[]>([
    { id: '1', text: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been.' },
    { id: '2', text: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been.' },
    { id: '3', text: 'Enter Here' }
  ]);

  const [secondaryBenefits, setSecondaryBenefits] = useState<Benefit[]>([
    { id: '1', text: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been.', icon: 'emoji' },
    { id: '2', text: 'Lorem Ipsum', icon: 'image' }
  ]);

  const removePrimaryBenefit = (id: string) => {
    setPrimaryBenefits(primaryBenefits.filter(b => b.id !== id));
  };

  const removeSecondaryBenefit = (id: string) => {
    setSecondaryBenefits(secondaryBenefits.filter(b => b.id !== id));
  };

  const updatePrimaryBenefit = (id: string, text: string) => {
    setPrimaryBenefits(primaryBenefits.map(b => b.id === id ? { ...b, text } : b));
  };

  const updateSecondaryBenefit = (id: string, text: string) => {
    setSecondaryBenefits(secondaryBenefits.map(b => b.id === id ? { ...b, text } : b));
  };

  const addPrimaryBenefit = () => {
    const newId = String(Date.now());
    setPrimaryBenefits([...primaryBenefits, { id: newId, text: '' }]);
  };

  const addSecondaryBenefit = () => {
    const newId = String(Date.now());
    setSecondaryBenefits([...secondaryBenefits, { id: newId, text: '', icon: 'emoji' }]);
  };

  return (
    <div className=" mx-auto w-full max-w-5xl bg-white rounded-lg  p-6">
      {/* Primary Benefits Section */}
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-4" style={{ color: '#464646' }}>
          Primary Benefits
        </h2>
        
        <div className="space-y-3">
          {primaryBenefits.map((benefit) => (
            <div key={benefit.id} className="flex items-center gap-3">
              <input
                type="text"
                value={benefit.text}
                onChange={(e) => updatePrimaryBenefit(benefit.id, e.target.value)}
                className="flex-1 text-sm px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-opacity-70"
                style={{ 
             
                  borderColor: '#E5E7EB',
                  color: '#464646'
                }}
                placeholder="Enter benefit"
              />
              <button
                onClick={() => removePrimaryBenefit(benefit.id)}
                className="p-2 hover:opacity-70 transition-opacity"
                style={{ color: '#3A643B' }}
              >
                <X size={20} />
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={addPrimaryBenefit}
          className="mt-4 font-semibold hover:opacity-80 transition-opacity"
          style={{ color: '#3A643B' }}
        >
          Add Another Benefit
        </button>
      </div>

      {/* Secondary Benefits Section */}
      <div>
        <h2 className="text-lg font-bold mb-4" style={{ color: '#464646' }}>
          Secondary Benefits
        </h2>

        <div className="space-y-3">
          {secondaryBenefits.map((benefit) => (
            <div key={benefit.id} className="flex items-center gap-3">
              <button
                className="flex items-center justify-center w-32 h-12 rounded-lg border-2 border-dashed hover:opacity-70 bg-[#EAF2EA] transition-opacity"
                style={{ borderColor: '#9DB29D', color: '#464646' }}
              >
                {benefit.icon === 'emoji' ? (
                  <Frown size={24} />
                ) : (
                  <div className="flex items-center gap-2">
                    <Image size={20} />
                    <span className="text-sm text-[#0C140C] font-semibold">Upload icon</span>
                  </div>
                )}
              </button>
              
              <input
                type="text"
                value={benefit.text}
                onChange={(e) => updateSecondaryBenefit(benefit.id, e.target.value)}
                className="flex-1 px-4 py-3 text-sm rounded-lg border-2 focus:outline-none focus:border-opacity-70"
                style={{ 
                  
                  borderColor: '#E5E7EB',
                  color: '#464646'
                }}
                placeholder="Enter benefit"
              />
              
              <button
                onClick={() => removeSecondaryBenefit(benefit.id)}
                className="p-2 hover:opacity-70 transition-opacity"
                style={{ color: '#3A643B' }}
              >
                <X size={20} />
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={addSecondaryBenefit}
          className="mt-4 font-semibold hover:opacity-80 transition-opacity"
          style={{ color: '#3A643B' }}
        >
          Add Another Benefit
        </button>
      </div>
    </div>
  );
}