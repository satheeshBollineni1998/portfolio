"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+1 516-914-9017",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "satish9bollineni@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "6 David Ct, Plainview, New York, 11803",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.6, ease: "easeInOut" },
      }}
      className="py-12 bg-gray-900 text-white"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-12">
          {/* Contact Info Section */}
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-accent">Contact Information</h2>
            <p className="text-gray-400">
              Reach out to us through any of the following contact methods:
            </p>
            <div className="flex flex-col gap-6">
              {info.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-2xl text-accent">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
