// ContactFormSection.tsx
import Head from "next/head";
import React from "react";

const ContactFormSection: React.FC = () => {
  return (
    <>
      <section className="bg-black w-screen overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* First Column */}
            <div className="w-full">
              <h2 className="text-2xl font-semibold mb-4 ml-20 text-borderColor">
                GET IN TOUCH
              </h2>
            </div>
            {/* Second Column */}
            <div className="w-full">
              <form
                className="flex flex-col gap-4 mr-4"
                method="post"
                name="Contact Page Form"
                data-gtm-form-interact-id="0"
              >
                <input type="hidden" name="post_id" value="65" />
                <input type="hidden" name="form_id" value="98a883b" />
                <input type="hidden" name="referer_title" value="Home – Copy" />
                <div className="flex flex-col sm:flex-row sm:space-x-4">
                  {/* Name Field */}
                  <div className="w-full sm:w-1/2 bg-black text-borderColor">
                    <label htmlFor="form-field-name" className="sr-only">
                      Your name
                    </label>
                    <input
                      type="text"
                      name="form_fields[name]"
                      id="form-field-name"
                      placeholder="Enter Your Name"
                      required
                      aria-required="true"
                      className="w-full px-4 py-2 border border-borderColor rounded focus:outline-none focus:border-borderColor bg-black placeholder:text-[#766438]"
                    />
                  </div>
                  {/* Email Field */}
                  <div className="w-full sm:w-1/2 text-borderColor bg-black">
                    <label htmlFor="form-field-email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      name="form_fields[email]"
                      id="form-field-email"
                      placeholder="Your e-mail address"
                      required
                      aria-required="true"
                      className="w-full px-4 py-2 border border-borderColor rounded focus:outline-none focus:border-borderColor bg-black placeholder:text-[#766438]"
                    />
                  </div>
                </div>
                {/* Phone Number Field */}
                <div className="flex flex-col sm:flex-row sm:space-x-4">
                  <div className="w-full sm:w-1/2 text-borderColor bg-black">
                    <label htmlFor="form-field-message" className="sr-only">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="form_fields[message]"
                      id="form-field-message"
                      placeholder="Your Phone Number"
                      required
                      aria-required="true"
                      pattern="[0-9()#&+*-=.]+"
                      title="Only numbers and phone characters (#, -, *, etc) are accepted."
                      className="w-full px-4 py-2 border border-borderColor rounded focus:outline-none focus:border-borderColor bg-black placeholder:text-[#766438]"
                    />
                  </div>
                  {/* Checkin Date Field */}
                  <div className="w-full sm:w-1/2 text-borderColor bg-black">
                    <label
                      htmlFor="form-field-field_bc5210e"
                      className="sr-only"
                    >
                      Checkin date
                    </label>
                    <input
                      type="text"
                      name="form_fields[field_bc5210e]"
                      id="form-field-field_bc5210e"
                      placeholder="Checkin date"
                      required
                      aria-required="true"
                      pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                      className="w-full px-4 py-2 border border-borderColor rounded focus:outline-none focus:border-borderColor bg-black placeholder:text-[#766438]"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:space-x-4">
                  <div className="w-full sm:w-1/2 text-borderColor bg-black">
                    <label
                      htmlFor="form-field-field_e7402e9"
                      className="sr-only"
                    >
                      Checkout date
                    </label>
                    <input
                      type="text"
                      name="form_fields[field_e7402e9]"
                      id="form-field-field_e7402e9"
                      placeholder="Checkout date"
                      required
                      aria-required="true"
                      pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                      className="w-full px-4 py-2 border border-borderColor rounded focus:outline-none focus:border-borderColor bg-black placeholder:text-[#766438]"
                    />
                  </div>

                  <div className="w-full sm:w-1/2 text-borderColor bg-black">
                    <label
                      htmlFor="form-field-field_50bc801"
                      className="sr-only"
                    >
                      Any queries?
                    </label>
                    <input
                      type="text"
                      name="form_fields[field_50bc801]"
                      id="form-field-field_50bc801"
                      placeholder="Enter your question here"
                      className="w-full px-4 py-2 border border-borderColor rounded focus:outline-none focus:border-borderColor bg-black placeholder:text-[#766438]"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-start items-baseline text-white">
                    <input
                      type="checkbox"
                      id="form-field-field_1044dde-0"
                      name="form_fields[field_1044dde]"
                      value="I authorize Jade Retreats Private Limited Company to call/communicate with me on their offerings/promotions through Telephone Call/Whatsapp/SMS/Email Id. This will override the registry on DND/NDMC"
                      className="mr-2 pt-2"
                      data-gtm-form-interact-field-id="0"
                    />
                    <label htmlFor="form-field-field_1044dde-0">
                      I authorize Jade Retreats Private Limited Company to
                      call/communicate with me on their offerings/promotions
                      through Telephone Call/Whatsapp/SMS/Email Id. This will
                      override the registry on DND/NDMC
                    </label>
                  </div>
                </div>

                <div className="w-full">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-custom-gradient font-semibold text-black rounded hover:bg-borderColor focus:outline-none focus:bg-borderColor"
                  >
                    ENQUIRE NOW
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactFormSection;
