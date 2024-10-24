'use client'
import React, { useState } from 'react';
import { Camera, Upload, Check, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAppSelector,useAppDispatch } from '@/Store/hook';
import { logOut } from '@/Store/Features/LoginSlice';

const OnboardingFlow = () => {
  const router = useRouter()
  const userData = useAppSelector((state)=>state.login);
  console.log(userData)
  const dispatch = useAppDispatch()
  if(!userData.isLoggedIn){
    router.push('/login')
  }

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: userData.name,
    about: '',
    avatarFile: null,
    avatarPreview: userData.avatar
  });

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({
        ...formData,
        avatarFile: file,
        avatarPreview: URL.createObjectURL(file)
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your API call here to save user data
    console.log(userData)

    dispatch(logOut())
    
    
    console.log('Form submitted:', formData);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.username.length >= 3;
      case 2:
        return  formData.avatarPreview !==null || formData.avatarFile !== null;
      case 3:
        return formData.about.length >= 10;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-8">
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= num
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {step > num ? <Check size={16} /> : num}
              </div>
              {num < 3 && (
                <div
                  className={`w-24 h-1 mx-2 ${
                    step > num ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1: Username */}
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">
                Choose your username
              </h2>
              <p className="text-gray-600">
                This is how others will see you on the platform.
              </p>
              <div>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Enter username"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  minLength={3}
                />
                <p className="mt-2 text-sm text-gray-500">
                  Minimum 3 characters, no spaces
                </p>
              </div>
            </div>
          )}

          {/* Step 2: Avatar Upload */}
          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">
                Add a profile picture
              </h2>
              <p className="text-gray-600">
                Help others recognize you with a profile picture.
              </p>
              <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                  {formData.avatarPreview ? (
                    <img
                      src={formData.avatarPreview}
                      alt="Avatar preview"
                      className="w-32 h-32 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
                      <Camera size={40} className="text-gray-400" />
                    </div>
                  )}
                  <label className="absolute bottom-0 right-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700">
                    <Upload size={16} className="text-white" />
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: About */}
          {step === 3 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">
                Tell us about yourself
              </h2>
              <p className="text-gray-600">
                Share a brief description about yourself with others.
              </p>
              <div>
                <textarea
                  name="about"
                  value={formData.about}
                  onChange={handleInputChange}
                  placeholder="Write a short bio..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32 resize-none"
                  minLength={10}
                />
                <p className="mt-2 text-sm text-gray-500">
                  Minimum 10 characters
                </p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-end space-x-4">
            {step < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                disabled={!isStepValid()}
                className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
                <ArrowRight size={16} className="ml-2" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={!isStepValid()}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Complete Setup
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default OnboardingFlow;