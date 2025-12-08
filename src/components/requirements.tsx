import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

interface IRequirement {
  title: string;
  description?: string;
  requirements: Array<{
    name: string;
    type: string;
    required: boolean;
  }>;
}

interface IGatherRequirementsForm {
  [key: string]: any;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<IRequirement[]>([]);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IGatherRequirementsForm>();

  const onSubmit = (data: IGatherRequirementsForm) => {
    // Handle form submission logic here
    console.log(data);
    reset();
  };

  return (
    <motion.form onSubmit={handleSubmit(onSubmit)} className="p-6 bg-white rounded-lg shadow-md">
      {requirements.map((requirement, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold mb-2">{requirement.title}</h3>
          {requirement.description && <p className="text-gray-600 mb-2">{requirement.description}</p>}
          {requirement.requirements.map((req, reqIndex) => (
            <div key={reqIndex} className="mb-1">
              <label htmlFor={`${index}-${req.name}`} className="block text-sm font-medium text-gray-700">
                {req.name}
              </label>
              <input
                {...register(`${index}-${req.name}`, { required: req.required })}
                id={`${index}-${req.name}`}
                type={req.type}
                className={`w-full px-3 py-2 border rounded-lg shadow-sm ${errors[`${index}-${req.name}`] ? 'border-red-500' : ''}`}
              />
            </div>
          ))}
        </div>
      ))}
      <button
        type="submit"
        disabled={requirements.length === 0}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Submit Requirements
      </button>
    </motion.form>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

interface IRequirement {
  title: string;
  description?: string;
  requirements: Array<{
    name: string;
    type: string;
    required: boolean;
  }>;
}

interface IGatherRequirementsForm {
  [key: string]: any;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<IRequirement[]>([]);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IGatherRequirementsForm>();

  const onSubmit = (data: IGatherRequirementsForm) => {
    // Handle form submission logic here
    console.log(data);
    reset();
  };

  return (
    <motion.form onSubmit={handleSubmit(onSubmit)} className="p-6 bg-white rounded-lg shadow-md">
      {requirements.map((requirement, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold mb-2">{requirement.title}</h3>
          {requirement.description && <p className="text-gray-600 mb-2">{requirement.description}</p>}
          {requirement.requirements.map((req, reqIndex) => (
            <div key={reqIndex} className="mb-1">
              <label htmlFor={`${index}-${req.name}`} className="block text-sm font-medium text-gray-700">
                {req.name}
              </label>
              <input
                {...register(`${index}-${req.name}`, { required: req.required })}
                id={`${index}-${req.name}`}
                type={req.type}
                className={`w-full px-3 py-2 border rounded-lg shadow-sm ${errors[`${index}-${req.name}`] ? 'border-red-500' : ''}`}
              />
            </div>
          ))}
        </div>
      ))}
      <button
        type="submit"
        disabled={requirements.length === 0}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Submit Requirements
      </button>
    </motion.form>
  );
};

export default GatherRequirements;