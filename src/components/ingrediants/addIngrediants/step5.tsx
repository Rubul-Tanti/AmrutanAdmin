import { Check} from 'lucide-react';
import Image1 from "../../../assets/images/ingrediants/image1.png"
import Image2 from "../../../assets/images/ingrediants/image2.png"
import Image3 from "../../../assets/images/ingrediants/image3.png"
import Image4 from "../../../assets/images/ingrediants/image4.png"
import ProductImage from "../../../assets/images/productImage/image4.png"
import { useState } from 'react';
export default function AddIngrediantsFormStep5() {
    const [View,setView]=useState<string>('desktop')
  return (
    <div className=" p-8 max-w-5xl mx-auto">
        <div className='mb-5 flex gap-5'>
            <button onClick={()=>setView('mobile')} className={`w-[142px] flex justify-center items-center flex-col gap-2 ${View=='desktop'?'bg-white':'bg-[#3A643B1A]'} rounded-lg h-[111px] `}>
                <svg width="29" height="43" viewBox="0 0 29 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.0833 0.75H10.9583C6.14608 0.75 3.73996 0.75 2.24497 2.24497C0.75 3.73996 0.75 6.14608 0.75 10.9583V31.375C0.75 36.1872 0.75 38.5933 2.24497 40.0884C3.73996 41.5833 6.14608 41.5833 10.9583 41.5833H17.0833C21.8955 41.5833 24.3016 41.5833 25.7968 40.0884C27.2917 38.5933 27.2917 36.1872 27.2917 31.375V10.9583C27.2917 6.14608 27.2917 3.73996 25.7968 2.24497C24.3016 0.75 21.8955 0.75 17.0833 0.75Z" stroke={View=='desktop'?"#918CAC":"#3A643B"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<p className={` ${View=="desktop"?"text-[#918CAC]":"text-[#3A643B]"}text-base font-semibold`}>Mobile View</p>
            </button>
               <button onClick={()=>setView('desktop')} className={`w-[142px] flex justify-center items-center flex-col gap-2 ${View=='mobile'?'bg-white':'bg-[#3A643B1A]'} rounded-lg h-[111px] `}>
           <svg width="34" height="31" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M23.5 0.75H10.5C5.9038 0.75 3.60571 0.75 2.17786 2.17786C0.75 3.60571 0.75 5.9038 0.75 10.5V13.75C0.75 18.3462 0.75 20.6442 2.17786 22.0721C3.60571 23.5 5.9038 23.5 10.5 23.5H23.5C28.0961 23.5 30.3942 23.5 31.8221 22.0721C33.25 20.6442 33.25 18.3462 33.25 13.75V10.5C33.25 5.9038 33.25 3.60571 31.8221 2.17786C30.3942 0.75 28.0961 0.75 23.5 0.75Z" fill={View=='mobile'?"#918CAC":"#3A643B"}/>
<path d="M23.5 0.75H10.5C5.9038 0.75 3.60571 0.75 2.17785 2.17786C0.75 3.60571 0.75 5.9038 0.75 10.5V13.75C0.75 18.3462 0.75 20.6442 2.17785 22.0721C3.60571 23.5 5.9038 23.5 10.5 23.5H23.5C28.0961 23.5 30.3942 23.5 31.8221 22.0721C33.25 20.6442 33.25 18.3462 33.25 13.75V10.5C33.25 5.9038 33.25 3.60571 31.8221 2.17786C30.3942 0.75 28.0961 0.75 23.5 0.75Z" stroke={View=='mobile'?"#918CAC":"#3A643B"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.25 30H23.5M20.25 30C18.9038 30 17.8125 28.9087 17.8125 27.5625V23.5H17M20.25 30H13.75M17 23.5H16.1875V27.5625C16.1875 28.9087 15.0962 30 13.75 30M17 23.5V30M13.75 30H10.5" stroke={View=='mobile'?"#918CAC":"#3A643B"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<p className={` ${View=="mobile"?"text-[#918CAC]":"text-[#3A643B]"}text-base font-semibold`}>Desktop View</p>
            </button>
        </div>
      <div className=" mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className={`grid  ${View=='desktop'?'md:grid-cols-2':"md:grid-cols-1"} gap-8 p-8`}>
          {/* Product Image Section */}
             <div className="w-full bg-white/30 rounded-full  mb-4 backdrop-blur-sm">
                  <img className='w-full' src={ProductImage}/>
                </div>

          {/* Product Details Section */}
          <div className="flex flex-col w-5/6">
            <h1 className="text-[28px] font-bold mb-2" style={{ color: '#000000' }}>
              Amrutam Amla Churna | Ayurvedic Anti-Oxidant
            </h1>
            <p className="text-3xl font-semibold mb-6">
              ₹ 2820.00
            </p>

            {/* Package Options */}
            <div className="grid grid-cols-3 gap-4 mt-12 mb-6">
              <div className=" bg-[#EEEEEE] rounded-lg  p-4 text-center cursor-pointer hover:border-current transition">
                <p className={`  ${View=='desktop'?"text-sm":"text-3xl"}`} style={{ color: '#303030' }}>170 GM</p>
                <p className={`text-[#484848]  ${View=='desktop'?"text-sm":"text-xl"}`}>1 Month</p>
                <p className={`text-[#484848]  ${View=='desktop'?"text-sm":"text-xl"}`}>1 Jar</p>
                <p className={`text-[#484848]  ${View=='desktop'?"text-sm":"text-3xl"}`}>₹ 329</p>
              </div>
              <div className=" bg-[#EEEEEE] rounded-lg  p-4 text-center cursor-pointer hover:border-current transition">
                <p className={`  ${View=='desktop'?"text-sm":"text-3xl"}`} style={{ color: '#303030' }}>200 GM</p>
                <p className={`text-[#484848]  ${View=='desktop'?"text-sm":"text-xl"}`}>2 Month</p>
                <p className={`text-[#484848]  ${View=='desktop'?"text-sm":"text-xl"}`}>1 Jar</p>
                <p className={`text-[#484848]  ${View=='desktop'?"text-sm":"text-3xl"}`}>₹ 711</p>
              </div>
              <div className=" bg-[#EEEEEE] rounded-lg  p-4 text-center cursor-pointer hover:border-current transition">
                <p className={`  ${View=='desktop'?"text-sm":"text-3xl"}`} style={{ color: '#303030' }}>3 x 400 GM</p>
                <p className={`text-[#484848]  ${View=='desktop'?"text-sm":"text-xl"}`}>3 Month</p>
                <p className={`text-[#484848]  ${View=='desktop'?"text-sm":"text-xl"}`}>3 Jar</p>
                <p className={`text-[#484848]  ${View=='desktop'?"text-sm":"text-3xl"}`}>₹ 3636</p>
              </div>
         
            </div>

            <p className="text-xl leading-relaxed mb-6" style={{ color: '#303030' }}>
              Amrutam's Amla Churna is a pure and authentic Ayurvedic recipe that is an excellent source of Vitamin C, brought to you freshly from the gardens of Amrutam Vatika.
            </p>

            {/* Primary Benefits */}
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4" style={{ color: '#303030' }}>
                Primary Benefits
              </h2>
              <div className="space-y-3">
                {[
                  'Reduces Hair Fall',
                  'Treats Scalp Health',
                  'Improves Blood Circulation',
                  'Promotes Hair Growth',
                  'Repairs Damaged Hair',
                  'Treats Dry and Frizzy Hair',
                  'Makes Hair Soft & Voluminous'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="rounded-full p-1 bg-[#3A643B]/30" >
                      <Check className="w-4 h-4" style={{ color: '#3A643B' }} />
                    </div>
                    <span style={{ color: '#303030' }}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Secondary Benefits */}
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4" style={{ color: '#000000' }}>
                Secondary Benefits
              </h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center justify-center p-4 rounded-lg">
               <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.75 30.75C24.0343 30.75 30.75 24.0343 30.75 15.75C30.75 7.46573 24.0343 0.75 15.75 0.75C7.46573 0.75 0.75 7.46573 0.75 15.75C0.75 24.0343 7.46573 30.75 15.75 30.75Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.75 21.15L21.346 20.85C20.2687 20.05 19.0008 20.05 17.9236 20.85L17.5197 21.15C16.4424 21.9499 15.1745 21.9499 14.0973 21.15L13.6932 20.85C12.616 20.05 11.3481 20.05 10.2708 20.85L9.75 21.2368" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.76346 11.25H9.75M21.75 11.25H21.7365" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


                  <p className="text-xs font-medium mt-3 text-center" style={{ color: '#303030' }}>Reduces Stress and Anxiety</p>
                </div>
                <div className="flex justify-center items-center flex-col p-4 rounded-lg" >
                  <svg width="26" height="32" viewBox="0 0 26 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.03613 0.75C9.03613 3 10.4658 4.61148 13.5056 3.55803C19.7862 1.38148 24.75 8.02365 24.75 13.95C24.75 20.3211 20.5248 24.75 14.3271 24.75C10.5419 24.75 6 27 6 30.75" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.7587 0.75V1.91335C3.7587 7.61766 11.8919 11.8311 9.20604 17.5498C8.13872 19.8225 0.75 24 0.75 30.75" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.75 8.25C17.1864 8.69562 18.3165 9.82405 18.75 11.25" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                  <p className="text-xs font-medium text-center mt-3" style={{ color: '#303030' }}>Aids in Digestion</p>
                </div>
                <div className="text-center flex justify-center items-center flex-col p-4 rounded-lg" >
                <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5 9L12.75 15H18.75L15 21" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29.2665 18.2086C30.0493 17.9932 30.4409 17.8855 30.5954 17.6796C30.75 17.4736 30.75 17.1423 30.75 16.4797V13.5204C30.75 12.8578 30.75 12.5265 30.5954 12.3205C30.4407 12.1146 30.0493 12.0069 29.2665 11.7915C26.3409 10.9865 24.5098 7.86573 25.2649 4.90021C25.4725 4.08466 25.5764 3.67689 25.4772 3.43773C25.3781 3.19857 25.0937 3.03375 24.5246 2.70412L21.9375 1.20544C21.3792 0.881998 21.1001 0.720268 20.8496 0.754708C20.5989 0.789148 20.3163 1.07688 19.7508 1.65235C17.562 3.88033 13.9404 3.88024 11.7515 1.6522C11.1861 1.07673 10.9035 0.788998 10.6529 0.754558C10.4023 0.720118 10.1232 0.881848 9.5648 1.20529L6.97776 2.70399C6.4088 3.03358 6.1243 3.19839 6.02517 3.43752C5.92602 3.67665 6.0298 4.08447 6.23737 4.90011C6.99205 7.8657 5.15958 10.9865 2.23353 11.7915C1.45068 12.0069 1.05926 12.1146 0.90462 12.3205C0.75 12.5265 0.75 12.8577 0.75 13.5204V16.4797C0.75 17.1423 0.75 17.4736 0.90462 17.6796C1.05923 17.8855 1.45067 17.9932 2.23353 18.2086C5.1591 19.0137 6.99012 22.1344 6.23508 25.0999C6.02744 25.9155 5.92361 26.3232 6.02274 26.5624C6.12189 26.8015 6.40638 26.9664 6.97537 27.2959L9.56242 28.7947C10.1208 29.1181 10.4 29.2798 10.6506 29.2455C10.9012 29.211 11.1838 28.9231 11.7491 28.3477C13.9391 26.1178 17.5632 26.1178 19.7533 28.3476C20.3185 28.9231 20.6012 29.2108 20.8518 29.2453C21.1023 29.2797 21.3816 29.118 21.9399 28.7946L24.5269 27.2958C25.096 26.9662 25.3806 26.8014 25.4796 26.5621C25.5788 26.323 25.475 25.9152 25.2672 25.0998C24.5118 22.1344 26.3413 19.0137 29.2665 18.2086Z" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
</svg>


                  <p className="text-xs font-medium mt-3 text-center" style={{ color: '#303030' }}>Boosts the Immune System</p>
                </div>
              </div>
            </div>

            {/* Dosage */}
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-3" style={{ color: '#000000' }}>Dosage</h2>
              <p style={{ color: '#303030' }}>🔁 Twice a day | 🕖 Empty Stomach  </p>
            </div>

            {/* Usage */}
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-3" style={{ color: '#000000' }}>Usage</h2>
              <div className="space-y-2" style={{ color: '#303030' }}>
                <p>🧴 Shampoo | Twice a week</p>
                <p>💆 Oil | Twice a week</p>
                <p>🧖 Spa | Twice a week</p>
              </div>
            </div>

            {/* Primary Ingredients */}
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4" style={{ color: '#000000' }}>
                Primary Ingredients
              </h2>
              <div className={`grid ${View=="desktop"?"grid-cols-2":"grid-cols-4"}  gap-4`}>
                {[
                  { name: 'Bhringraj', icon:Image1 },
                  { name: 'Sariva', icon:Image2 },
                  { name: 'Gudahal', icon:Image3 },
                  { name: 'Jatamansi', icon:Image4 }
                ].map((ingredient, index) => (
                  <div key={index} className="border-2 flex justify-center flex-col items-center rounded-lg p-4 text-center hover:shadow-md transition" style={{ borderColor: '#3A643B1A' }}>
                    <img src={ingredient.icon}/>
                    <p className="font-medium" style={{ color: '#303030' }}>{ingredient.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Duration */}
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-3" style={{ color: '#000000' }}>Duration</h2>
              <p style={{ color: '#303030' }}>⏰ 3-6 months minimum.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}