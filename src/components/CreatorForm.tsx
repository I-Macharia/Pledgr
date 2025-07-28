import React, { useState } from 'react';
import { User, MessageCircle, Image, Loader } from 'lucide-react';
import { CreatorFormData } from '../types/creator';

interface CreatorFormProps {
  onSubmit: (data: CreatorFormData) => Promise<void>;
  isLoading: boolean;
}

const CreatorForm: React.FC<CreatorFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<CreatorFormData>({
    name: '',
    bio: '',
    avatar: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (

    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <User className="w-4 h-4 inline mr-2" />
          Creator Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 transition-all duration-200 outline-none"
          placeholder="Enter your creator name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <MessageCircle className="w-4 h-4 inline mr-2" />
          Bio
        </label>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 transition-all duration-200 outline-none resize-none"
          placeholder="Tell us about yourself..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Image className="w-4 h-4 inline mr-2" />
          Avatar URL
        </label>
        <input
          type="url"
          name="avatar"
          value={formData.avatar}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 transition-all duration-200 outline-none"
          placeholder="https://example.com/avatar.jpg"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white py-3 rounded-lg hover:from-sky-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 font-medium flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <Loader className="w-5 h-5 animate-spin" />
            Registering...
          </>
        ) : (
          'Register as Creator'
        )}
      </button>
    </form>
  );
};

export default CreatorForm;