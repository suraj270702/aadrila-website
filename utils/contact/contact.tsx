import { InputFieldProps, OfficeInfoProps } from "@/types/contact";

export const InputField: React.FC<InputFieldProps> = ({ placeholder, type = "text" }) => (
  <input
    type={type}
    className="border border-[#959595] text-[#959595] px-4 md:px-6 py-3 md:py-4 rounded-md focus:outline-none focus:border-[#3E6EB4] transition-colors"
    placeholder={placeholder}
  />
);

export const TextAreaField: React.FC<{ placeholder: string }> = ({ placeholder }) => (
  <textarea
    rows={4}
    className="border border-[#959595] text-[#959595] px-4 md:px-6 py-3 md:py-4 rounded-md resize-none focus:outline-none focus:border-[#3E6EB4] transition-colors"
    placeholder={placeholder}
  />
);

export const OfficeInfo: React.FC<OfficeInfoProps> = ({ title, address }) => (
  <div className="mt-6 first:mt-0">
    <h2 className="text-sm md:text-base font-bold text-[#000] underline mb-2">
      {title}
    </h2>
    <p className="text-xs md:text-sm font-normal text-[#000] leading-relaxed">
      {address}
    </p>
  </div>
);

export const ContactForm =()=> {
    return (
        <div className="bg-white border border-[#EDEDED] px-6 md:px-10 lg:px-[50px] py-10 md:py-16 lg:py-[80px] rounded-[20px] shadow-xl">
              <div className="flex flex-col gap-y-5 md:gap-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                  <InputField placeholder="Name" />
                  <InputField placeholder="Email" type="email" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                  <InputField placeholder="Phone Number" type="tel" />
                  <InputField placeholder="Company" />
                </div>
                
                <InputField placeholder="Inquiry Type" />
                
                <TextAreaField placeholder="Message" />
                
                <button className="w-full px-8 min-h-[52px] text-white font-semibold text-base rounded-full bg-[#3E6EB4] hover:bg-[#2E5E9E] transition-all hover:shadow-lg active:scale-95">
                  Send Enquiry
                </button>
              </div>
            </div>
    )
}